import React, { useState } from 'react'

const Form = () => {
    const [name, setName] = useState('')

    const handleSubmit = (e) =>{
        e.preventDefault()
        alert(`The name you entered is: ${name}`)
        setName(e.target.value = '')
    }

  return (
    <>
      <form action='' method='post' onSubmit={handleSubmit}>
        <label htmlFor='name'>Enter your name:</label>
        <input type='text' value={name} id='name' onChange={(e)=>setName(e.target.value)}/>
        <button type='submit'>Submit</button>
      </form>
    </>
  )
}

export default Form
