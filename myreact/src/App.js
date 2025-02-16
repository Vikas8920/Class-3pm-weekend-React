import React from 'react'
import './App.css'

// Today's Topic: React JSX, Fragment tag, conditional statements, Rules related to react

const App = () => {
  const x = 5
  // let text = 'Good bye'
  // if(x<10){
  //   text= 'Hello React'
  // }
  return (
    <>
      <h1>React is {5*5} times better with JSX</h1>
      <h1>React is {5*5} times better with JSX</h1>
      <h1>React is {5*5} times better with JSX</h1>
      <h1>React is {5*5} times better with JSX</h1>
      <input className='input' type='text'/>
      <br/>
      <hr/>
      <h1>{(x)<10?'Hello React': 'Good bye'}</h1>
    </>
  )
}

export default App

