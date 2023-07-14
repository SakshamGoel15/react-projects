import {useEffect} from 'react';
import BookCreate from './components/BookCreate';
import BookList from './components/BookList';
import useBookContext from './hooks/useBookContext';

  function App() {
    const {getAllBooks} = useBookContext();
    useEffect(() => {
      getAllBooks();
    },[]);

  return (
    <div>
      <h1>Reading Images</h1>
      <BookCreate />
      <BookList />
    </div>
  )
}

export default App