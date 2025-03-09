import React, { useContext, useState } from 'react'
import { AuthContext } from '../Context/AuthContext'

const Login = () => {
    const [username, setUsername] = useState('')
    const {login} = useContext(AuthContext)

    const handleLogin = () =>{
        login(username)
    }
  return (
    <>
      <input type='text' placeholder='Enter your name' value={username} onChange={(e)=>setUsername(e.target.value)}/>
      <button onClick={handleLogin}>Login</button>
    </>
  )
}

export default Login
