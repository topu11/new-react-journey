import { useState } from 'react';
import Listitem from   './listitem'

export default function Listwrapper({foods})
{   
     const [Active,setActive]=useState([]);

     const alertName = (event, name_food) => {
      // Check if the item is already in the Active list
      if (Active.includes(name_food)) {
          const confirmRemove = confirm("Do you really want to remove the item " + name_food + "?");
          if (confirmRemove) {
              // Update state to remove the item
              const newFoodArray = Active.filter(food => food !== name_food);
              setActive(newFoodArray);
              alert("Item removed: " + name_food);  // Show alert after removal
          }
      } else {
          const confirmAdd = confirm("Do you really want to add the item " + name_food + "?");
          if (confirmAdd) {
              // Update state to add the item
              const newFoodArray = [...Active, name_food];
              setActive(newFoodArray);
              alert("Item added: " + name_food);  // Show alert after addition
          }
      }
  };
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