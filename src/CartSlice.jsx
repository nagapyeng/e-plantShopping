// src/CartSlice.jsx
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  items: [] // 🛒 Each item will be { name, image, cost, quantity, ... }
};

const CartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    // ✅ Add item to cart
    addItem: (state, action) => {
      const existingItem = state.items.find(item => item.name === action.payload.name);
      if (existingItem) {
        existingItem.quantity += 1; // If item already exists, increment quantity
      } else {
        state.items.push({ ...action.payload, quantity: 1 }); // Add new item with quantity = 1
      }
    },

    // 🔄 Remove item from cart by name
    removeItem: (state, action) => {
      const nameToRemove = action.payload;
      state.items = state.items.filter(item => item.name !== nameToRemove);
    },

    // 🔁 Update quantity of an item
    updateQuantity: (state, action) => {
      const { name, quantity } = action.payload;
      const item = state.items.find(item => item.name === name);
      if (item) {
        item.quantity = quantity;
      }
    }
  }
});

// ✅ Export actions
export const { addItem, removeItem, updateQuantity } = CartSlice.actions;

// ✅ Export reducer as default
export default CartSlice.reducer;
