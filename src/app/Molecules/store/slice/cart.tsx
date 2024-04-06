import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface CheckoutState {
  cartItems: any[];
}

const initialState: CheckoutState = {
  cartItems: [],
};

const checkoutCartSlice = createSlice({
  name: "checkoutCart",
  initialState,
  reducers: {
    addToCart: (state, action: PayloadAction<any[]>) => {
      console.log("in");
      console.log(action);
      //   state.cartItems.push(action.payload);
      state.cartItems.push(...action.payload);
    },
  },
});

export const { addToCart } = checkoutCartSlice.actions;

export const cartItemsAvailable = (state: { checkoutCart: CheckoutState }) =>
  state.checkoutCart.cartItems;

export default checkoutCartSlice.reducer;
