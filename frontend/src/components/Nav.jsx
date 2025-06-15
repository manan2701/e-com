import React from 'react'
import { NavLink } from 'react-router-dom'
import '../styles/nav.css'

const Nav = () => {
  return (
    <div className="nav-container">
      <nav className="navbar">
        <NavLink to="/" end className="nav-link">Home</NavLink>
        <NavLink to="/products" className="nav-link">Product</NavLink>
        <NavLink to="/login" className="nav-link">Log in</NavLink>
      </nav>
    </div>
  )
}

export default Nav
