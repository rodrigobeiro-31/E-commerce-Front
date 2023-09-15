import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: [],
  reducers: {
    addToCart(state, action) {
      const checkCart = state.find(
        (product) => product._id === action.payload._id
      );
      if (checkCart) {
        checkCart.quantity = checkCart.quantity + 1;
      } else {
        action.payload.quantity = 1;
        state.push(action.payload);
      }
    },
    removeFromCart(state, action) {
      const selectedProduct = state.find(
        (product) => product._id === action.payload._id
      );
      if (selectedProduct.quantity > 1) {
        selectedProduct.quantity = selectedProduct.quantity - 1;
      } else {
        return state.filter((product) => product._id !== action.payload._id);
      }
    },
  },
});

const { actions, reducer } = cartSlice;
export const { addToCart, logout, removeFromCart } = actions;
export default reducer;
