import { useState } from 'react';
import {GoChevronDown, GoChevronLeft} from 'react-icons/go';
function Accordion({data}) {
    const [exandedIndex, setExpandedIndex] = useState(-1);
    
    const handleExpand = (nextindex) => {
        setExpandedIndex((currentExpandedIndex)=>{
            if(currentExpandedIndex === nextindex){
                return -1;
            }
            return nextindex;
        });
    };
    const renderAccordion = data.map((items,index) => {
        const isExpanded = exandedIndex === index;
       
        const icon = <span className='text-2xl'>{isExpanded ? <GoChevronDown/> : <GoChevronLeft/>}</span>;
        return (
            <div key={items.id}>
                <div className = 'flex justify-between p-3 bg-gray-50 boarder-b items-center cursur-pointer' onClick= {()=>{handleExpand(index)}}>
                    {items.heading}
                    {icon}
                </div>
                {isExpanded && <div className="boarder p-5">{items.content}</div>}
            </div>
        );
    });

    return (
        <div className='boarder-x boarder-t rounded'>
            {renderAccordion}
        </div>
    )
}

export default Accordion