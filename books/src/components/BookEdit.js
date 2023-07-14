import {useState} from 'react';
import useBooksContext from '../hooks/useBookContext';

function BookEdit({book,onSubmit}) {
  const {EditBook} = useBooksContext();
  const [title,setTitle] = useState(book.title);

  const handleFormSubmit = (event)=> {
    event.preventDefault();
    //console.log(title);
    onSubmit();
    EditBook(title,book.id);
  }
  const handleChange = (event) => {
setTitle(event.target.value);
  }
  return (
    <div>
      <form className='book-edit' onSubmit={handleFormSubmit}>
        <input value={title}className='input'onChange={handleChange}/>
        <button className="button is-primary">Save</button>
      </form>
      
    </div>
  )
}

export default BookEdit