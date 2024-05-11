import React from "react";
import { useState } from "react";

function ClickPractice()
{
    const clickHandler=()=>{
        setIsshow(wasOpened => !wasOpened)
    }
    const [isshow ,setIsshow]=useState(true)
   return(

    <>
     <p>Allah Akbar</p>
    { isshow ? <p>ShowUP</p> : '' } 
     <button onClick={clickHandler}>Click ME</button>
    </>
   )
}
export default ClickPractice;