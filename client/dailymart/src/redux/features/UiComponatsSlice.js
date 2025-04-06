import { createSlice } from "@reduxjs/toolkit";
import reducer from "./shippingAddressSlices";

const uiSlice = createSlice({
    name: "ui",
    initialState:{
        isActiveComponent: 'welcome',
        
    },
    reducers: {
        setActiveComponent: (state, action) => {
          state.activeComponent = action.payload;
        },
      },
   
})

export const { setActiveComponent } = uiSlice.actions;

export default uiSlice.reducer;