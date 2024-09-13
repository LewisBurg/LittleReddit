
import axios from 'axios';

const API_ROOT = 'https://www.reddit.com';

const api = axios.create({
  baseURL: API_ROOT, 
});

export default api;