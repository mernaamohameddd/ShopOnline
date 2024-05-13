import React from 'react';
import { BrowserRouter, Route, Routes, Navigate } from 'react-router-dom';
import "./App.css";
import Products from "./components/Products";
import Home from "./components/Home";
import AuthProvider from './store/AuthProvider';
import SigninPage from './pages/SigninPage';
import SignupPage from './pages/SignupPage';
import { useAuth } from './store/AuthProvider';
import Admin from './components/Admin';
import AddProduct from './components/AddProducts';
function App() {
  return (
    <AuthProvider>
    <BrowserRouter>
    <Routes>
<Route path="/product/products" element={<Products />} />
<Route path="/signup" element={<SignupPage />} />
 <Route path="/signin" element={<SigninPage />} />
 <Route path= "/" element={<Home/>} />
 <Route path= "/admin" element={<Admin/>} />
 <Route path="/product/add" element={<AddProduct />}/>
</Routes>
    
    </BrowserRouter>
    </AuthProvider>
  )

}

function PrivateRoute({ component, ...props }) {
  const { isAuthenticated } = useAuth();

  return isAuthenticated ? (
    React.createElement(component, props)
  ) : (
    <Navigate to="/signin" replace />
  );
}

export default App;
