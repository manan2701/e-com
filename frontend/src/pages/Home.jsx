import React from 'react';
import '../styles/home.css';
import { useSelector } from 'react-redux';

const Home = () => {
  const products = useSelector((state) => state.productReducer.products);

  if (!products || products.length === 0) {
    return <p className="home-loading">Loading products...</p>;
  }

  return (
    <div className="home-page">

      <section className="home-hero-section">
        <img
          src="https://dummyimage.com/1500x400/2874f0/ffffff&text=Big+Sale+Banner"
          alt="Hero Banner"
          className="home-hero-banner"
        />
      </section>

      <section className="home-category-section">
        <h2 className="home-heading">Top Categories</h2>
        <div className="home-category-grid">
          {products.slice(0, 6).map((product) => (
            <div className="home-category-card" key={product.id}>
              <img src={product.image} alt={product.title} className="home-category-img" />
              <p className="home-category-text">{product.category}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="home-deals-section">
        <h2 className="home-heading">Today's Deals</h2>
        <div className="home-deal-row">
          {products.slice(6, 12).map((product) => (
            <div className="home-deal-card" key={product.id}>
              <img src={product.image} alt={product.title} className="home-deal-img" />
              <p className="home-deal-title">{product.title.slice(0, 25)}...</p>
              <span className="home-deal-price">${product.price}</span>
            </div>
          ))}
        </div>
      </section>

      <section className="home-products-section">
        <h2 className="home-heading">Popular Products</h2>
        <div className="home-product-grid">
          {products.slice(12, 18).map((product) => (
            <div className="home-product-card" key={product.id}>
              <img src={product.image} alt={product.title} className="home-product-img" />
              <h3 className="home-product-title">{product.title.slice(0, 20)}...</h3>
              <p className="home-product-price">${product.price}</p>
              <button className="home-product-btn">Add to Cart</button>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Home;
