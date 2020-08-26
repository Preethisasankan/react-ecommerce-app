import { PRODUCT_LIST_REQUEST, PRODUCT_LIST_SUCCESS, PRODUCT_LIST_FAIL, PRODUCT_DETAILS_REQUEST, PRODUCT_DETAILS_SUCCESS, PRODUCT_DETAILS_FAIL, PRODUCT_SAVE_SUCCESS, PRODUCT_SAVE_FAIL, PRODUCT_SAVE_REQUEST } from "../constants/productConstants";
import axios from 'axios';

const listProducts= () => async(dispatch)=>{
    try {
        dispatch({ type: PRODUCT_LIST_REQUEST });
        const instance = axios.create({baseURL: 'http://127.0.0.1:5000'});
        const { data } = await instance.get("/api/products");
        dispatch({ type: PRODUCT_LIST_SUCCESS, payload: data });
    }catch (error) {
        dispatch({ type: PRODUCT_LIST_FAIL, payload: error.message });
      }
}
const saveProduct = (product) => async (dispatch, getState) => {
    try {
      dispatch({ type: PRODUCT_SAVE_REQUEST, payload: product });
      const {
        userSignin: { userInfo },
      } = getState();
      if (!product._id) {
        const instance = axios.create({baseURL: 'http://127.0.0.1:5000'});
        const { data } = await instance.post('/api/products', product, {
          headers: {
            Authorization: 'Bearer ' + userInfo.token,
          },
        });
        dispatch({ type: PRODUCT_SAVE_SUCCESS, payload: data });
      } else {
        const instance = axios.create({baseURL: 'http://127.0.0.1:5000'});
        const { data } = await instance.put(
          '/api/products/' + product._id,
          product,
          {
            headers: {
              Authorization: 'Bearer ' + userInfo.token,
            },
          }
        );
        dispatch({ type: PRODUCT_SAVE_SUCCESS, payload: data });
      }
    } catch (error) {
      dispatch({ type: PRODUCT_SAVE_FAIL, payload: error.message });
    }
  };
const detailsProducts= (productId) => async(dispatch)=>{
    try {
        
        dispatch({ type: PRODUCT_DETAILS_REQUEST, payload: productId });
        const instance = axios.create({baseURL: 'http://127.0.0.1:5000'});
        const { data } = await instance.get("/api/product/"+productId);
        // console.log(data);
        dispatch({ type: PRODUCT_DETAILS_SUCCESS, payload: data });
    }catch (error) {
        dispatch({ type: PRODUCT_DETAILS_FAIL, payload: error.message });
      }
}
export {listProducts, detailsProducts, saveProduct};