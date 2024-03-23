
import { createSlice } from '@reduxjs/toolkit';

const fetchFromLocalStorage = () => {
  const cart = localStorage.getItem('cart');
  return cart ? JSON.parse(cart) : [];
};

const storeInLocalStorage = (cart) => {
  localStorage.setItem('cart', JSON.stringify(cart));
};

const initialState = {
  carts: fetchFromLocalStorage(),
  itemCount: 0,
  totalAmount: 0,
};

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addToCart: (state, action) => {
      const { id, quantity, price } = action.payload;
      const existingProductIndex = state.carts.findIndex(item => item.id === id);

      if (existingProductIndex !== -1) {
        // Product already exists in cart, update quantity
        state.carts[existingProductIndex].quantity += quantity;
      } else {
        // Product is new in cart, add it
        state.carts.push(action.payload);
      }

      // Update total quantity and total amount
      state.itemCount = state.carts.reduce((total, item) => total + item.quantity, 0);
      state.totalAmount = state.carts.reduce((total, item) => total + (item.quantity * item.price), 0);

      // Store updated cart data in localStorage
      storeInLocalStorage(state.carts);
    },
    removeFromCart: (state, action) => {
      const index = state.carts.findIndex(item => item.id === action.payload);
      if (index !== -1) {
        const removedItem = state.carts[index];
        state.itemCount -= removedItem.quantity;
        state.totalAmount -= removedItem.price * removedItem.quantity;

        state.carts.splice(index, 1);

        // Store updated cart data in localStorage
        storeInLocalStorage(state.carts);
      }
    },
    clearCart: (state) => {
      state.carts = [];
      state.itemCount = 0;
      state.totalAmount = 0;

      // Clear cart data from localStorage
      storeInLocalStorage([]);
    },
    getCartTotal: (state) => {
      state.totalAmount = state.carts.reduce((cartTotal, cartItem) => {
        return cartTotal += cartItem.price * cartItem.quantity;
      }, 0);
      state.itemCount = state.carts.reduce((itemCount, cartItem) => {
        return itemCount += cartItem.quantity;
      }, 0);
    },
  },
});

export const { addToCart, removeFromCart, clearCart, getCartTotal } = cartSlice.actions;
export default cartSlice.reducer;

