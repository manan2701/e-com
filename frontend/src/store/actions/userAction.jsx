
import { toast } from 'react-toastify';
import axios from '../../api/axiosconfig'
import { loadUser } from '../reducer/userSlice';

export const asynccurrentuser = () => async (dispatch, getState) =>{
    try {
        const user = JSON.parse(localStorage.getItem("user"))
        if(user) dispatch(loadUser(user))
        else console.log("need log in");
    } catch (error) {
        console.log(error);
    }
}

export const asyncloginuser = (user, navigate) => async (dispatch, getState) => {
    try {

        const {data} = await axios.get(`/users?username=${user.username}&password=${user.password}`)
        if(data.length===1) {
            localStorage.setItem("user", JSON.stringify(data[0]))
            toast.success("Logged in")
            navigate("/");
        } else {
            toast.error("No User Found")
        }
    } catch (error) {
        console.log(error);
    }
}

export const asyncsetUser = (user) => async (dispatch,getState) => {
    try {
        const res = await axios.post("/users", user)
    } catch (error) {
        console.log(error);
    }
}