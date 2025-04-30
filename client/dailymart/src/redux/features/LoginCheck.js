import { createSlice } from "@reduxjs/toolkit";

const checkLoginSlice = createSlice({
    name: "checkLogin",
    initialState: {
        isLoggedIn: true,
    },
    reducers: {
        setIsLoggedIn: (state, action) => {
            state.isLoggedIn = action.payload;
        },
        
    },
})

export const { setIsLoggedIn } = checkLoginSlice.actions;
console.log(setIsLoggedIn)
export default checkLoginSlice.reducer;