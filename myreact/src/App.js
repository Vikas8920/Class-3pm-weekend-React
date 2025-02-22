import React, { useState } from 'react'
import Form from './Component/Form'
import MultipleInput from './Component/MultipleInput'
import Select from './Component/Select'
import Radio from './Component/Radio'
import Checkbox from './Component/Checkbox'
import Form2 from './Component/Form2'
import Display from './Component/Display'

const App = () => {
  const [formData, setFormData] = useState(null)

 const handleFormSubmit = (data) => {
  setFormData(data)
 } 
  return (
    <>
      <Form/>
      <hr/>
      <MultipleInput/>
      <hr/>
      <Select/>
      <hr/>
      <Radio/>
      <hr/>
      <Checkbox/>

      <hr/>
      <Form2 onFormSubmit={handleFormSubmit}/>
      {formData && <Display data={formData}/>}
    </>
  )
}

export default App
