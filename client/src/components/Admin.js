import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import Product from './Products'; 

function Admin() {
    const navigate = useNavigate();

    const [products, setProducts] = useState([
        
      { id: 1, name: 'Light Blue Stain Pajamas', price: 10, imageUrl: 'https://m.media-amazon.com/images/I/61lRmh7I7YL._AC_SX385_.jpg' },
      { id: 2, name: 'Dark Blue Stain Pajamas', price: 20, imageUrl: 'https://m.media-amazon.com/images/I/71yTYzUpDhL._AC_SX385_.jpg' },
      { id: 3, name: 'Rose Stain Pajamas', price: 30, imageUrl: 'https://m.media-amazon.com/images/I/61+9jrtsTXL._AC_SX385_.jpg' },
    ]);

    const viewProduct = (productId) => {
      if (productId === 0) {
          // Redirect to the products page
          navigate(`/product/add`);
      } else {
          // Redirect to product details page
          navigate(`/products/${productId}`);
      }
  };
    const renderProducts = () => {
        return (
          <main className="main-content">
            <div className="upper-image">
          <img src="https://www.ellesilk.com/blog/wp-content/uploads/silk-pyjamas-790-1.jpg" alt="Featured Product" />
          <button onClick={() => viewProduct(0)} className="shop-now-button">Add Products</button>
        </div>
          <h2>Featured Products</h2>
          <div className="product-list">
              {products.map(product => (
                  <div key={product.id} onClick={() => viewProduct(product.id)}>
                      <img src={product.imageUrl} alt={product.name} style={{ width: '200px', height: '200px', cursor: 'pointer' }} />
                      <h3>{product.name}</h3>
                      <p>${product.price}</p>
                  </div>
              ))}
          </div>
      </main>
        );
    };

    const styles = `
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
            text-align: center; /* Center the button horizontally */
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
            bottom: 350px;
            left: 50%;
            transform: translateX(-50%); /* Center the button horizontally */
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
                </nav>
            </header>
            {renderProducts()}
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

export default Admin;
