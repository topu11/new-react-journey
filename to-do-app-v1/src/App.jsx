import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import AppName from './components/AppName'
import {AddToDO,ShowToDO} from './components/AddToDo'
import TodoItems from './components/TodoItems'

function App() {
 
  const items=[
    {
      name:"drinking Tea",
      date:"11/11/2024"
    },
    {
       name:"drinking Milk",
       date:"12/11/2024"
    }
  ]

  return (
    <>
     <center className="todo-container">
         <AppName />
         <div className="container">
          <AddToDO />
          <div className='show-list-container'>
           <TodoItems items={items}/>
          </div>
          
         </div>
     </center>
    </>
  )
}

export default App
