import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const fetchPosts = createAsyncThunk('posts/fetchPosts', async (subredditName) => {
  const response = await axios.get(`https://www.reddit.com/r/${subredditName}.json`);
  return response.data.data.children.map(child => child.data);
});