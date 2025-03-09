import React, { useState } from 'react'
import { CounterContext } from '../Context/CounterContext'

const CounterProvider = ({children}) => {
    const [count, setCount] = useState(0)

    const increment = () =>{
        setCount((prevCount)=>prevCount+1)
    }
    const decrement = () =>{
        setCount((prevCount)=>prevCount-1)
    }
    const reset = () =>{
        setCount(0)
    }
  return (
    <>
      <CounterContext.Provider value={{count, increment, decrement, reset}}>
        {children}
      </CounterContext.Provider>
    </>
  )
}

export default CounterProvider
