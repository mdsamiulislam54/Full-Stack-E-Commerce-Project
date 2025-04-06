import { createSlice } from "@reduxjs/toolkit";


const uiSlice = createSlice({
    name: "ui",
    initialState:{
        isActiveComponent: '',
        
    },
    reducers: {
        setActiveComponent: (state, action) => {
          state.activeComponent = action.payload;
        },
      },
   
})

export const { setActiveComponent } = uiSlice.actions;

export default uiSlice.reducer;