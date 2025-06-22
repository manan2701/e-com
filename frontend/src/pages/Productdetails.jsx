import React from "react";
import { useDispatch, useSelector } from "react-redux";
import "../styles/productdetails.css";
import { useNavigate, useParams } from "react-router-dom";
import { useForm } from "react-hook-form";
import { asyncdeleteproduct, asyncupdateproduct } from "../store/actions/productAction";

const Productdetails = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const products = useSelector((state) => state.productReducer.products);
  const user = useSelector((state) => state.userReducer.users);
  const product = products.find((product) => product.id == id);
  const { register, reset, handleSubmit } = useForm({
    defaultValues: {
      title: product?.title,
      price: product?.price,
      description: product?.description,
      category: product?.category,
      image: product?.image,
    },
  });
  if (!product) return <p>Loading...</p>;

  const updateHandler = (product) => {
    dispatch(asyncupdateproduct(id, product));
  };

  const deleteHandler= () => {
    dispatch(asyncdeleteproduct(id))
    navigate("/products")
  }

  return (
    <div>
      <div className="productdetails-detail-container">
        <div className="productdetails-image-section">
          <img src={product.image} alt={product.title} />
        </div>
        <div className="productdetails-info-section">
          <h1 className="productdetails-title">{product.title}</h1>
          <p className="productdetails-category">{product.category}</p>
          <h2 className="productdetails-price">${product.price}</h2>
          <p className="productdetails-description">{product.description}</p>

          <div className="productdetails-buttons">
            <button className="buy-btn">Buy Now</button>
            <button className="cart-btn">Add to Cart</button>
          </div>
        </div>
      </div>
      {user.isAdmin && (
        <div className="product-form-container">
        <form className="product-form" onSubmit={handleSubmit(updateHandler)}>
          <h2 className="form-title">Update Product</h2>
  
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
          <div className="productdetails-btns">
          <button className="submit-btn">Update Product</button>
          <button type="submit" onClick={deleteHandler} className="productdetails-delete-btn">Delete</button>
          </div>
        </form>
      </div>
      )}
    </div>
  );
};

export default Productdetails;
