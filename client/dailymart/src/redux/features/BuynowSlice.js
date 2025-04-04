import { createSlice } from "@reduxjs/toolkit";

const buynowSlice = createSlice({
    name: "buynow",
    initialState: {
        products: [],
        totalPrice: 0,
        totalQuantity: 0,
    },
    reducers: {
        addToBuynow: (state, action) => {
            const existingProduct = state.products.find(p => p._id !== action.payload._id);
            console.log(action.payload)
            
            if (existingProduct) {
                existingProduct.quantity += 1;
            } else {
                state.products.push({ ...action.payload, quantity: 1 });
            }

            state.totalPrice += action.payload.price;
            state.totalQuantity += 1;
        }
    }
});

export const { addToBuynow } = buynowSlice.actions;
export default buynowSlice.reducer;
