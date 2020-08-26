import React from 'react';
// import logo from './logo.svg';
import './App.css';

import ProductScreen from './screens/ProductScreen';
import HomeScreen from './screens/HomeScreen';
import CartScreen from './screens/CartScreen';
import SignUpScreen from './screens/SignUpScreen';
import {BrowserRouter,Route,Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import RegisterScreen from './screens/RegisterScreen';
import ProductsScreen from './screens/ProductsScreen';
function App() {
  const userSignin = useSelector((state) => state.userSignin);
  const { userInfo } = userSignin;

  const cart=useSelector((state)=>state.cart);
  const {cartitems, error} =cart;

  const openMenu = () => {
    document.querySelector('.sidebar').classList.add('open');
  };
  const closeMenu = () => {
    document.querySelector('.sidebar').classList.remove('open');
  };
  return (
    <BrowserRouter><div className="grid-container"> 
       <header className="header">
            <div className="brand">
              <button onClick={openMenu}>&#9776;</button>
              <Link to="/">Preethi's Website</Link>
            </div>
            <div className="header-links">
            <Link to="/cart">Cart({cartitems.reduce((a, c) => a + c.qty, 0)})</Link>
            {userInfo? 
              <Link to="/profile">{userInfo.name}</Link>
             : 
              <Link to="/signin">Sign In</Link>
            }
            </div>
       </header>
       <aside className="sidebar"> <button onClick={closeMenu}>x</button>
       Product Category</aside>
       <main className="main">
        <Route path="/product/:id"  component={ProductScreen}/>
         <Route path="/" exact="true" component={HomeScreen}/>
         <Route path="/cart/:id?"  component={CartScreen}/> 
         <Route path="/signin"  component={SignUpScreen}/> 
         <Route path="/register"  component={RegisterScreen}/> 
         <Route path="/products" component={ProductsScreen} />
       </main>
       <footer className="footer">
        All xxxxxx reserved
       </footer>
    </div></BrowserRouter>
  );
}

export default App;
