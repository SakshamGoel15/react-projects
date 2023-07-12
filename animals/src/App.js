import React, {useState} from 'react';
import AnimalShow from './components/AnimalShow';
import './App.css';

function getRandomAnimal() {
    const animals = ['cat', 'dog', 'bird','cow', 'gator', 'horse'];
    const randomIndex = Math.floor(Math.random() * animals.length)
    return animals[randomIndex];
}
function App() {
    const [animals, setAnimal] = useState([]);
    const handleClick = () => {
        setAnimal([...animals, getRandomAnimal()]);
    }
    const renderAnimals = animals.map((animal, index) => {
            return <AnimalShow key={index} type={animal} />
    })
    
    return (
        <div className='app'>
            <button onClick={handleClick}>Click Me</button>
            <div className='animal-list'>{renderAnimals}</div>
        </div>
        
    )
}

export default App