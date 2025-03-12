import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cartItems: [],
  totalPrice: 0,
  totalQuantity: 0,
};

const cartSlice = createSlice({
    name: "cart",
    initialState,
    reducers: {
        addToCart: (state, action) => {
            const item = action.payload;
            const existingItem = state.cartItems.find((i) => i._id === item._id);
            
            if (existingItem) {
                existingItem.quantity += 1;
            } else {
                state.cartItems.push({ ...item, quantity: 1 });
            }
            
            state.totalQuantity += 1;
            state.totalPrice += item.price;
        },
        decrementQuantity: (state, action) => {
            const itemId = action.payload;
            const existingItem = state.cartItems.find((i) => i._id === itemId);
            if (existingItem) {
              if (existingItem && existingItem.quantity > 1) {
                existingItem.quantity -= 1;
                state.totalQuantity -= 1;
                state.totalPrice -= existingItem.price;
              } else {
                state.cartItems = state.cartItems.filter((i) => i._id !== itemId);
                state.totalQuantity -= 1;
                state.totalPrice -= existingItem.price;
              }
            }
          },

        removeFromCart: (state, action) => {
            const itemId = action.payload;
            const existingItem = state.cartItems.find((i) => i._id === itemId);

            if (existingItem) {
                state.cartItems = state.cartItems.filter((i) => i._id !== itemId);
                state.totalQuantity -= existingItem.quantity;
                state.totalPrice -= existingItem.price * existingItem.quantity;
            }
        }
    }
});

export const { addToCart, removeFromCart,decrementQuantity } = cartSlice.actions;
export default cartSlice.reducer;
