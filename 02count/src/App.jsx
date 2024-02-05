import { useState } from 'react'
import './App.css'

function App() {

  const [counter, setCounter] = useState(15);
  
  // let counter = 15;

  const increment = () =>{
    setCounter(counter + 1)
  }

  const decrement = () => {
    setCounter(counter - 1)
  }

  return (
    <>
    <h1>React Counter {counter}</h1>
    <h2>Counter Value: {counter}</h2> 
    <button
    onClick={increment}>Add Value</button>{" "}
    <button
    onClick={decrement}>Remove Value</button>
    <footer>Footer: {counter}</footer>       
    </>
  )
}

export default App
