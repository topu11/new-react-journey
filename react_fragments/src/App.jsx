// import Welcome from './components/welcome'
// import Error from   './components/error'
// import Listwrapper from './components/listwrapper' 
import Container  from './components/Container'
import FoodApplication  from './components/FoodApplicationParent'
import './App.css'

function App() {
 
 

  return (
    <>
     
     <Container>
      <FoodApplication/>
     </Container>
     <Container test="test">
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique, iusto?
      </p>
     </Container>
    </>
  )
}

export default App
