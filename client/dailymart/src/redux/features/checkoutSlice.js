import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    checkout : [],

}

const checkoutSlice = createSlice({
    name : "checkout",
    initialState,
    reducers : {
        addToCheckout : (state,action)=>{
            state.checkout = [action.payload];
            
        }
    }
})

export const { addToCheckout } = checkoutSlice.actions;

export default checkoutSlice.reducer;