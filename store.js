import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "./redux/counter/counterSlice"
import cartSlice  from "./redux/shop/cartReducerSlice";
import productSlice from "./redux/shop/productSlice";

export const store = configureStore({
              reducer:{
            counter: counterReducer  ,
            product: productSlice,
            cart : cartSlice
              }

});