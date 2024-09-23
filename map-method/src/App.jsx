import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import FoodItem from './FoodTtem'
import ErrorMessage from './ErrorMessage'

function App() {
 // const bdFruits=['Banana','Jackfruit','Mango','Litchi','Papaya'];
  const bdFruits=[];
 
  return (
    <>
      <h1>Bangladeshi foods</h1>
      <ErrorMessage bdFruits={bdFruits}/>
      <ul className="list-group">
        {bdFruits.map((item)=><FoodItem item={item}/>)}
        
      </ul>
    </>
  )
}

export default App
