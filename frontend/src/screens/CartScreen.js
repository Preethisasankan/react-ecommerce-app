import React ,{useEffect}from 'react';
// import data from '../data';
import {Link} from 'react-router-dom';
// import axios from 'axios';
import { useSelector, useDispatch } from 'react-redux';

import { addToCart, removeCartItem } from '../actions/cartActions';

function CartScreen(props){

  // const [products, setProduct]= useState ([]);

  const cart=useSelector((state)=>state.cart);
  const {cartitems, error} =cart;
  const productId = props.match.params.id;
  const qty = props.location.search ? Number(props.location.search.split("=")[1]) : 1;
  const dispatch= useDispatch();
  const removeCartItemHandler =(productId)=>{
    dispatch(removeCartItem(productId));
  } 
  useEffect (()  =>{
    // const fetchData = async() =>{
    //   const instance = axios.create({baseURL: 'http://127.0.0.1:5000'});
    //   console.log(instance);
    //   const {data} = await instance.get("/api/products");
    //   console.log(data);
    //   setProduct(data);
    // }
    // fetchData();
    dispatch(addToCart(productId,qty));
    
    return () =>{

    };
  },[]);
  const checkoutHandler=()=>{
    props.history.push('/signin?redirect=shipping');
  }
    return <div className="cart">
      <ul className="cart-list-container"> 
      <li><h3> Shop Cart </h3></li>
      </ul>
      {
          
          cartitems.length === 0 ? <div> empty </div>:
            cartitems.map(item=>
            <div><img src={item.image}/>
            <select value={item.qty} onChange={(e)=>dispatch(addToCart(item.product,e.target.value ))}>
              {[...Array(item.countInStock).keys()].map( x => 
              <option value= {x+1} key= {x+1} >{x+1}</option>)}
            </select>
            <button type="button" className="remove" onClick={()=>removeCartItemHandler((item.product))}>Remove</button>
            
            </div>
            
            )}
            <div className="cart-action">
      <h3>
        Subtotal ( {cartitems.reduce((a, c) => a + c.qty, 0)} item)
        :
         $ {cartitems.reduce((a, c) => a + c.price * c.qty, 0)}
      </h3>
      <button onClick={checkoutHandler} className="button primary full-width" disabled={cartitems.length === 0}>
        Proceed to Checkout
      </button>

    </div>
            
      
      
     </div> 
    

}
export default CartScreen;