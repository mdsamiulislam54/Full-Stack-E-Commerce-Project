import { createSlice } from "@reduxjs/toolkit";

import Swal from 'sweetalert2';const getlocalStorage = ()=>{
    const cartData =localStorage.getItem("cart");
    return cartData? JSON.parse(cartData):{ cartItems: [], totalPrice: 0, totalQuantity: 0, shappingFee: 0 }
}

const setlocalStorage = (state) => {
    localStorage.setItem(
        "cart",
        JSON.stringify({
            cartItems: state.cartItems,
            totalPrice: state.totalPrice,
            totalQuantity: state.totalQuantity,
            shappingFee: state.shappingFee,
        })
    );
};
const initialState = getlocalStorage();

const cartSlice = createSlice({
    name: "cart",
    initialState,
    reducers: {
        addToCart: (state, action) => {
            const item = action.payload;
            const fromCartPage = item.fromCartPage;
            const existingItem = state.cartItems.find((cartItem) => cartItem._id === item._id);
            const itemprice = parseFloat(item.price.replace("$",""))
            
            if (existingItem) {
                existingItem.quantity += 1;
               if(!fromCartPage){
                Swal.fire({
                    icon: 'info',
                    title: 'Quantity Updated',
                    text: 'This item already exists in your cart. Quantity increased.',
                    showConfirmButton: false,
                    confirmButtonText: "Okay",
                  });
               }
            } else {
                state.cartItems.push({ ...item, quantity: 1 });
               
            }
            
            state.totalQuantity += 1;
            state.totalPrice += itemprice
            state.shappingFee = state.cartItems.length*5
            setlocalStorage(state)
        },
        decrementQuantity: (state, action) => {
            const itemId = action.payload;
            const existingItem = state.cartItems.find((i) => i._id === itemId);
            const itemPrice = parseFloat(existingItem.price.replace("$", ""));
            if (existingItem) {
              if (existingItem && existingItem.quantity > 1) {
                existingItem.quantity -= 1;
                state.totalQuantity -= 1;
                state.totalPrice -= itemPrice
              } else {
                state.cartItems = state.cartItems.filter((i) => i._id !== itemId);
                state.totalQuantity -= 1;
                state.totalPrice -= itemPrice;
                state.shappingFee = state.cartItems.length*5
                setlocalStorage(state)
                
              }
            }
          },

        removeFromCart: (state, action) => {
            const itemId = action.payload;
            const existingItem = state.cartItems.find((i) => i._id === itemId);
            const itemPrice = parseFloat(existingItem.price.replace("$", ""));

            if (existingItem) {
                state.cartItems = state.cartItems.filter((i) => i._id !== itemId);
                state.totalQuantity -= existingItem.quantity;
                state.totalPrice -= itemPrice * existingItem.quantity;
                state.shappingFee = state.cartItems.length * 5;
                setlocalStorage(state)
                
            }
        },
     
        clearCart: (state) => {
            state.cartItems = [];
            state.totalPrice = 0;
            state.totalQuantity = 0;
            setlocalStorage(state)
          }
    }
});

export const { addToCart, removeFromCart,decrementQuantity,clearCart,shappingFee } = cartSlice.actions;
export default cartSlice.reducer;
