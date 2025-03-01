import React from 'react'
import FavouriteColor from './Component/FavouriteColor'
import Car from './Component/Car'
import Timer from './Component/Timer'
import Counter from './Component/Counter'
import DisplayData from './Component/DisplayData'
import { BrowserRouter, Link, Route, Routes } from 'react-router-dom'
import UserDetail from './Component/UserDetail'

const App = () => {
  return (
    <>
      <FavouriteColor/>
      <hr/>
      <Car/>
      <hr/>
      <Timer/>
      <hr/>
      <Counter/>
      <hr/>
      <DisplayData/>

      <hr/>

      <BrowserRouter>
      <h1>Welcome to the user Information App</h1>
      <ul>
        <li><Link to='/user/1'>User 1</Link></li>
        <li><Link to='/user/2'>User 2</Link></li>
        <li><Link to='/user/3'>User 3</Link></li>
      </ul>
      <Routes>
        <Route path='/user/:userId' element={<UserDetail/>}/>
      </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
