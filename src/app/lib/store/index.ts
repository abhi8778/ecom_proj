import { configureStore } from "@reduxjs/toolkit";
import CartReducer, { CartState } from "./slices/cart";
import checkoutCartSlice, {
  CheckoutState,
} from "@/app/Molecules/store/slice/cart";

export const makeStore = () => {
  return configureStore({
    reducer: {
      cart: CartReducer,
      checkoutCart: checkoutCartSlice,
    },
  });
};
export type AppStore = ReturnType<typeof makeStore>;
// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<AppStore["getState"]>;
export type AppDispatch = AppStore["dispatch"];
