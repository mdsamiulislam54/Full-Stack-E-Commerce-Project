import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";


export const fetshproducts = createAsyncThunk(
    "products/fetchProducts",
    async () => {
      try {
        const response = await axios.get("http://localhost:5000/api/users/products/data");
        return response.data;
      } catch (error) {
        console.error(error);
        throw error;
      }
    }
  );


const productSlice = createSlice({
    name: "products",
    initialState:{
        products:[],
        loading : false,
        error: null,
    },
    reducers:{},
    extraReducers: (builder)=>{
        builder
        .addCase(fetshproducts.pending,(state)=>{
            state.loading = true;
            state.error = null;
        })
        .addCase(fetshproducts.fulfilled,(state,action)=>{
            state.products = action.payload;
            state.loading = false;
        })
        .addCase(fetshproducts.rejected,(state,action)=>{
            state.loading = false;
            state.error = action.error.message;
        })

    }
})

export default productSlice.reducer;