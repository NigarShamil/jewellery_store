
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
        state.carts[existingProductIndex].quantity += quantity;
      } else {
        state.carts.push(action.payload);
      }

      state.itemCount = state.carts.reduce((total, item) => total + item.quantity, 0);
      state.totalAmount = state.carts.reduce((total, item) => total + (item.quantity * item.price), 0);

      storeInLocalStorage(state.carts);
    },
    removeFromCart: (state, action) => {
      const index = state.carts.findIndex(item => item.id === action.payload);
      if (index !== -1) {
        const removedItem = state.carts[index];
        state.itemCount -= removedItem.quantity;
        state.totalAmount -= removedItem.price * removedItem.quantity;

        state.carts.splice(index, 1);

        storeInLocalStorage(state.carts);
      }
    },
    incrementQuantity: (state, action) => {
      const { id } = action.payload;
      const existingProduct = state.carts.find(item => item.id === id);
      if (existingProduct) {
        existingProduct.quantity++;
        state.itemCount++;
        state.totalAmount += existingProduct.price;
        storeInLocalStorage(state.carts);
      }
    },
    decrementQuantity: (state, action) => {
      const { id } = action.payload;
      const existingProduct = state.carts.find(item => item.id === id);
      if (existingProduct && existingProduct.quantity > 1) {
        existingProduct.quantity--;
        state.itemCount--;
        state.totalAmount -= existingProduct.price;
        storeInLocalStorage(state.carts);
      }
    },
    clearCart: (state) => {
      state.carts = [];
      state.itemCount = 0;
      state.totalAmount = 0;

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

export const { addToCart, removeFromCart, clearCart, getCartTotal, incrementQuantity, decrementQuantity } = cartSlice.actions;
export default cartSlice.reducer;


