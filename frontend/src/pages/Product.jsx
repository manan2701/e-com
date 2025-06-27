import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import '../styles/product.css'
import { Link } from 'react-router-dom'
import { asyncupdateuser } from '../store/actions/userAction'
import { addToCart } from '../store/actions/cartAction'
import InfiniteScroll from 'react-infinite-scroll-component';
import axios from '../api/axiosconfig'



const Product = () => {
  const dispatch = useDispatch()
  const users = useSelector((state) => state.userReducer.users)
  const [products, setproducts] = useState([])
  const [hasMore, sethasMore] = useState(true)

  const fetchData = async () => {
    try {
      const {data} = await axios.get(`/products/?_start=${products.length}&_limit=8`)
      console.log(data.length);
      if(data.length === 0 ) {
        sethasMore(false)
      }else{
        setproducts([...products,...data]);
      }  
    } catch (error) {
      console.log(error);
    }
  } 

  useEffect(() => {
    fetchData();
  }, [])

  if (!products || products.length === 0) {
    return <p className="home-loading">Loading products...</p>;
  }

  const renderProducts = products.map((product) => {
    return (
        <div className="product-card" key={product.id}>
          <Link to={`/productdetails/${product.id}`} className='product-link'>
          <img src={product.image} alt={product.title} className="product-image" />
          <h4 className="product-title">{product.title.length > 95 ? `${product.title.slice(0,95)}...` : product.title }</h4>
          <p className="product-description">{product.description}</p>
          <p className="product-category">{product.category}</p>
          <p className="product-price">₹{product.price}</p>
          </Link>
        <button 
          className="buy-button"
          onClick={() => addToCart(users, product, dispatch, asyncupdateuser)}
          >Add<i className="fa-solid fa-cart-plus"></i>   
        </button>
      </div>
    )
  })

  return( 
    <InfiniteScroll
    dataLength={products.length} 
    next={fetchData}
    hasMore={hasMore}
    loader={<h4>Loading...</h4>}
    endMessage={
      <p style={{ textAlign: 'center' }}>
        <b>Yay! You have seen it all</b>
      </p>
    }
    >
    <div className="product-grid">
      {renderProducts}
    </div>
    </InfiniteScroll>
  )
}

export default Product
