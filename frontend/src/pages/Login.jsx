import React from 'react'
import { useForm } from 'react-hook-form'
import { Link } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import '../styles/login.css'
import { asyncloginuser } from '../store/actions/userAction'

const Login = () => {
  const { register, reset, handleSubmit } = useForm()
  const dispatch = useDispatch();

  const submitHandler = (user) => { 
    dispatch(asyncloginuser(user))
  }

  return (
    <div className="login-container">
      <form className="login-form" onSubmit={handleSubmit(submitHandler)}>
        <h2 className="login-title">Login</h2>

        <input
          {...register('username')}
          type="text"
          placeholder="Username"
          className="login-input"
        />

        <input
          {...register('password')}
          type="password"
          placeholder="**********"
          className="login-input"
        />

        <button type="submit" className="login-button">Log In</button>

        <p className="login-register-link">
          Don’t have an account? <Link to="/register">Register</Link>
        </p>
      </form>
    </div>
  )
}

export default Login
