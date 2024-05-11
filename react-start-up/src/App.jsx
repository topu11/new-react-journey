import { useState } from 'react'
import './App.css'
import ClickPractice from './components/ClickPractice'
import { Firstbutton } from './components/multipleFunction'
import { Secondbutton } from './components/multipleFunction'
import { Thirdbutton } from './components/multipleFunction'
import Hello from './components/Hello'

function App() {
  
  return (
    <>
      <ClickPractice/>
      <br />
      <Firstbutton />
      <Secondbutton />
      <Thirdbutton />
      <Hello firstname="Touhidul" lastname="Islam" />
    </>
  )
}

export default App
