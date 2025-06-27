import React, { useEffect } from "react";
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import "../styles/login.css";
import { asyncloginuser } from "../store/actions/userAction";

const Login = () => {
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const dispatch = useDispatch();

  const submitHandler = (user) => {
    dispatch(asyncloginuser(user,navigate));
  };


  return (
    <div className="login-container">
      <form className="login-form" onSubmit={handleSubmit(submitHandler)}>
        <h2 className="login-title">Login</h2>

        <div className="login-outer">
          <input
            {...register("username", { required: true })}
            type="text"
            placeholder="Username"
            className="login-input"
          />
          {errors?.username && <small className="input-error">Username required.</small>}
        </div>

        <div className="login-outer">
          <input
            {...register("password", { required: true })}
            type="password"
            placeholder="**********"
            className="login-input"
          />
          {errors?.password && <small className="input-error">Password required.</small>}
        </div>

        <button type="submit" className="login-button">
          Log In
        </button>

        <p className="login-register-link">
          Don’t have an account? <Link to="/register">Register</Link>
        </p>
      </form>
    </div>
  );
};

export default Login;
