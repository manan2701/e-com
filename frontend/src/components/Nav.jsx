import React from 'react'
import { NavLink, useNavigate } from 'react-router-dom'
import '../styles/nav.css'
import { useDispatch, useSelector } from 'react-redux'
import { asynclogoutuser } from '../store/actions/userAction'

const Nav = () => {
  const dispatch = useDispatch()
  const navigate = useNavigate()

  const user = useSelector((state) => state.userReducer.users)

  const logoutHandler = () => {
    dispatch(asynclogoutuser())
    navigate("/")
  }

  return (
    <header className="nav-container">
      <nav className="navbar">
        <div className="nav-left">
          <NavLink to="/" end className="nav-link">Home</NavLink>
          <NavLink to="/products" className="nav-link">Products</NavLink>
          {user && <NavLink to="/admin/create-product" className="nav-link">Create</NavLink>}
        </div>

        <div className="nav-right">
          {user ? (
            <button className="logout-btn" onClick={logoutHandler}>Log Out</button>
          ) : (
            <NavLink to="/login" className="login-btn">Log In</NavLink>
          )}
        </div>
      </nav>
    </header>
  )
}

export default Nav
