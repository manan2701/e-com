import { nanoid } from "@reduxjs/toolkit";
import React from "react";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { asyncsetUser } from "../store/actions/userAction";
import "../styles/register.css";

const Register = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();
  const dispatch = useDispatch();

  const submitHandler = (user) => {
    user.id = nanoid();
    user.isAdmin = false;
    user.cart = [];
    dispatch(asyncsetUser(user));
    reset();
  };

  return (
    <div className="register-container">
      <form className="register-form" onSubmit={handleSubmit(submitHandler)}>
        <h2 className="register-title">Register</h2>

        <div className="register-outer">
          <input
            {...register("username", {required : true})}
            type="text"
            placeholder="Username"
            className="register-input"
          />
          {errors.username && (
            <small className="input-error">
              Username Required!
            </small>
          )}
        </div>

        <div  className="register-outer">
          <input
            {...register("email", {required : true})}
            type="email"
            placeholder="Email"
            className="register-input"
          />
          {errors.email && (
            <small className="input-error">
              Email Required!
            </small>
          )}
        </div>

        <div  className="register-outer">
          <input
            type="password"
            placeholder="Password"
            className="register-input"
            {...register("password", {
              required: "Password is required",
              pattern: {
                value: /^(?=.*[A-Z])(?=.*[!@#$%^&*()_\-+=\[\]{};':"\\|,.<>/?]).{8,}$/,
                message: "Password must be at least 8 characters, include a  capital letter and a special character",
              },
            })}
          />
          {errors.password && (
            <small className="input-error">
              {errors.password.message}
            </small>
          )}
        </div>

        <button type="submit" className="register-button">
          Register
        </button>

        <p className="register-login-link">
          Already have an account? <Link to="/login">Log in</Link>
        </p>
      </form>
    </div>
  );
};

export default Register;
