import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import {
  asyncdeleteuser,
  asynclogoutuser,
  asyncupdateuser,
} from "../store/actions/userAction";
import { useForm } from "react-hook-form";
import "../styles/profile.css"; // ⬅️ Add this line

const Profile = () => {
  const { users } = useSelector((state) => state.userReducer);
  const { register, reset, handleSubmit } = useForm({
    defaultValues: {
      username: users?.username,
      email: users?.email,
      password: users?.password,
    },
  });
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const logoutHandler = () => {
    dispatch(asynclogoutuser());
    navigate("/");
  };

  const updateUser = (user) => {
    dispatch(asyncupdateuser(users.id, user));
  };

  const deleteUser = () => {
    dispatch(asyncdeleteuser(users.id));
    navigate("/");
  };

  return (
    <div className="profile-container">
      <div className="profile-header">
        <div className="profile-avatar">
          <i className="fa-solid fa-user"></i>
        </div>
        <div className="profile-name">{users?.username}</div>
        <div className="profile-email">{users?.email}</div>
      </div>

      <form onSubmit={handleSubmit(updateUser)} className="profile-form">
        <h2>Update Profile</h2>
        <input type="text" {...register("username")} placeholder="Username" />
        <input type="email" {...register("email")} placeholder="Email" />
        <input
          type="password"
          {...register("password")}
          placeholder="Password"
        />
        <button type="submit" className="update-btn">
          Update
        </button>
      </form>
      <div className="profile-actions">
        <button onClick={deleteUser} className="delete-btn">
          Delete Account
        </button>
        <button onClick={logoutHandler} className="logout-btn">
          Log Out
        </button>
      </div>
    </div>
  );
};

export default Profile;
