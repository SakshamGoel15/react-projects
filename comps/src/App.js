import { useState } from 'react'
import Dropdown from './components/Dropdown'



function App() {
  const options = [
    { id: 1, label: 'Option 1', value: 'option1' },
    { id: 2, label: 'Option 2', value: 'option2' },
    { id: 3, label: 'Option 3', value: 'option3' },
    { id: 4, label: 'Option 4', value: 'option4' },
    ]
    const [selectedValue, setSelectedValue] = useState(null);

    const handleSelect = (value) => {
    setSelectedValue((currentSelectedValue) => {
      return value;
    });
    }
  return (
    <Dropdown data={options} onChange ={handleSelect} Value = {selectedValue}/>
  )
}

export default App