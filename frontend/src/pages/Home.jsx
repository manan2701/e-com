import React from 'react';
import '../styles/home.css';
import { useSelector } from 'react-redux';

const Home = () => {
  const products = useSelector((state) => state.productReducer.products);

  if (!products || products.length === 0) {
    return <p className="loading">Loading products...</p>;
  }

  return (
    <div className="home-page">

      <section className="hero-section">
        <img
          src="https://dummyimage.com/1500x400/2874f0/ffffff&text=Big+Sale+Banner
          "
          alt="Hero Banner"
          className="hero-banner"
        />
      </section>

      <section className="category-section">
        <h2>Top Categories</h2>
        <div className="category-grid">
          {products.slice(0, 6).map((product, i) => (
            <div className="category-card" key={product.id}>
              <img src={product.image} alt={product.title} />
              <p>{product.category}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="deals-section">
        <h2>Today's Deals</h2>
        <div className="deal-row">
          {products.slice(6, 12).map((product) => (
            <div className="deal-card" key={product.id}>
              <img src={product.image} alt={product.title} />
              <p>{product.title.slice(0, 25)}...</p>
              <span>${product.price}</span>
            </div>
          ))}
        </div>
      </section>

      <section className="products-section">
        <h2>Popular Products</h2>
        <div className="product-grid">
          {products.slice(12, 18).map((product) => (
            <div className="product-card" key={product.id}>
              <img src={product.image} alt={product.title} />
              <h3>{product.title.slice(0, 20)}...</h3>
              <p>${product.price}</p>
              <button>Add to Cart</button>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Home;
