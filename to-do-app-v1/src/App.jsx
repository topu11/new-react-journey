import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import AppName from './components/AppName'
import {AddToDO,ShowToDO} from './components/AddToDo'


function App() {
 

  return (
    <>
     <center className="todo-container">
         <AppName />
         <div className="container">
          <AddToDO />
          <ShowToDO name="drinking Tea" data="11/11/2024" />
          <ShowToDO  name="drinking Milk" data="12/11/2024" />
         </div>
     </center>
    </>
  )
}

export default App
