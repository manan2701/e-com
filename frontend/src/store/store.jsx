import { configureStore, createReducer } from '@reduxjs/toolkit'
import { loadUser } from './reducer/userSlice'
import productSlice, { loadproduct } from './reducer/productSlice'
import { loadcart } from './reducer/cartSlice'

export const store = configureStore({
  reducer: {
    userReducer: loadUser,
    productReducer: loadproduct,
    cartReducer: loadcart,
  },
})