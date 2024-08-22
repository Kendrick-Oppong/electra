import { configureStore } from "@reduxjs/toolkit";
import favoritesReducer from "./features/favoriteSlice";
import cartReducer from "./features/cartSlice";
import searchToggleReducer from "./features/searchToggleSlice";
import modalNewsLetterReducer from "./features/modalNewsLetterSlice";
import checkoutReducer from "./features/checkoutSlice";

export const makeStore = () => {
  return configureStore({
    reducer: {
      favorites: favoritesReducer,
      cart: cartReducer,
      searchToggle: searchToggleReducer,
      modalNewsletter: modalNewsLetterReducer,
      checkout: checkoutReducer,
    },
  });
};

// Infer the type of makeStore
export type AppStore = ReturnType<typeof makeStore>;
// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<AppStore["getState"]>;
export type AppDispatch = AppStore["dispatch"];
