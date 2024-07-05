// redux/slices/favoritesSlice.ts
import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import toast from "react-hot-toast";
import { Camera, Laptop, Monitor } from "@/types";
import type { RootState } from '../store'

type ProductType = Camera | Laptop | Monitor;

interface FavoritesState {
  favorites: ProductType[];
  isInLocalStorage:boolean
}

const initialState: FavoritesState = {
  isInLocalStorage:false,
  favorites:
    typeof window !== "undefined"
      ? JSON.parse(localStorage.getItem("favorites") ?? "[]")
      : []
};

const favoritesSlice = createSlice({
  name: "favorites",
  initialState,
  reducers: {
    addFavorite: (state, action: PayloadAction<ProductType>) => {
      // check if product already exist in favorites
     const existingItemIndex = state.favorites.findIndex(
       (item) => item._id === action.payload._id,
     );
      if (existingItemIndex !== -1) {
        state.favorites[existingItemIndex] = action.payload
        state.isInLocalStorage = true
        } else {
        state.favorites.push(action.payload);
        localStorage.setItem("favorites", JSON.stringify(state.favorites));
        toast.success("Product added to favorites!")
      }
   
     
    },
    removeFavorite: (state, action: PayloadAction<string>) => {
      state.favorites = state.favorites.filter(
        (item) => item._id !== action.payload,
        );
      localStorage.setItem("favorites", JSON.stringify(state.favorites));
        state.isInLocalStorage = true;
        toast.success("Product  removed from favorites!");
    },
  },
});

export const { addFavorite, removeFavorite } = favoritesSlice.actions;

export const getAllLocalStorageFavoriteProduct = (state: RootState) => state.favorites.favorites;

export const getIsProductInLocalStorage = (state: RootState) => state.favorites.isInLocalStorage;

export default favoritesSlice.reducer;
