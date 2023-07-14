import React,{useState} from 'react'

function BookEdit({book,onEdit}) {
  const [title,setTitle] = useState(book.title);

  const handleFormSubmit = (event)=> {
    event.preventDefault();
    //console.log(title);
    onEdit(title,book.id);
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