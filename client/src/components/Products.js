import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

function Products() {
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        // Fetch all products from the backend API
        axios.get('http://localhost:3000/product/products')
            .then(response => {
                setProducts(response.data);
                setLoading(false);
            })
            .catch(error => {
                console.error('Error fetching products:', error);
                setLoading(false);
            });
    }, []);

    if (loading) {
        return <div>Loading...</div>;
    }
    const styles=`    body {
        margin: 0;
        font-family: Arial, sans-serif;
        background-color: #f4f4f4;
    }

    .home {
        display: flex;
        flex-direction: column;
        min-height: 100vh;
    }

    .header {
        background-color: #333;
        color: #fff;
        padding: 20px;
        display: flex;
        justify-content: space-between;
        align-items: center;
    }

    .logo {
        font-size: 24px;
        text-decoration: none;
        color: #fff;
    }

    .nav-items a {
        color: #fff;
        text-decoration: none;
        margin-left: 20px;
    }

    .main-content {
        flex: 1;
        padding: 20px;
    }

    .product-list {
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
        gap: 20px;
    }

    .footer {
        background-color: #333;
        color: #fff;
        padding: 20px;
        text-align: center;
    }

    .bottom-links {
        margin-top: 20px;
    }

    .links span {
        font-weight: bold;
        margin-right: 10px;
    }

    .links a {
        color: #fff;
        text-decoration: none;
        margin-right: 10px;
    }
    .upper-image {
        position: relative;
        display: flex;
        justify-content: center;
        align-items: center;
    }
    
    .upper-image img {
        width: 100%;
    }
    
    .shop-now-button {
        background-color: #333;
        color: #fff;
        padding: 15px 80px;
        border: none;
        border-radius: 5px;
        cursor: pointer;
        position: absolute;
    }
    .shop-now-button:hover {
      background-color: #555; 
  }
    `;

    return (
        <div className="home">
        <style>{styles}</style>
        <header className="header">
            <h1 className="logo">4M Store</h1>
            <nav className="nav-items">
                <Link to="/">Home</Link>
                <Link to="/products">Products</Link>
                <Link to="/cart">Cart</Link>
                <Link to="/signin">SIgn In</Link>
                <Link to="/signup">SIgn up</Link>
            </nav>
        </header>
        <div>
            <h1>All Products</h1>
            <div className="product-list">
                {products.map(product => (
                    <div key={product.id}>
                        <img src={product.imageUrl} alt={product.name} style={{ width: '200px', height: '200px', cursor: 'pointer' }} />
                        <h3>{product.name}</h3>
                        <p>${product.price}</p>
                    </div>
                ))}
            </div>
        </div>
        <footer className="footer">
                <div className="copy">© 2024 4M Store</div>
                <div className="bottom-links">
                    <div className="links">
                        <span>More Info</span>
                        <Link to="/about">About Us</Link>
                        <Link to="/contact">Contact</Link>
                    </div>
                </div>
            </footer>
        </div>
    );
}

export default Products;
