// import {React} from "react";
import React, { useState } from 'react';
// import { useSelector } from "react-redux";
import { useEffect } from "react";
import {Link} from 'react-router-dom';
import {signin} from '../actions/userActions'
import { useSelector, useDispatch } from 'react-redux';

function SignUpScreen(props){
    const userSignin =useSelector((state) =>state.userSignin);
    const {userInfo, error,loading}= userSignin;
    const [email,setEmail]=useState('');
    const [password,setPassword]=useState('');
    const dispatch =useDispatch();
    // const redirect = props.location.search ? props.location.search.split("=")[1] : '/';
    useEffect(()=>{
        if(userInfo){
            props.history.push("/");
        }
        return () =>{

        };
      },[userInfo]);
      const submitHandler=(e)=>{
          e.preventDefault();
          dispatch(signin(email, password));

    }
    return  <div className="form">
    <form onSubmit={submitHandler} >
      <ul className="form-container">
        <li>
          <h2>Sign-In</h2>
        </li>
        <li>
          {loading && <div>Loading...</div>}
          {error && <div>{error}</div>}
        </li>
        <li>
          <label htmlFor="email">
            Email
          </label>
          <input type="email" name="email" id="email" onChange={(e) => setEmail(e.target.value)}>
          </input>
        </li>
        <li>
          <label htmlFor="password">Password</label>
          <input type="password" id="password" name="password" onChange={(e) => setPassword(e.target.value)}>
          </input>
        </li>
        <li>
          <button type="submit" className="button primary">Signin</button>
        </li>
        <li>
          New to amazona?
        </li>
        <li>
          <Link to="/register">Create Account</Link>
        </li>
      </ul>
    </form>
  </div>
}
export default SignUpScreen;