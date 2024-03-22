import { createSlice } from "@reduxjs/toolkit";
import { CartItem, CartState } from "../interfaces";

const initialState: CartState = {
  isCartOpen: false,
  cart: [],
  items: [],
};

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    setItems: (state, action: { payload: any[] }) => {
      state.items = action.payload; // Assuming items can have any structure
    },

    addToCart: (state, action: { payload: { item: CartItem } }) => {
      state.cart.push(action.payload.item);
    },

    removeFromCart: (state, action: { payload: { id: number } }) => {
      state.cart = state.cart.filter((item) => item.id !== action.payload.id);
    },

    increaseCount: (state, action: { payload: { id: number } }) => {
      state.cart = state.cart.map((item) => {
        if (item.id === action.payload.id) {
          item.count++;
        }
        return item;
      });
    },

    decreaseCount: (state, action: { payload: { id: number } }) => {
      state.cart = state.cart.map((item) => {
        if (item.id === action.payload.id && item.count > 1) {
          item.count--;
        }
        return item;
      });
    },

    setIsCartOpen: (state) => {
      state.isCartOpen = !state.isCartOpen;
    },
  },
});

export const {
  setItems,
  addToCart,
  removeFromCart,
  increaseCount,
  decreaseCount,
  setIsCartOpen,
} = cartSlice.actions;

export default cartSlice.reducer;
