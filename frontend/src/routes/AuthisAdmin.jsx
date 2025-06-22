import React from 'react'
import { Navigate } from 'react-router-dom'

const AuthisAdmin = (props) => {
    const user = JSON.parse(localStorage.getItem("user"))
    return (
        <div>{user.isAdmin ? props.children: <Navigate to="/products"></Navigate>}</div>
    )
}

export default AuthisAdmin;