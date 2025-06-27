import React, { lazy } from "react";
import { Route, Routes } from "react-router-dom";
const Home = lazy(() => import("../pages/Home"));
const Product = lazy(() => import("../pages/Product"));
const Login = lazy(() => import("../pages/Login"));
const Register = lazy(() => import("../pages/Register"));
const Createproduct = lazy(() => import("../pages/products/Createproduct"));
const Productdetails = lazy(() => import("../pages/Productdetails"));
const Profile = lazy(() => import("../pages/profile"));
const PageNotFound = lazy(() => import("../pages/PageNotFound"));
const AuthWrapper = lazy(() => import("./AuthWrapper"));
const UnauthWrapper = lazy(() => import("./UnauthWrapper"));
const AuthisAdmin = lazy(() => import("./AuthisAdmin"));
const Cart = lazy(() => import("../pages/Cart"));

const Mainroutes = () => {
  	return (
    <Routes>
      	<Route path="/" element={<Home />} />
      	<Route path="/products" element={<Product />} />
      	<Route path="/login" element={<UnauthWrapper><Login /></UnauthWrapper>} />
      	<Route path="/register" element={<UnauthWrapper><Register /></UnauthWrapper>} />
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
		  <Route 
			path="/cart" 
			element={
			<AuthWrapper>
				<Cart />
			</AuthWrapper>	
		} />
    </Routes>
  );
};

export default Mainroutes;
