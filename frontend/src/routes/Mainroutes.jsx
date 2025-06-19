import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from '../pages/Home'
import Product from '../pages/Product'
import Login from '../pages/Login'
import Register from '../pages/Register'
import Createproduct from '../pages/products/Createproduct'
import Productdetails from '../pages/Productdetails'
import Profile from '../pages/profile'

const Mainroutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/products" element={<Product />} />
      <Route path="/login" element={<Login />} />
      <Route path="/profile" element={<Profile />} />
      <Route path="/register" element={<Register />} />
      <Route path="/admin/create-product" element={<Createproduct/>} />
      <Route path="/productdetails/:id" element={<Productdetails/>} />
    </Routes>
  )
}

export default Mainroutes