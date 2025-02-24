import React from 'react'
import Login from './Login'
import Registration from './Registration'

const Form = ({form}) => {
    if(form===true){
        return (
            <>
              <Login/>
            </>
          )
    }else{
        return(
            <Registration/>
        )
    }
  
}

export default Form
