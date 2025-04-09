import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchBlogData = createAsyncThunk("blogs/fetchBlogData", async () => {
  try {
    const response = await axios.get(import.meta.env.VITE_BLOG_DATA_GET_URL);
    return response.data;
  } catch (error) {
    console.error(error);
    throw error;
  }
});

const BlogSlice = createSlice({
  name: "blogs",
  initialState: {
    blog: [],
    loading: false,
    error: null,
    filterBlogs: [],
  },
  reducers: {
    addToPostId : (state,action)=>{
        const id = action.payload
        // state.id =id
        const filteredBlogs = state.blog.filter((blog)=> blog._id === id)

        state.filterBlogs = filteredBlogs;
    }
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchBlogData.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchBlogData.fulfilled, (state, action) => {
        state.blog = action.payload; 
        state.loading = false;
      })
      .addCase(fetchBlogData.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  },
});
export const  {addToPostId} = BlogSlice.actions;
export default BlogSlice.reducer;
