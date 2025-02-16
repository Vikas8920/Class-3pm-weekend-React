import React from 'react'
import Button from './Component/Button'
import Garage from './Component/Garage'
import Football from './Component/Football'
import Keypress from './Component/Keypress'
import Garrage2 from './Component/Garrage2'

const App = () => {
  return (
    <>
      <Button text={'Submit'}/>
      <br/>
      <Button text={'Click'}/>
      <br/>
      <Button text={'Subscribe'}/>
      <br/>
      <Garage/>
      <br/>
      <Football/>
      <br/>
      <Keypress/>
      <br/>
      <Garrage2/>
    </>
  )
}

export default App


