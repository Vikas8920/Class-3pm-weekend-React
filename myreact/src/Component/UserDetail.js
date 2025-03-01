import React from 'react'
import { useParams } from 'react-router-dom'

const UserDetail = () => {
    const {userId} = useParams()

    const userData = {
        1:{name:'Vikas', age:25},
        2: {name:'Sameer', age:20},
        3: {name: 'Ravi', age:22}
    }

    const user = userData[userId]

    if(!user){
        return(
            <p>User not found</p>
        )
    }
  return (
    <>
      <h2>User Details</h2>
      <p>Name: {user.name}</p>
      <p>Age: {user.age}</p>
    </>
  )
}

export default UserDetail
