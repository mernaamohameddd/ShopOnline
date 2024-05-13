import React, { useContext } from 'react';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import AuthContext from '../../store/authContext';
import FormInputError from '../../UI/form/FormInputError';
import { Link } from 'react-router-dom';

const SigninForm = () => {
  const { register, handleSubmit, formState } = useForm();

  const authContext = useContext(AuthContext);
  const navigate = useNavigate();

  const submitHandler = async (formData) => {
    try {
      const response = await fetch('http://localhost:3000/auth/signin', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
      });

      const data = await response.json();

      if (!response.ok) {
        throw Error(data.error);
      }

      // invoke the login function in our auth context
     authContext.login(data.userId, data.username, data.jwt);

      if (data.Role.toLowerCase() === "admin") {
        navigate('/admin');
      } else if (data.Role.toLowerCase() === "user") {
        console.log("Loggin successfully for user: ", {formData});
        navigate('/');
      }
    } catch (err) {
      console.log(err.message);
    }
  };

  const homePageUrl = '/';

  const style = `
    form {
        background-color: #f9f9f9;
        padding: 20px;
        border-radius: 5px;
        box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1);
        max-width: 400px;
        margin-top: 20px;
        margin: auto;
    }

    form label {
        display: block;
        margin-bottom: 10px;
    }

    form input[type="text"],
    form input[type="password"] {
        width: 100%;
        padding: 10px;
        margin-bottom: 15px;
        border: 1px solid #ccc;
        border-radius: 5px;
        box-sizing: border-box;
    }

    form button[type="submit"] {
        background-color: #333;
        color: #fff;
        padding: 10px 20px;
        border: none;
        border-radius: 5px;
        cursor: pointer;
        font-size: 16px;
        font-weight: bold;
    }

    form button[type="submit"]:hover {
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
        <main>
            <br></br>
            <form
                onSubmit={handleSubmit(submitHandler)}
            >
                <h1 style={{ fontWeight: 'bold', color: 'black', textAlign: 'center', fontSize: '25px' }}>SIGN IN</h1>
                <label htmlFor="Username">Username</label>
                <input
                    label="Username"
                    type="text"
                    name="Username"
                    {...register("Username", { required: true })}
                />
                {formState.errors.username && (
                    <FormInputError>Username must not be empty.</FormInputError>
                )}
                <br></br>
                <label htmlFor="Password">Password</label>
                <input
                    type="password"
                    name="Password"
                    {...register("Password", { required: true })}
                />
                {formState.errors.password && (
                    <FormInputError>Password must not be empty.</FormInputError>
                )}
                <br></br>
                <label htmlFor="Role">Role</label>
                <input
                    type="text"
                    name="Role"
                    {...register("Role", { required: true })}
                />
                {formState.errors.name && (
                    <FormInputError>Role must not be empty</FormInputError>
                )}
                <br></br>
                <button
                    type="submit"
                    className="bg-white rounded-xl my-4 py-2 px-8 self-center"
                >
                    Sign in
                </button>
            </form>
            <br></br>
        </main>
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
};

export default SigninForm;
