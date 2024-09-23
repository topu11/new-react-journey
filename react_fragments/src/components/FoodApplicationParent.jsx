import Welcome from './welcome'
import Error from   './error'
import Listwrapper from './listwrapper' 
import FoodInput from './FoodInput' 
import { useState } from 'react'
import InputFieldShowing from './InputFieldShowing';

export default function FoodApplication()
{
    
    const initialfoods=[];
    const [foods,setFoods]=useState(initialfoods) 
    const [showingInputValue,setshowingInputValue]=useState(`Input value will Show here`);
    const input_food_change_handle=(newValue)=>{  
        setshowingInputValue(newValue)
        let newFoodArray=[...foods,newValue];
        setFoods(newFoodArray)
                     
        
    }
    return(
     <>
      <Welcome message="welcome to Food App"/>
      <InputFieldShowing textValue={showingInputValue}/>
      <FoodInput  foods={foods} onSubmit={input_food_change_handle}/>
      <Error foods={foods} message="No food Provided"/>
      <Listwrapper foods={foods}/>
     
     </>
    );
}