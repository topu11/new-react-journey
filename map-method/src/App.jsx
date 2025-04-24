import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import FoodItem from './FoodTtem'
import ErrorMessage from './ErrorMessage'

function App() {
  const bdFruits=['Banana','Jackfruit','Mango','Litchi','Papaya'];
  //const bdFruits=[];

  const showMyName = (name) => {
    alert(name);
  };
 
  return (
    <>
      <h1>Bangladeshi foods</h1>
      <ErrorMessage bdFruits={bdFruits}/>
      <ul className="list-group">
      {bdFruits.map((item, index) => (
          <FoodItem
            key={index}
            item={item}
            showMyName={showMyName}
          />
        ))}
        
      </ul>
    </>
  )
}

export default App
