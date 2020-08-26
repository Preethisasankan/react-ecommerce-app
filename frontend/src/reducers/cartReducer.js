import { ADD_TO_CART, ADD_TO_CART_FAIL, REMOVE_CART_ITEM } from "../constants/cartConstants";
const cartReducer=(state={cartitems:[]},action)=>{
    switch (action.type){
        case ADD_TO_CART:
            const item = action.payload;
            const product = state.cartitems.find(x => x.product === item.product);
            if (product) {
                // console.log("product");
                // console.log(state.cartitems);
              return {
                cartitems:
                  state.cartitems.map(x => x.product === product.product ? item : x)
              };
              
            //   console.log("ffff");
            //   console.log(state.cartitems);
            }
            return { cartitems: [...state.cartitems, item] };
        case REMOVE_CART_ITEM: 
        console.log("ffff");
            return { cartitems: state.cartitems.filter(x => x.product !== action.productId)};
           
        default: return state;

    }

}
export {cartReducer};