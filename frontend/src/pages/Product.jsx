import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import '../styles/product.css'
import { Link } from 'react-router-dom'
import { asyncupdateuser } from '../store/actions/userAction'
import { addToCart } from '../store/actions/cartAction'

const Product = () => {
  const dispatch = useDispatch()
  const users = useSelector((state) => state.userReducer.users)
  const products = useSelector((state) => state.productReducer.products)
  
  if (!products || products.length === 0) {
    return <p className="home-loading">Loading products...</p>;
  }

  const renderProducts = products.map((product) => {
    return (
        <div className="product-card" key={product.id}>
          <Link to={`/productdetails/${product.id}`} className='product-link'>
          <img src={product.image} alt={product.title} className="product-image" />
          <h4 className="product-title">{product.title}</h4>
          <p className="product-description">{product.description}</p>
          <p className="product-category">{product.category}</p>
          <p className="product-price">${product.price}</p>
          </Link>
        <button 
          className="buy-button"
          onClick={() => addToCart(users, product, dispatch, asyncupdateuser)}
          >Add<i className="fa-solid fa-cart-plus"></i>   
        </button>
      </div>
    )
  })

  return <div className="product-grid">{renderProducts}</div>
}

export default Product
