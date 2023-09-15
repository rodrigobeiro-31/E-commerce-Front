import { createSlice } from "@reduxjs/toolkit";

const orderPriceSlice = createSlice({
  name: "orderPrice",
  initialState: 0,
  reducers: {
    addPrice(state, action) {
      return (state = state + action.payload);
    },
    removePrice(state, action) {
      return (state = state - action.payload);
    },
    removeTotalPrice(state, action) {
      return (state = state - action.payload);
    },
  },
});

const { actions, reducer } = orderPriceSlice;
export const { addPrice, removePrice, removeTotalPrice } = actions;
export default reducer;
