import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import AppName from './components/AppName'
import {AddToDO,WelcomeMessage} from './components/AddToDo'
import TodoItems from './components/TodoItems'

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
       let newTodo=todoItems.filter((item)=>{
          return item.name !=name;
       })
       settodoItems(newTodo);
  }

  

 async function addToDo(item_name,date){
       if(!item_name || !date)
       {
          alert('Input Data');
          return;
       }
      let obj={
        name:item_name,
        date:date
      }
      let response=await checkKeyValueInArray(todoItems,'name',item_name);
      if(response)
      {
        alert(`${item_name} is aleady in the list`)
        return;
      }
      console.log(obj);
      settodoItems([...todoItems,obj]);
  }

  return (
    <>
     <center className="todo-container">
         <AppName />
         <div className="container">
          {todoItems.length === 0 && <WelcomeMessage />}
          <AddToDO  addToDo={addToDo}/>
          <div className='show-list-container'>
           <TodoItems items={todoItems} handleDelete={handleDelete}/>
          </div>
          
         </div>
     </center>
    </>
  )
}

export default App
