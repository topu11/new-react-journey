import { useState } from 'react';
import Listitem from   './listitem'

export default function Listwrapper({foods})
{   
     const [Active,setActive]=useState([]);

    const alertName=(event,name_food)=>
    {
       // console.log(event);
        alert(name_food);
        
        let newFoodArray=Active.includes(name_food)
        ? Active.filter(food => food !== name_food) // Remove name_food if it exists
        : [...Active, name_food];
        //setFoods(newFoodArray)
        setActive(newFoodArray);
    }
    return (
      <>
      <ul className="list-group">
       {foods.map((item,index)=>{
          return <Listitem active={Active} itemName={item} key={index} alertName={alertName}/>
       })}
      </ul>
      </>
    );
}