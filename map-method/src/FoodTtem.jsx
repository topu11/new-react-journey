import { useState } from 'react'

export default function FoodItem(props)
{
    const {item,showMyName}=props;

    const [isActive, setIsActive] = useState(false);

    const toggleClass = () => {
      setIsActive(!isActive);
    };

    const clickHandler = (item) =>{
        showMyName(item)
        toggleClass()
    }

    return(
        <li className={`list-group-item ${isActive ? 'bg-primary' : ''}`} onClick={()=>clickHandler(item)} key={item}>{item}</li>
    )
}