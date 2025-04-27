import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./features/cart/cartSlice"
import wishListReducer from "./features/wish-list/wishListSlice"
import authReducer from "./features/auth/authSlice"

const store = configureStore({
    reducer: {
      auth: authReducer,
      cart: cartReducer,
      wishList: wishListReducer,
    }
})

export default store;