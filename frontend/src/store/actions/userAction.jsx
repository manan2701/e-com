import axios from '../../api/axiosconfig'

export const asyncsetUser = (user) => async (dispatch,getState) => {
    try {
        const res = axios.post("/users", user)

    } catch (error) {
        console.log(error);
    }
}