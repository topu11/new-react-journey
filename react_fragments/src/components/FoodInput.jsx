import { useState } from "react";

export default function FoodInput({onSubmit,foods})
{
  const [inputValue, setInputValue] = useState('');

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
    //console.log(e);
  };

  const handleButtonClick = () => {
    if(!inputValue)
      {
          alert(`Please provide food name`);
          return;
      }
      if(foods.includes(inputValue))
      {
          alert(`${inputValue} is already in the list`);
          return;
      } 

    onSubmit(inputValue); // Pass the input value to the parent
    setInputValue(''); // Clear the input field
  };
  const onKeyDown=(e)=>{
       if(e.key === "Enter")
       {
        handleButtonClick();
       }
  }
   // console.log(foodInput)
    
      return(
        <>
            <div className="input-group mb-3">
            {/* <input type="text" value={foodInput} className="form-control me-2" onChange={()=>{setFoodInput(event.target.value)}}/><button className="btn btn-primary" onClick={()=>{input_food_change_handle(foodInput); setFoodInput('')}}>Add</button> */}

            <input type="text" className="form-control me-2" value={inputValue} onChange={handleInputChange} onKeyDown={onKeyDown} /><button className="btn btn-primary" onClick={handleButtonClick}>Add</button> 

            </div>
         
        </>
      );
}