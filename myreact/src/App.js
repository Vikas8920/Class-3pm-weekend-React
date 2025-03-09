import React, { useEffect, useRef, useState } from 'react'
import Counter from './Component/Counter'
import AuthProvider from './Component/AuthProvider'
import Login from './Component/Login'
import UserProfile from './Component/UserProfile'
import ThemeProvider from './Component/ThemeProvider'
import ThemeToggle from './Component/ThemeToggle'
import CounterProvider from './Component/CounterProvider'
import CounterDisplay from './Component/CounterDisplay'

const App = () => {
  const [inputValue, setInputValue] = useState('')
  // const count = useRef(0)
  const previousInputValue = useRef('')

  useEffect(()=>{
    // count.current = count.current + 1
    previousInputValue.current = inputValue
  }, [inputValue])
  return (
    <>
      <input type='text' value={inputValue} onChange={(e)=>setInputValue(e.target.value)}/>
      <h1>Current Value: {inputValue}</h1>
      <h2>Previous Value: {previousInputValue.current}</h2>

      <hr/>

      <Counter/>
      <hr/>

      <AuthProvider>
        <h1>Simple Authentication System</h1>
        <Login/>
        <UserProfile/>
      </AuthProvider>

      <hr/>

      <ThemeProvider>
        <h1>Theme Toggle</h1>
        <ThemeToggle/>
      </ThemeProvider>

      
      <hr/>

      <CounterProvider>
        <h1>Counter with Context</h1>
        <CounterDisplay/>
      </CounterProvider>
    </>
  )
}

export default App
