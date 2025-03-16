import React from 'react'
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom'
import { CartProvider } from './Context/CartContext'
import Navbar from './Component/Navbar'
import ProductList from './Component/ProductList'
import Cart from './Component/Cart'
import { useDispatch, useSelector } from 'react-redux'
import { decrement, increment, login, logout, toggleTheme } from './Component/actions'

const App = () => {
  const dispatch = useDispatch()
  const count = useSelector((state)=>state.counter.count)
  const {isAuthenticated, user} = useSelector((state)=>state.auth)
  const theme = useSelector((state)=>state.theme.theme)

  const handleToggleTheme = () =>{
    dispatch(toggleTheme())
  }

  const handleLogin = () =>{
    const userData = {name:'John Doe', email:'john@gmail.com'}
    dispatch(login(userData))
  }

  const handleLogout = () =>{
    dispatch(logout())
  }

  const appStyle = {
    backgroundColor: theme === 'light'?'#ffffff':'#333333',
    color:theme === 'light'? '#000000': '#ffffff',
    height: '100vh',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection:'column'
  }
  return (
   <Router>
    <CartProvider>
      <Navbar/>
      <Routes>
        <Route path='/' element={<ProductList/>}/>
        <Route path='/cart' element={<Cart/>}/>
      </Routes>
    </CartProvider>
    <hr/>

    <div>
      <h1>React Redux Authentication</h1>
      {isAuthenticated?(
        <div>
          <h2>Welcome, {user.name}</h2>
          <button onClick={handleLogout}>Logout</button>
        </div>
      ):(
        <div>
          <h2>Please Log In</h2>
          <button onClick={handleLogin}>Log In</button>
        </div>
      )}
    </div>

    <hr/>
    <div style={appStyle}>
      <h1>{theme.charAt(0).toUpperCase() + theme.slice(1)}Theme</h1>
      <button onClick={handleToggleTheme}>Switch to {theme==='light'?'Dark':'Light'} Theme</button>
    </div>

    <hr/>
    <div style={{textAlign:'center', marginTop: '50px'}}>
      <h1>Counter: {count}</h1>
      <button onClick={()=> dispatch(increment())}>Increment</button>
      <button onClick={()=> dispatch(decrement())}>Decrement</button>
    </div>
   </Router>
  )
}

export default App
