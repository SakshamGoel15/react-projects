import React, {useState} from 'react'
import SearchBar from './components/SearchBar';
import searchImage from './api';
import ImageList from './components/ImageList';

function App() {
  const [results,setResult] = useState([])
const handleSubmit = async (term) => {
 // console.log(term);
  const result = await searchImage(term);
  setResult(result);
}
  return (
    <div>
      <SearchBar onSubmit={handleSubmit} />
      <ImageList images ={results}/>
    </div>
  )
}

export default App