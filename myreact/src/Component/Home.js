import React from 'react'
import './Home.css'

const Home = () => {
    const myStyle = {
        color: 'white',
        backgroundColor: 'blue',
        padding:'20px'
    }
  return (
    <>
      <h1 style={{backgroundColor:'red', color:'white'}}>Home</h1>
      <h1 style={myStyle}>Welcome</h1>
      <h1 className='react'>Hello React</h1>
    </>
  )
}

export default Home
