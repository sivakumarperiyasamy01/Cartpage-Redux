import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "../constants/cartSlice";

const appstore = configureStore({
  reducer: {
    products: cartReducer,
  },
});

export default appstore;
