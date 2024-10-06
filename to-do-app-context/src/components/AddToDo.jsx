import { useState,useRef, useContext } from "react";
import { IoIosAdd } from "react-icons/io";
import {ItemContext} from '../store/items-context-store'

export function AddToDO()
{
   
    const {addToDo}=useContext(ItemContext);

    const nameValue=useRef("");
    const dateValue=useRef("");

    async function submitHandler(e){
        e.preventDefault();
       const isAddedDom=await addToDo(nameValue.current.value,dateValue.current.value)
        //console.log(isAddedDom);
       if(isAddedDom)
       {
        // setnameValue('');
        // setdateValue('');
        nameValue.current.value='';
        dateValue.current.value='';
       }
     
    } 
    // const [nameValue,setnameValue]=useState('');
    // const [dateValue,setdateValue]=useState('');

    return(
    <form className="row" onSubmit={submitHandler}>
        <div className="col-md-4">
        {/* <input type="text" placeholder="enter item" className='form-control' value={nameValue} onChange={(e)=>setnameValue(e.target.value)} /> */}
        <input type="text" placeholder="enter item" className='form-control' ref={nameValue}  />
        </div>
        <div className="col-md-4">
        {/* <input type="date" className='form-control' id="" value={dateValue} onChange={(e)=>setdateValue(e.target.value)}/> */}
        <input type="date" className='form-control' id="" ref={dateValue}/> 
        </div>
        <div className="col-md-1">
        {/* <button className='btn btn-success' data-id="12" onClick={()=>{ addToDo(nameValue,dateValue)}}> <IoIosAdd/></button> */}
        <button className='btn btn-success'><IoIosAdd/></button>
        </div>
    </form>
   )
}

export function ShowToDO({item})
{
    const {name,date}=item;
    const {handleDelete}=useContext(ItemContext);
    return(<>
        <div className="row mt-3">
        <div className="col-md-4">
        { name}
        </div>
        <div className="col-md-4">
        { date }
        </div>
        <div className="col-md-3">
        <button className='btn btn-danger' onClick={()=>{handleDelete(name)}}>Delete</button>
        </div>
    </div>
    </>
   );
}


export  function WelcomeMessage()
{
    const {todoItems}=useContext(ItemContext);
    return todoItems.length==0 && (<>
       <p className="bg-success">Enjoy Your Day</p>
    </>);
}