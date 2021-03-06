import React, { useState, useEffect } from 'react';
import { register } from '../actions/userActions';
import { useDispatch, useSelector } from 'react-redux';
function RegisterScreen(props){
    const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [rePassword, setRePassword] = useState('');
  const userRegister =useSelector((state) =>state.userRegister);
  const {userInfo, error,loading}= userRegister;
    // const 
  const submitHandler=(e)=>{
    e.preventDefault();
    dispatch(register(name, email, password));

}
const dispatch =useDispatch();
useEffect(()=>{
    if(userInfo){
        props.history.push("/");
    }
    return () =>{

    };
  },[userInfo]);

    return <div className="form">
    <form onSubmit={submitHandler} >
      <ul className="form-container">
        <li>
          <h2>Create Account</h2>
        </li>
        <li>
          {loading && <div>Loading...</div>}
          {error && <div>{error}</div>}
        </li>
        <li>
          <label htmlFor="name">
            Name
          </label>
          <input type="name" name="name" id="name" onChange={(e) => setName(e.target.value)}>
          </input>
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
          <label htmlFor="rePassword">Re-Enter Password</label>
          <input type="password" id="rePassword" name="rePassword" onChange={(e) => setRePassword(e.target.value)}>
          </input>
        </li>
        <li>
          <button type="submit" className="button primary">Register</button>
        </li>
        <li>
          Already have an account?
          {/* <Link to={redirect === "/" ? "signin" : "signin?redirect=" + redirect} className="button secondary text-center" >Create your amazona account</Link> */}

        </li>

      </ul>
    </form>
    </div>

}
export default RegisterScreen;