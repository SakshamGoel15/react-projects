import React, {useState} from 'react'

function BookCreate({onCreate}) {
    const [BookName,setBookName] = useState('');
    const HandleOnSubmit = (event) =>{
        event.preventDefault();
        onCreate(BookName);
        setBookName('');
    }
    const handleOnChange = (event) =>{
        setBookName(event.target.value);
    }
    return (
        <div className='book-create'>
            <h3>Add a Book</h3>
            <form onSubmit={HandleOnSubmit}>
                <label>title</label>
                <input className="input" value={BookName} onChange = {handleOnChange}/>
                <button className='button'>Submit</button>
            </form>
        </div>
    )
}

export default BookCreate