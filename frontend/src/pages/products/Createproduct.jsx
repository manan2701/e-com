import React from "react";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { nanoid } from "@reduxjs/toolkit";
import { asynccreateproduct } from "../../store/actions/productAction";
import "../../styles/createproduct.css"; 

const CreateProduct = () => {
  const { register, reset, handleSubmit } = useForm();
  const dispatch = useDispatch();

  const createHandler = (product) => {
    product.id = nanoid();
    dispatch(asynccreateproduct(product));
    reset();
  };

  return (
    <div className="product-form-container">
      <form className="product-form" onSubmit={handleSubmit(createHandler)}>
        <h2 className="form-title">Add New Product</h2>

        <div className="form-grid">
          <div className="form-group">
            <label>Title</label>
            <input {...register("title")} type="text" placeholder="Product title" />
          </div>

          <div className="form-group">
            <label>Price</label>
            <input {...register("price")} type="number" step="0.01" placeholder="Price in $" />
          </div>

          <div className="form-group">
            <label>Category</label>
            <input {...register("category")} type="text" placeholder="e.g. men's clothing" />
          </div>

          <div className="form-group">
            <label>Image URL</label>
            <input {...register("image")} type="url" placeholder="https://example.com/image.jpg" />
          </div>

          <div className="form-group description-group">
            <label>Description</label>
            <textarea {...register("description")} placeholder="Product description..." rows="4" />
          </div>
        </div>

        <button type="submit" className="submit-btn">Create Product</button>
      </form>
    </div>
  );
};

export default CreateProduct;
