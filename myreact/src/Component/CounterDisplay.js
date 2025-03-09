import React, { useContext } from 'react'
import { CounterContext } from '../Context/CounterContext'

const CounterDisplay = () => {
    const {count, increment, decrement, reset} =  useContext(CounterContext)
  return (
    <>
      <div style={{textAlign:'center'}}>
        <h2>Counter: {count}</h2>
        <button onClick={increment}>Increment</button>
        <button onClick={decrement}>Decrement</button>
        <button onClick={reset}>Reset</button>
      </div>
    </>
  )
}

export default CounterDisplay
