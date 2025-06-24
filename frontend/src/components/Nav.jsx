import React, { useState } from 'react'
import { NavLink, useNavigate } from 'react-router-dom'
import '../styles/nav.css'
import { useDispatch, useSelector } from 'react-redux'
import { asynclogoutuser } from '../store/actions/userAction'

const Nav = () => {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const [menuOpen, setMenuOpen] = useState(false)

  const user = useSelector((state) => state.userReducer.users)

  const logoutHandler = () => {
    dispatch(asynclogoutuser())
    navigate("/")
  }

  const toggleMenu = () => {
    setMenuOpen(!menuOpen)
  }

  const closeMenu = () => {
    setMenuOpen(false)
  }

  return (
    <header className="nav-container">
      <nav className="navbar">
        <div className="nav-brand">MyStore</div>

        <div className={`nav-links ${menuOpen ? 'active' : ''}`}>
          <NavLink to="/" end className="nav-link" onClick={closeMenu}>Home</NavLink>
          <NavLink to="/products" className="nav-link" onClick={closeMenu}>Products</NavLink>
          {user && (
              <NavLink to="/cart" className="nav-link" onClick={closeMenu}>Cart</NavLink>
            )}
          {user && user.isAdmin && (
            <NavLink to="/create-product" className="nav-link" onClick={closeMenu}>Create</NavLink>
          )}
        </div>

        <div className="nav-main-right">
          <div className="hamburger" onClick={toggleMenu}>
            <span className="bar"></span>
            <span className="bar"></span>
            <span className="bar"></span>
          </div>
          <div className="profile-login">
            {user ? (
              <NavLink to="/profile" className="profile-icon">
                <i className="fa-solid fa-user"></i>
              </NavLink>
            ) : (
              <NavLink to="/login" className="login-btn">Log In</NavLink>
            )}
          </div>
        </div>
      </nav>
    </header>
  )
}

export default Nav
