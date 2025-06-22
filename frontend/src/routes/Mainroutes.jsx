import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "../pages/Home";
import Product from "../pages/Product";
import Login from "../pages/Login";
import Register from "../pages/Register";
import Createproduct from "../pages/products/Createproduct";
import Productdetails from "../pages/Productdetails";
import Profile from "../pages/profile";
import PageNotFound from "../pages/PageNotFound";
import AuthWrapper from "./AuthWrapper";
import AuthisAdmin from "./AuthisAdmin";

const Mainroutes = () => {
  	return (
    <Routes>
      	<Route path="/" element={<Home />} />
      	<Route path="/products" element={<Product />} />
      	<Route path="/login" element={<Login />} />
      	<Route path="/register" element={<Register />} />
      	<Route 
			path="/profile" 
			element={
			<AuthWrapper>
				<Profile />
			</AuthWrapper>	
		} />
      	<Route 
	  		path="/create-product" 
			element={
			<AuthisAdmin>
				<AuthisAdmin>
					<Createproduct />
				</AuthisAdmin>	
			</AuthisAdmin>
		} />
      	<Route path="/productdetails/:id" element={<Productdetails />} />
      	<Route path="*" element={<PageNotFound />} />
    </Routes>
  );
};

export default Mainroutes;
