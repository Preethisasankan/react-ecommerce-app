import React, { useEffect, useState } from 'react';
// import data from '../data';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { detailsProducts } from '../actions/productActions';

function ProductScreen(props) {

    // const product = data.products.find(x => x._id === props.match.params.id);
    const productDetails = useSelector((state) => state.productDetails);
    const [qty,setQty]=useState([]);
    const { product, loading, error } = productDetails;
    const dispatch = useDispatch();
    useEffect(() => {

        dispatch(detailsProducts(props.match.params.id));
        
        return () => {

        };
    }, []);
    const handleAddToCart=()=>{
        props.history.push("/cart/"+props.match.params.id +"?qty="+ qty);

    }
return loading ? <div>loading</div> : error ? <div>{error}</div> :
        <div>
            <div>
                <Link to="/">Back</Link></div>
            <div className="details">
                <div className="details-image">
                    <img src={product.image} alt={product.name} />
                </div>
                <div className="details-info">
                    <ul>
                        <li><h4>{product.name}</h4></li>
                        <li><b>{product.price}</b></li>
                    </ul>
                </div>
                <div className="details-action">
                    <ul>
                        <li>Price:{product.price}</li>
                        <li> Status: {(product.countInStock > 0)? "instock":"out of stock"}</li>
                        <li> Qty: <select value={qty} onChange={(e)=> setQty(e.target.value)}>
                        {[...Array(product.countInStock).keys()].map((x) => <option key ={x+1} value={x+1}>{x+1}</option>)}
                        </select>
                        </li>
                        <li> {product.countInStock > 0 && (<button onClick={handleAddToCart}>Add to cart</button>)}</li>
                    </ul>
                </div>
            </div>
        </div>
}
export default ProductScreen;