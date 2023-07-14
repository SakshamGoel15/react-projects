import React, {useState} from 'react'
import BookEdit from './BookEdit';

function BookShow({book,onDelete,onEdit}) {
  const [showEdit,setShowEdit] = useState(false);
  const handleDelete = () =>{
    onDelete(book.id);
  }
  const handlEditDisplay = () =>{
    setShowEdit(!showEdit);
  };
  const handleOnEdit = (title,id) =>{
    onEdit(title,id);
    setShowEdit(false);

  }
let content =<h3>{book.title}</h3>;
if(showEdit){
  content = <BookEdit  onEdit={handleOnEdit} book={book}/>
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