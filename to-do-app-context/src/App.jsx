import { useState } from 'react'
import {ItemContext} from './store/items-context-store'

import './App.css'
import AppName from './components/AppName'
import {AddToDO,WelcomeMessage} from './components/AddToDo'
import TodoItems from './components/TodoItems'
import swal from 'sweetalert';

function checkKeyValueInArray(arr, key, value) {
  return arr.some(obj => obj[key] === value);
}
function App() {

  
  // const items=[
  //   {
  //     name:"drinking Tea",
  //     date:"11/11/2024"
  //   },
  //   {
  //      name:"drinking Milk",
  //      date:"12/11/2024"
  //   }
  // ]
  const [todoItems,settodoItems]=useState([]);

  const handleDelete=(name)=>{
    //alert(name);
    swal({
      title: "Are you sure?",
      text: "Once deleted, you will not be able to recover this file!",
      icon: "warning",
      buttons: true,
      dangerMode: true,
    })
    .then((willDelete) => {
      if (willDelete) {
      //   let newTodo=todoItems.filter((item)=>{
      //     return item.name !=name;
      //  })
      //  settodoItems(newTodo);
      // Update State Usng Function
      settodoItems((oldData)=>oldData.filter((item)=>{
        return item.name !=name;
     }));

      } else {
        swal("Your file is safe!");
      }
    });
  
      
  }

  

 async function addToDo(item_name,date){
       if(!item_name || !date)
       {
        swal("Please Input data", "", "warning");
          return false;
       }
      const obj={
        name:item_name,
        date:date
      }
      const response=await checkKeyValueInArray(todoItems,'name',item_name);
      if(response)
      {
       // alert()
        swal(`${item_name} is aleady in the list`, "", "warning");
        return false;
      }
     // console.log(obj);
      //settodoItems([...todoItems,obj]);
      // Update State by passing Function
      settodoItems((currentValue)=>[...currentValue,obj]);
      return true;
  }

  return (
   <ItemContext.Provider value={{ 
    todoItems:todoItems,
    handleDelete:handleDelete,
    addToDo:addToDo
    }}>
    <>
     <center className="todo-container">
         <AppName />
         <div className="container">
         <WelcomeMessage  />
          <AddToDO  />
          <div className='show-list-container'>
           <TodoItems />
          </div>
          
         </div>
     </center>
    </>
    </ItemContext.Provider>
  )
}

export default App
