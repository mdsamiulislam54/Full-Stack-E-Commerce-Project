import { createSlice } from "@reduxjs/toolkit";
import Swal from "sweetalert2";
const savelocalStroage = (state)=>{
    localStorage.setItem('whishlist', JSON.stringify(state));
}

const initialState = JSON.parse(localStorage.getItem('whishlist'))||[];

const whishlistSlice = createSlice({
    name: "whishlist",
    initialState,
    
    reducers: {
        addToWishlist: (state, action) => {
            const exixtest = state.find((item) =>item._id===action.payload._id)
            if(!exixtest){
                state.push(action.payload)
                savelocalStroage(state)
        }else{
            Swal.fire({
                title: "Item already in Whishlist",
                text: "You've already added this item to your wishlist",
                icon: "info",
                confirmButtonText: "Okay",
              });
        }
    },
    removeFromWishlist: (state, action) => {
        const updateState = state.filter((item)=> item._id!==action.payload._id)
        savelocalStroage(updateState)
        return updateState
    },
    clearWhislist : () => {
        localStorage.removeItem('whishlist');
        return []
    },
   
 }});
 export const { addToWishlist, removeFromWishlist, clearWhislist } = whishlistSlice.actions;
 export default whishlistSlice.reducer;