import { Navigate } from 'react-router-dom';

const AuthWrapper = (props) => {
    const user = JSON.parse(localStorage.getItem("user"))
    return (
        <div>{user ? props.children: <Navigate to="/login"></Navigate>}</div>
    )
}

export default AuthWrapper