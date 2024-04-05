import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "../index";
export interface CartState {
  items: any[];
  productItems: any[];
}

const initialState: CartState = {
  items: [],
  productItems: [],
};

const CartSlice = createSlice({
  name: "cart",
  initialState: initialState,
  reducers: {
    addToCart(state, { type, payload }) {
      state.items.push(payload);
    },
    removeFromCart() {},
    productItems(state, { type, payload }) {
      state.productItems.push(payload);
      console.log(state.productItems);
    },
  },
  extraReducers: function (builder) {},
});

export const { addToCart, removeFromCart, productItems } = CartSlice.actions;
export const selectProductItems = (state: RootState) => {
  console.log(state); // Log the entire state to see its structure
  console.log(state.cart); // Log the cart slice to see if productItems are present
  return state.cart.productItems; // Return productItems
};

export default CartSlice.reducer;