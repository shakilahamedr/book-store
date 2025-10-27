import axios from 'axios';

const api = axios.create({
  baseURL: process.env.REACT_APP_API_URL || 'http://localhost:5000/api',
  headers: {
    'Content-Type': 'application/json'
  }
});

if (api.defaults.baseURL.includes('localhost') || api.defaults.baseURL.includes('127.0.0.1')) {
  console.log('using localhost(ipv6) or 127.0.0.1(ipv4) for backend API');
}

api.interceptors.request.use((config) => {
  const token = localStorage.getItem('token');
  if (token && config.headers) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

export default api;
