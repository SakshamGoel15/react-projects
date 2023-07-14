import { useState} from 'react'
import useBookContext from '../hooks/useBookContext';
import BookEdit from './BookEdit';


function BookShow({book}) {
  const {deleteBookByID} = useBookContext();
  const [showEdit,setShowEdit] = useState(false);
  const handleDelete = () =>{
    deleteBookByID(book.id);
  }
  const handlEditDisplay = () =>{
    setShowEdit(!showEdit);
  };
  const handleOnEdit = (title,id) =>{
    setShowEdit(false);
  }
let content =<h3>{book.title}</h3>;
if(showEdit){
  content = <BookEdit  onSubmit={handleOnEdit} book={book}/>
}

  return (
    <div className='book-show'>
      <img src={`https://picsum.photos/seed/${book.id}/300/200`} alt={book.title}/>
      <div>{content}</div>
      <div className='actions'>
      <button className="edit" onClick={handlEditDisplay}>Edit</button>
      <button className="delete" onClick={handleDelete}>Delete</button>
      </div>
    </div>
  )
}

export default BookShow