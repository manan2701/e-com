import { nanoid } from '@reduxjs/toolkit'
import React from 'react'
import { useForm } from 'react-hook-form'
import { useDispatch } from 'react-redux'
import { Link } from 'react-router-dom'
import { asyncsetUser } from '../store/actions/userAction'
import '../styles/register.css'

const Register = () => {
  const { register, reset, handleSubmit } = useForm()
  const dispatch = useDispatch()

  const submitHandler = (user) => {
    user.id = nanoid()
    user.isAdmin = false
    dispatch(asyncsetUser(user))
    reset()
  }

  return (
    <div className="register-container">
      <form className="register-form" onSubmit={handleSubmit(submitHandler)}>
        <h2 className="register-title">Register</h2>

        <input
          {...register('username')}
          type="text"
          placeholder="Username"
          className="register-input"
        />

        <input
          {...register('email')}
          type="email"
          placeholder="Email"
          className="register-input"
        />

        <input
          {...register('password')}
          type="password"
          placeholder="**********"
          className="register-input"
        />

        <button type="submit" className="register-button">Register</button>

        <p className="register-login-link">
          Already have an account? <Link to="/login">Log in</Link>
        </p>
      </form>
    </div>
  )
}

export default Register
