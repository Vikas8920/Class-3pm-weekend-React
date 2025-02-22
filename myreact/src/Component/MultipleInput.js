import React, { useState } from 'react'

const MultipleInput = () => {
    const [input, setInput] = useState({})
    const handleChange = (e) =>{
        const name = e.target.name
        const value = e.target.value
        setInput(values => ({...values, [name]:value}))
    }
    const handleSubmit = (e) =>{
        e.preventDefault()
        console.log(input)
    }
  return (
    <>
      <form onSubmit={handleSubmit}>
        <label htmlFor='name' >Enter your name:</label>
        <input type='text' id='name' name='username' value={input.username || ''} onChange={handleChange}/>
        <br/>
        <label htmlFor='email' >Enter your Email:</label>
        <input type='email' id='email' name='email' value={input.email || ''} onChange={handleChange}/>
        <br/>
        <label htmlFor='age' >Enter your age:</label>
        <input type='number' id='age' name='age' value={input.age || ''} onChange={handleChange}/>
        <br/>
        <button type='submit'>Submit</button>
        <br/>
      </form>
    </>
  )
}

export default MultipleInput
