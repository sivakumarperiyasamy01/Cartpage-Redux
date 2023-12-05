import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "products",
  initialState: {
    allproducts: [],
  },
  reducers: {
    addproducts: (state, action) => {
      state.allproducts.push(action.payload);
    },
    removeproducts: (state, action) => {
      const id = action.payload;
      //it will give the not equla value
      state.allproducts = state.allproducts.filter((item) => item.id !== id);
    },
    clearcartproducts: (state) => {
      state.allproducts = [];
    },
  },
});

export const { addproducts, removeproducts, clearcartproducts } =
  cartSlice.actions;
export default cartSlice.reducer;
