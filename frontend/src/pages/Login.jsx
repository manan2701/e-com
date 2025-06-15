import React from 'react'
import { useForm } from 'react-hook-form'
import { Link } from 'react-router-dom'
import '../styles/login.css'

const Login = () => {
  const { register, reset, handleSubmit } = useForm()

  const submitHandler = (user) => {
    console.log('Login Data:', user)
    reset()
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
