import { createAsyncThunk } from '@reduxjs/toolkit';
import api from '../api';

export const fetchSubreddits = createAsyncThunk('subreddits/fetchSubreddits', async () => {
  const response = await api.get('/subreddits.json'); // Use the api instance to make the request
  return response.data.data.children.map(child => child.data);
});