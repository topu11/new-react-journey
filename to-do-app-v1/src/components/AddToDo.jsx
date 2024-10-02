import { useState } from "react";

export function AddToDO({addToDo})
{
    // const clickHandler=(a)=>{
    //     alert(a);
    // }
    
    const [nameValue,setnameValue]=useState('');
    const [dateValue,setdateValue]=useState('');

    return(
    <div className="row">
        <div className="col-md-4">
        <input type="text" placeholder="enter item" className='form-control' value={nameValue} onChange={(e)=>setnameValue(e.target.value)} />
        </div>
        <div className="col-md-4">
        <input type="date" className='form-control' id="" value={dateValue} onChange={(e)=>setdateValue(e.target.value)}/>
        </div>
        <div className="col-md-1">
        <button className='btn btn-success' data-id="12" onClick={()=>{ addToDo(nameValue,dateValue)}}>ADD</button>
        
        </div>
    </div>
   )
}

export function ShowToDO({item,handleDelete})
{
    const {name,date}=item;
     console.log(name)
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
    return (<>
       <p className="bg-success">Enjoy Your Day</p>
    </>);
}