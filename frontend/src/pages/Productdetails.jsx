import React from 'react'
import { useSelector } from 'react-redux'
import '../styles/productdetails.css'
import { useParams } from 'react-router-dom'

const Productdetails = () => {
  const { id } = useParams()
  const products = useSelector((state) => state.productReducer.products)
  const product = products.find((product) => product.id == id)

  if (!product) return <p>Loading...</p>

  return (
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
  )
}

export default Productdetails
