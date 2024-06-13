// redux/slices/favoritesSlice.ts
import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Camera, Laptop, Monitor } from "@/types";
import type { RootState } from '../store'

type ProductType = Camera | Laptop | Monitor;

interface FavoritesState {
  favorites: ProductType[];
}

const initialState: FavoritesState = {
  favorites:
    typeof window !== "undefined"
      ? JSON.parse(localStorage.getItem("favorites") ?? "[]")
      : [],
};

const favoritesSlice = createSlice({
  name: "favorites",
  initialState,
  reducers: {
    addFavorite: (state, action: PayloadAction<ProductType>) => {
      // check if product already exist in favorites
     const productExists = state.favorites.some(
       (item) => item._id === action.payload._id,
     );

     if (!productExists) {
       state.favorites.push(action.payload);
       localStorage.setItem("favorites", JSON.stringify(state.favorites));
     }
     
    },
    removeFavorite: (state, action: PayloadAction<string>) => {
      state.favorites = state.favorites.filter(
        (item) => item._id !== action.payload,
      );
      localStorage.setItem("favorites", JSON.stringify(state.favorites));
    },
  },
});

export const { addFavorite, removeFavorite } = favoritesSlice.actions;

export const favoriteProduct = (state: RootState) => state.favorites.favorites;
export default favoritesSlice.reducer;
