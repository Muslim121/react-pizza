import { configureStore } from "@reduxjs/toolkit";
import filter from "./Slices/filterSlice";
import cart from "./Slices/CartSlice";
import pizza from "./Slices/pizzasSlice";

export const store = configureStore({
  reducer: {
    filter,
    cart,
    pizza,
  },
});
