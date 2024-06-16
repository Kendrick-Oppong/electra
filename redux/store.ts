import { configureStore } from "@reduxjs/toolkit";
import favoritesReducer from "./features/favoriteSlice"
import cartReducer from "./features/cartSlice"

export const makeStore = () => {
  return configureStore({
    reducer: {
      favorites:favoritesReducer,
      cart:cartReducer
    },
  });
};

// Infer the type of makeStore
export type AppStore = ReturnType<typeof makeStore>;
// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<AppStore["getState"]>;
export type AppDispatch = AppStore["dispatch"];
