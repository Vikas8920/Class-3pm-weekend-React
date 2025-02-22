import React, { useState } from 'react'

const Select = () => {
    const [myCar, setMyCar] = useState('')

    const handleChange = (e) =>{
        setMyCar(e.target.value)
    }
    
  return (
    <>
      <select value={myCar} onChange={handleChange}>
        <option>Select</option>
        <option value='Ford'>Ford</option>
        <option value='Volvo'>Volvo</option>
        <option value='BMW'>BMW</option>
      </select>
    </>
  )
}

export default Select
