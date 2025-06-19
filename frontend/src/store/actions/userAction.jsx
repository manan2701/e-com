
import { toast } from 'react-toastify';
import axios from '../../api/axiosconfig'
import { loadUser, removeUser } from '../reducer/userSlice';

export const asynccurrentuser = () => async (dispatch, getState) =>{
    try {
        const user = JSON.parse(localStorage.getItem("user"))
        if(user) dispatch(loadUser(user))
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

export const asyncupdateuser = (id, user) => async (dispatch, getState) => {
    try{
        const {data} = await axios.patch(`/users/${id}`,user)
        dispatch(loadUser(data))
    } catch (error) {
        console.log(error);
    }
}

export const asyncdeleteuser = (id) => async (dispatch, getState) => {
    try{
        await axios.delete(`/users/${id}`)
        dispatch(asynclogoutuser())
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

