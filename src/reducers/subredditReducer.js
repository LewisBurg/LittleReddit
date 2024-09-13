import { createSlice } from '@reduxjs/toolkit';
import { fetchSubreddits } from '../actions/subredditActions';

const initialState = {
  posts: [],
  loading: false,
  error: null
};

const subredditSlice = createSlice({
  name: 'subreddits', //instead of posts
  initialState,
  reducers: {}, // You might add other reducers here if needed
  extraReducers: (builder) => {
    builder
      .addCase(fetchSubreddits.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchSubreddits.fulfilled, (state, action) => {
        state.loading = false;
        state.posts = action.payload;
      })
      .addCase(fetchSubreddits.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  },
});

export default subredditSlice.reducer;