import React, {useState} from 'react';
import BookCreate from './components/BookCreate';
import BookList from './components/BookList';
import BookShow from './components/BookShow';

function App() {
  const [books, setBooks] = useState([]);
  const createBook = (title) =>{
  setBooks([
    ...books,{
      id: Math.round(Math.random()*9909), title,
    }]);}

  const deleteBook = (id) =>{
    setBooks(
      books.filter((book ,index) => {
        return id !== book.id;
      })
      );}

  const EditBook = (title,id) =>{
    setBooks(books.map((book,index)=>{
      if(book.id === id){
        return {...book,title,};
      }
      return book;
    }));}
  return (
    <div>
      <h1>Reading Images</h1>
      <BookCreate onCreate = {createBook}/>
      <BookList books={books} onDelete={deleteBook} onEdit={EditBook} />
    </div>
  )
}

export default App