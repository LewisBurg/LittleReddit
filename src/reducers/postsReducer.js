import { createSlice } from '@reduxjs/toolkit';
import { fetchPosts } from '../actions/postActions';

const initialState = {
  posts: [],
  loading: false,
  error: null
};

const postsSlice = createSlice({
  name: 'posts',
  initialState,
  reducers: {}, // You might add other reducers here if needed
  extraReducers: (builder) => {
    builder
      .addCase(fetchPosts.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchPosts.fulfilled, (state, action) => {
        state.loading = false;
        state.posts = action.payload;
      })
      .addCase(fetchPosts.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  },
});

export default postsSlice.reducer;