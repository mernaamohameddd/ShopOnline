import React, { useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

function AdminAddProduct() {
    const [name, setName] = useState('');
    const [price, setPrice] = useState('');
    const [imageUrl, setImageUrl] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await axios.post('http://localhost:3000/product/add', {
                name,
                price,
                imageUrl
            });
            alert('Product added successfully');
            // Reset form fields after successful submission
            setName('');
            setPrice('');
            setImageUrl('');
        } catch (error) {
            console.error('Error adding product:', error);
            alert('Error adding product. Please try again.');
        }
    };

    const style = `
    .admin-add-product-container {
        max-width: 500px;
        margin: auto;
        padding: 20px;
        border: 1px solid #ccc;
        border-radius: 5px;
        background-color: #f9f9f9;
    }

    .admin-add-product-container h2 {
        font-size: 24px;
        margin-bottom: 20px;
        text-align: center;
    }

    .admin-add-product-form label {
        display: block;
        margin-bottom: 10px;
    }

    .admin-add-product-form input {
        width: 100%;
        padding: 10px;
        margin-bottom: 20px;
        border: 1px solid #ccc;
        border-radius: 5px;
    }

    .admin-add-product-form button {
        display: block;
        width: 100%;
        padding: 10px;
        background-color: #333;
        color: #fff;
        border: none;
        border-radius: 5px;
        cursor: pointer;
    }

    .admin-add-product-form button:hover {
        background-color: #555;
    }
    body {
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
    }
    
    .upper-image img {
      width: 100%;
    }
    
    .shop-now-button {
      position: absolute;
      bottom: 20px;
      right: 20px;
      background-color: #333;
      color: #fff;
      padding: 10px 20px;
      border: none;
      border-radius: 5px;
      cursor: pointer;
    }
    
    .product-list {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
      gap: 20px;
    }
`;


return (
    <div className="home">
            <style>{style}</style>
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
        <style>{style}</style>
        <div className="admin-add-product-container">
            <h2>Add Product</h2>
            <form className="admin-add-product-form" onSubmit={handleSubmit}>
                <label>
                    Name:
                    <input type="text" value={name} onChange={(e) => setName(e.target.value)} required />
                </label>
                <label>
                    Price:
                    <input type="number" value={price} onChange={(e) => setPrice(e.target.value)} required />
                </label>
                <label>
                    Image URL:
                    <input type="text" value={imageUrl} onChange={(e) => setImageUrl(e.target.value)} required />
                </label>
                <button type="submit">Add Product</button>
            </form>
        </div>
    </div>
    <footer className="footer">
                <div className="copy">© 2024 E-Commerce Store</div>
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

export default AdminAddProduct;
