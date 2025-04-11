import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

// API থেকে প্রোডাক্টস ফেচ করার ফাংশন
export const fetchProducts = createAsyncThunk(
  "products/fetchProducts",
  async () => {
    const res = await fetch(import.meta.env.VITE_PRODUCTS_GET_URL);
    const data = await res.json();
    
    return data;
  }
);

const initialState = {
  name: "allproducts",
  products: [],
  filteredProducts: [],
  category: "All",
  status: "idle",

  searchTerm: "",
  rating: 0,
};

// ফিল্টারিং লজিক
const filterProductsByCategory = (state) => {
  return state.products.filter((p) => {
    return state.category === "All" || p.category === state.category;
  })||[];
};

const filterProductsBySearchTerm = (state) => {
  const products = JSON.parse(JSON.stringify(state.products || []));

  const searchTerm = state.searchTerm || "";
  if (!searchTerm) return products;
  
  return products.filter((p) => {
    return p.title?.toLowerCase()
      .split(" ") 
      .some((word) => word.includes(searchTerm.toLowerCase())); 
  }) || []; 
};



const filterProductsByRating = (state) => {
    return state.products.filter((p) => {
      if (state.rating === "4up") {
        const rating = parseFloat(p.rating)  || 0;
        return rating >= 4;  
      } else if (state.rating === "below4") {
        const rating = parseFloat(p.rating) || 0;
        return rating < 4;  
      }
      return true; 
    })||[];
  };
  

const productSlice = createSlice({
  name: "product",
  initialState,
  reducers: {
    setCategory: (state, action) => {
      state.category = action.payload;
      state.filteredProducts = [...filterProductsByCategory(state)];
    },
    setSearchTerm: (state, action) => {
      state.searchTerm = action.payload;
      state.filteredProducts = [...filterProductsBySearchTerm(state)];
      console.log("After update:", state.searchTerm, state.filteredProducts);
    },
    setRating: (state, action) => {
      state.rating = action.payload;
      state.filteredProducts = [...filterProductsByRating(state)];
    },

    resetFilters: (state) => {
      state.category = "All";
      state.maxPrice = 200;
      state.searchTerm = "";
      state.rating = 0;
      state.filteredProducts = state.products;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchProducts.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchProducts.fulfilled, (state, action) => {
        state.status = "succeeded";
      
        state.products = Array.isArray(action.payload) ? action.payload : [];
   
        state.filteredProducts = [...state.products];
        console.log([...state.products])
      })
      .addCase(fetchProducts.rejected, (state, action) => {
        state.status = "failed";
        console.error("API call failed:", action.error);
      });
  },
});

export const { setCategory, setSearchTerm, setRating,  resetFilters } =
  productSlice.actions;

export default productSlice.reducer;
