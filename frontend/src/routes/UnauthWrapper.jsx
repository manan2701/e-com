import { Navigate } from 'react-router-dom'

const UnauthWrapper = (props) => {
    const user = JSON.parse(localStorage.getItem("user"))
    return (
        <div>{user ? <Navigate to="/"></Navigate> : props.children}</div>
    )
}

export default UnauthWrapper