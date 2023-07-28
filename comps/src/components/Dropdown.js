import { useState } from 'react'
import {GoChevronDown} from 'react-icons/go';
import Panel  from './panels';

function Dropdown({ data, onChange, Value }) {
    const [isOpen, setIsOpen] = useState(false);
    const handleClick = () => {
        setIsOpen((currentIsOpen) => {
            return !currentIsOpen;
        })
    }
    const handleOptionClick = (item) => { 
        setIsOpen(false);
        const selectedValue = item;
        onChange(selectedValue);
    } 
    const renderDropdown = data.map((items, index) => {
        return (
            <div
                className='hover:bg-sky-100 p-1 rounded cursur-pointer'
                onClick={() =>{handleOptionClick(items)}} 
                key={items.id}>
                {items.label}
            </div>
        )
    })
   // let content = selection? <div >{selection.value}</div> : <div>select</div>
    return (
        <div className='w-48 relative'>
            <Panel className="flex justify-between item-center cursor-pointer" onClick={handleClick}>
                {Value?.label || 'select...'}
                <GoChevronDown className='text-lg'/>
            </Panel>
            { isOpen && <Panel className="absolute top-full">{renderDropdown}</Panel>}
        </div>
    )
}

export default Dropdown;