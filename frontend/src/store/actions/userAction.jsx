
import { toast } from 'react-toastify';
import axios from '../../api/axiosconfig'
import { loadUser, removeUser } from '../reducer/userSlice';

export const asynccurrentuser = () => async (dispatch, getState) =>{
    try {
        const user = JSON.parse(localStorage.getItem("user"))
        if(user) dispatch(loadUser(user))
        else console.log("need log in");
    } catch (error) {
        console.log(error);
    }
}

export const asyncloginuser = (user) => async (dispatch, getState) => {
    try {
        const {data} = await axios.get(`/users?username=${user.username}&password=${user.password}`)
        if(data.length==1) {
            localStorage.setItem("user", JSON.stringify(data[0]))
            dispatch(loadUser(data[0]))
            toast.success("Logged in")
        } else {
            toast.error("No User Found")
        }
    } catch (error) {
        console.log(error);
    }
}

export const asyncsetUser = (user) => async (dispatch,getState) => {
    try {
        await axios.post("/users", user)
    } catch (error) {
        console.log(error);
    }
}

export const asynclogoutuser = () => async (dispatch, getState) => {
    try{
        localStorage.removeItem("user")
        dispatch(removeUser())
        toast.success("Logged out")
    } catch (error) {
        console.log(error);
    }
}