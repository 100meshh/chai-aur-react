import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {

  // let counter = 5
  let [counter,setCounter]=useState(5)
  const addValue = ()=>{
    // counter+=1;
    setCounter((counter => (counter<20 ? counter+1 : 20)))
  }
  const removeValue = ()=>{
    // counter-=1;
    setCounter((counter => (counter > 0 ? counter - 1 : 0)));
  }

  return (
    <>
    <h1>chai aur react</h1>
    <h2>counter value: {counter}</h2>

    <button
    onClick={addValue}
    >Add value {counter}</button>
    <br/>
    <button
    onClick={removeValue}
    >Remove value {counter}</button>
    </>
  )
}

export default App
