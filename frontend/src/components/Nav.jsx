import React from 'react'
import { NavLink } from 'react-router-dom'
import '../styles/nav.css'
import { useSelector } from 'react-redux'

const Nav = () => {

  const user = useSelector((state) => state.userReducer.users)
  console.log(user);
  return (
    <div className="nav-container">
      <nav className="navbar">
        <NavLink to="/" end className="nav-link">Home</NavLink>
        <NavLink to="/products" className="nav-link">Product</NavLink>
        {user ? 
        <>
          <NavLink to="/admin/create-product" className="nav-link">Create Product</NavLink>
        </> : <>
          <NavLink to="/login" className="nav-link">Log in</NavLink>
        </>}
        
        
      </nav>
    </div>
  )
}

export default Nav
