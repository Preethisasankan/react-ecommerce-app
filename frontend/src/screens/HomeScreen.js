import React ,{useEffect}from 'react';
// import data from '../data';
import {Link} from 'react-router-dom';
// import axios from 'axios';
import { useSelector, useDispatch } from 'react-redux';
import {listProducts} from '../actions/productActions';
function HomeScreen(props){

  // const [products, setProduct]= useState ([]);
  const productList=useSelector((state)=>state.productList);
  const {products, loading, error} =productList;
  const dispatch= useDispatch();
  useEffect (()  =>{
    // const fetchData = async() =>{
    //   const instance = axios.create({baseURL: 'http://127.0.0.1:5000'});
    //   console.log(instance);
    //   const {data} = await instance.get("/api/products");
    //   console.log(data);
    //   setProduct(data);
    // }
    // fetchData();
    dispatch(listProducts());
    return () =>{

    };
  },[]);
    return loading? <div>loading</div> : error? <div>{error}</div> : <div> HomeScreen
        <ul className="products">
               {
               products.map(product =>
                <li>
                   <div className="product">
                <Link to={'/product/' + product._id}>
                  <img
                    className="product-image"
                    src={product.image}
                    alt="product"
                  />
                </Link>
                <div className="product-name">
                  <Link to={'/product/' + product._id}>{product.name}</Link>
                </div>
                <div className="product-brand">{product.brand}</div>
                <div className="product-price">${product.price}</div>
                <div className="product-rating">
                  {product.rating} and {product.numReviews}
                </div>
              </div>
            </li>)
               }
               
               
           </ul>
    </div>

}
export default HomeScreen;