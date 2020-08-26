import axios from 'axios';
import Cookie from "js-cookie";
import { ADD_TO_CART, REMOVE_CART_ITEM } from '../constants/cartConstants';

const addToCart=(productId,qty)=> async (dispatch, getState)=>{
    try{
        const instance = axios.create({baseURL: 'http://127.0.0.1:5000'});
        const { data } = await instance.get("/api/product/"+productId);
        dispatch({type: ADD_TO_CART, payload: {
                product: data._id,
                name: data.name,
                image: data.image,
                price: data.price,
                countInStock: data.countInStock,
                qty
              }
         });
         const { cart: { cartitems } } = getState();
         Cookie.set("cartitems", JSON.stringify(cartitems));
    }catch(error){
        // dispatch({type: ADD_TO_CART_FAIL, payload:error.msg });
    }
}
    const removeCartItem= (productId)=> (dispatch)=>{
        try{
            dispatch({type:REMOVE_CART_ITEM, productId:productId });
        }catch(error){
            // dispatch({type:REMOVE_CART_ITEM_error, error :error.msg });  
        }
        

    }

export {addToCart , removeCartItem};