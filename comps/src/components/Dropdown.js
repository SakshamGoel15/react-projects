import { useState, useEffect, useRef} from 'react'
import {GoChevronDown} from 'react-icons/go';
import Panel  from './panels';

function Dropdown({ data, onChange, Value }) {
    const [isOpen, setIsOpen] = useState(false);
    const divEl = useRef();

    useEffect(() => {
        const handler = (event) =>{
           // console.log(event.target);
            // console.log(divEl.current);
            if(!divEl.current){
                return;
            }
            if(!divEl.current.contains(event.target)){
                setIsOpen(false);
            }else{
                console.log('inside');
            }
        };
        document.addEventListener('click', handler, true);
        return () => {
            document.removeEventListener('click', handler);
        }
    },[]);
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
        <div ref = {divEl} className='w-48 relative'>
            <Panel className="flex justify-between item-center cursor-pointer" onClick={handleClick}>
                {Value?.label || 'select...'}
                <GoChevronDown className='text-lg'/>
            </Panel>
            { isOpen && <Panel className="absolute top-full">{renderDropdown}</Panel>}
        </div>
    )
}

export default Dropdown;