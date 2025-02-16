import React from 'react'

const Car = ({brand}) => {
  return (
    <>
      <h2>I am a {brand.name} of the model {brand.model}</h2>
    </>
  )
}

export default Car
