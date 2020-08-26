import React, { useState, useEffect } from 'react';
// import { register } from '../actions/userActions';
import { useDispatch, useSelector } from 'react-redux';
import { saveProduct } from '../actions/productActions';
function ProductsScreen(props){
    // const [id, setId] = useState('');
  const [name, setName] = useState('');
  const [price, setPrice] = useState('');
  const [brand, setBrand] = useState('');
  const [category, setCategory] = useState('');
  const [countInStock, setCountInStock] = useState('');
  const [description, setDescription] = useState('');

  const productSave  =useSelector((state) =>state.productSave );
  const {
    loading: loadingSave,
    success: successSave,
    error: errorSave,
  } = productSave;
    // const 
  const submitHandler=(e)=>{
    e.preventDefault();
    dispatch(
        saveProduct({
        //   _id: id,
          name,
          price,
          brand,
          category,
          countInStock,
          description,
        })
      );

}
const dispatch =useDispatch();
useEffect(()=>{
    
    return () =>{

    };
  },[]);

    return <div className="form">
        <form onSubmit={submitHandler}>
          <ul className="form-container">
            <li>
              <h2>Create Product</h2>
            </li>
            <li>
              {loadingSave && <div>Loading...</div>}
              {errorSave && <div>{errorSave}</div>}
            </li>

            <li>
              <label htmlFor="name">Name</label>
              <input
                type="text"
                name="name"
                value={name}
                id="name"
                onChange={(e) => setName(e.target.value)}
              ></input>
            </li>
            <li>
              <label htmlFor="price">Price</label>
              <input
                type="text"
                name="price"
                value={price}
                id="price"
                onChange={(e) => setPrice(e.target.value)}
              ></input>
            </li>
            <li>
              <label htmlFor="brand">Brand</label>
              <input
                type="text"
                name="brand"
                value={brand}
                id="brand"
                onChange={(e) => setBrand(e.target.value)}
              ></input>
            </li>
            <li>
              <label htmlFor="countInStock">CountInStock</label>
              <input
                type="text"
                name="countInStock"
                value={countInStock}
                id="countInStock"
                onChange={(e) => setCountInStock(e.target.value)}
              ></input>
            </li>
            <li>
              <label htmlFor="name">Category</label>
              <input
                type="text"
                name="category"
                value={category}
                id="category"
                onChange={(e) => setCategory(e.target.value)}
              ></input>
            </li>
            <li>
              <label htmlFor="description">Description</label>
              <textarea
                name="description"
                value={description}
                id="description"
                onChange={(e) => setDescription(e.target.value)}
              ></textarea>
            </li>
            <li>
              <button type="submit" className="button primary">
                  Create
                {/* {id ? 'Update' : 'Create'} */}
              </button>
            </li>
            <li>
             
            </li>
          </ul>
        </form>
      </div>

}
export default ProductsScreen;