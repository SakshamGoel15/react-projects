import { createContext, useState } from "react"
import { createBook, updateBook, deleteBook, getBooks } from '../api';

const BooksContext = createContext();

function Provider({children}) {
    const [books, setBooks] = useState([]);
    const getAllBooks = async () => {
        const response = await getBooks();
        setBooks(response);
    };
    const newBook = async (title) =>{
        const response = await createBook(title);
        setBooks([
        ...books, response]);
    }
    const deleteBookByID = async (id) =>{
        await deleteBook(id);
        setBooks(
        books.filter((book ,index) => {
            return id !== book.id;
        })
        );}
    
    const EditBook = async (title,id) =>{
        const response = await updateBook(id,title);
        setBooks(books.map((book,index)=>{
            if(book.id === id){
            return {...book, ...response};
            }
            return book;
        }));}

    const ValueToShare = {
        books,
        getAllBooks,
        newBook,
        deleteBookByID,
        EditBook
    }
    return (
        <BooksContext.Provider value={ValueToShare}>
            {children}
        </BooksContext.Provider>
    );
}

export {Provider};
export default BooksContext;