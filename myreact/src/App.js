import React from 'react'
import Navbar from './Component/Navbar'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './Component/Home'
import Blogs from './Component/Blogs'
import Contact from './Component/Contact'

import './App.css'
import NoPage from './Component/NoPage'
import ParentComponent from './Component/ParentComponent'

const App = () => {
  return (
    <>
     <BrowserRouter>
     <ParentComponent/>
       <Navbar/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/blogs' element={<Blogs/>}/>
        <Route path='/contact' element={<Contact/>}/>
        <Route path='*' element={<NoPage/>}/>
      </Routes>
     </BrowserRouter>
    </>
  )
}

export default App
