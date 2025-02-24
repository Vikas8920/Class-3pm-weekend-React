import React, { useState } from 'react'
import Form from './Component/Form'

const App = () => {
  const [form, setForm] = useState(true)
  const [msg, setMsg] = useState('')

  // login form
  const handleform = () =>{
    if(form===false){
      setForm(true)
      setMsg('Login Form shows successfully')
    }
  }

  // Registration form
  const handleform1 = () =>{
    if(form===true){
      setForm(false)
      setMsg('Registration Form shows successfully')
    }
  }
  return (
    <>
      <div className='container d-flex justify-content-evenly'>
        <div className='mt-5'>
          <button onClick={handleform} className='btn btn-success mx-4 px-4'>Click for Login Form</button>
          <button onClick={handleform1} className='btn btn-primary'>Click for Registration Form</button>
          <h4 className='mt-5 ms-4 text-primary'>{msg}</h4>
        </div>
        <div>
          <Form form={form}/>
        </div>
      </div>
    </>
  )
}

export default App
