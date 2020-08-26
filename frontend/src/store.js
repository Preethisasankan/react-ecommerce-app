import {createStore} from 'redux';
import {combineReducers} from 'redux';
import { productListReducer,productDetailsReducer, productSaveReducer } from "./reducers/productListReducer";
import { compose, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { cartReducer } from './reducers/cartReducer';
import Cookie from 'js-cookie';
import { userSigninReducer, userRegisterReducer } from './reducers/userReducer';


const cartitems = Cookie.getJSON('cartitems') || [];
const userInfo = Cookie.getJSON('userInfo') || [];

const initialState={cart: { cartitems},userSignin: {userInfo}  };
const reducer=combineReducers({
    productList:productListReducer,
    productDetails: productDetailsReducer,
    cart:cartReducer,
    userSignin:userSigninReducer,
    userRegister: userRegisterReducer,
    productSave: productSaveReducer

});
const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store =createStore(reducer, initialState, composeEnhancer(applyMiddleware(thunk)));
export default store;