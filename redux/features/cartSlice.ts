// // redux/slices/favoritesSlice.ts
// import { createSlice, PayloadAction } from "@reduxjs/toolkit";
// import toast from "react-hot-toast";
// import { Camera, Laptop, Monitor } from "@/types";
// import type { RootState } from "../store";

// type ProductType = Camera | Laptop | Monitor;

// interface CartState {
//   cart: ProductType[];
//   isInLocalStorage: boolean;
// }

// const initialState: CartState = {
//   isInLocalStorage: false,
//   cart:
//     typeof window !== "undefined"
//       ? JSON.parse(localStorage.getItem("cartItems") ?? "[]")
//       : [],
// };

// const cartSlice = createSlice({
//   name: "cart",
//   initialState,
//   reducers: {
//     addCart: (state, action: PayloadAction<ProductType>) => {
//       // check if product already exist in cart
//       const existingItemIndex = state.cart.findIndex(
//         (item) => item._id === action.payload._id,
//       );
//       if (existingItemIndex !== -1) {
//         state.cart[existingItemIndex] = action.payload;
//         state.isInLocalStorage = true;
//       } else {
//         state.cart.push(action.payload);
//         localStorage.setItem("cartItems", JSON.stringify(state.cart));
//         toast.success("Product successfully added to cart!");
//       }
//     },
//     removeCart: (state, action: PayloadAction<string>) => {
//       state.cart = state.cart.filter(
//         (item) => item._id !== action.payload,
//       );
//       localStorage.setItem("cartItems", JSON.stringify(state.cart));
//       state.isInLocalStorage = true;
//       toast.success("Product successfully removed from cart!");
//     },
//   },
// });

// export const { addCart, removeCart } = cartSlice.actions;

// export const getAllLocalStorageCartProduct = (state: RootState) =>
//   state.cart.cart;

// export const getIsProductInLocalStorage = (state: RootState) =>
//   state.cart.isInLocalStorage;

// export default cartSlice.reducer;

// redux/slices/cartSlice.ts





import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import toast from "react-hot-toast";
import { Camera, Laptop, Monitor } from "@/types";
import type { RootState } from "../store";

type ProductType = Camera | Laptop | Monitor;

type CartItem = ProductType & {
  quantity: number;
};

interface CartState {
  cart: CartItem[];
  isInLocalStorage: boolean;
}

const initialState: CartState = {
  isInLocalStorage: false,
  cart:
    typeof window !== "undefined"
      ? JSON.parse(localStorage.getItem("cartItems") ?? "[]")
      : [],
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addCart: (state, action: PayloadAction<ProductType>) => {
      const existingItemIndex = state.cart.findIndex(
        (item) => item._id === action.payload._id
      );
      if (existingItemIndex !== -1) {
        state.cart[existingItemIndex].quantity += 1;
        toast.success("Product quantity increased in cart!");
      } else {
        state.cart.push({ ...action.payload, quantity: 1 });
        toast.success("Product successfully added to cart!");
      }
      localStorage.setItem("cartItems", JSON.stringify(state.cart));
      state.isInLocalStorage = true;
    },
    removeCart: (state, action: PayloadAction<string>) => {
      state.cart = state.cart.filter((item) => item._id !== action.payload);
      localStorage.setItem("cartItems", JSON.stringify(state.cart));
      state.isInLocalStorage = true;
      toast.success("Product successfully removed from cart!");
    },
    incrementQuantity: (state, action: PayloadAction<string>) => {
      const existingItemIndex = state.cart.findIndex(
        (item) => item._id === action.payload
      );
      if (existingItemIndex !== -1) {
        state.cart[existingItemIndex].quantity += 1;
        toast.success("Product quantity increased in cart!");
      }
      localStorage.setItem("cartItems", JSON.stringify(state.cart));
    },
    decrementQuantity: (state, action: PayloadAction<string>) => {
      const existingItemIndex = state.cart.findIndex(
        (item) => item._id === action.payload
      );
      if (existingItemIndex !== -1 && state.cart[existingItemIndex].quantity > 1) {
        state.cart[existingItemIndex].quantity -= 1;
        toast.success("Product quantity decreased in cart!");
      }
      localStorage.setItem("cartItems", JSON.stringify(state.cart));
    },
  },
});

export const { addCart, removeCart, incrementQuantity, decrementQuantity } = cartSlice.actions;

export const getAllLocalStorageCartProduct = (state: RootState) =>
  state.cart.cart;

export const getIsProductInLocalStorage = (state: RootState) =>
  state.cart.isInLocalStorage;

export default cartSlice.reducer;
