import React, { useState } from 'react'

const FavouriteColor = () => {
    const [color, setColor] = useState('red')
  return (
    <>
      <h1>My Favourite Color is {color}!</h1>
      <button type='button' onClick={()=>setColor('blue')}>Blue</button>
    </>
  )
}

export default FavouriteColor
