import axios from '../../api/axiosconfig'
import { loadproduct } from '../reducer/productSlice';


export const asynccreateproduct = (product) => async (dispatch,getState) => {
    try {
        await axios.post("/products", product)
        dispatch(asyncgetproduct())
    } catch (error) {
        console.log(error);
    }
}

export const asyncgetproduct = () => async (dispatch,getstate) => {
    try {
        const {data} = await axios.get("/products")
        dispatch(loadproduct(data))
    } catch (error) {
        console.log(error);
    }
}