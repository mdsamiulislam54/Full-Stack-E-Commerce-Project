import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

// API থেকে প্রোডাক্টস ফেচ করার ফাংশন
export const fetchProducts = createAsyncThunk(
  "products/fetchProducts",
  async () => {
    const res = await fetch("http://localhost:5000/api/users/products/data");
    const data = await res.json();
    
    return data;
  }
);

const initialState = {
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
  return state.products.filter((p) => {
    return p.description
      .toLowerCase()
      .split(" ") 
      .some((word) => word.includes(state.searchTerm.toLowerCase())); 
  }) || [];
};



const filterProductsByRating = (state) => {
    return state.products.filter((p) => {
      if (state.rating === "4up") {
        const rating = parseFloat(p.rating)
        return rating >= 4;  
      } else if (state.rating === "below4") {
        const rating = parseFloat(p.rating)
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
