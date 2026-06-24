import { createSlice } from '@reduxjs/toolkit';

export const CartSlice = createSlice({
  name: 'cart',
  initialState: {
    items: [], // Initialize items as an empty array
  },
  reducers: {
    // 1. Function to add an item to the cart
    addItem: (state, action) => {
      const { name, image, cost } = action.payload;
      const existingItem = state.items.find(item => item.name === name);
      
      if (existingItem) {
        // If the item already exists in the cart, just increase the quantity
        existingItem.quantity++;
      } else {
        // If it's a new item, add it to the array with a starting quantity of 1
        state.items.push({ name, image, cost, quantity: 1 });
      }
    },
    
    // 2. Function to completely remove an item from the cart
    removeItem: (state, action) => {
      // Filter out the item whose name matches the payload
      state.items = state.items.filter(item => item.name !== action.payload);
    },
    
    // 3. Function to update the quantity of a specific item
    updateQuantity: (state, action) => {
      const { name, quantity } = action.payload;
      const itemToUpdate = state.items.find(item => item.name === name);
      
      if (itemToUpdate) {
        itemToUpdate.quantity = quantity;
      }
    },
  },
});

// Export the action creators so they can be dispatched from components
export const { addItem, removeItem, updateQuantity } = CartSlice.actions;

// Export the reducer to be included in the Redux store
export default CartSlice.reducer;
