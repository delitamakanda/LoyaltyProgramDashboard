import axios from 'axios';

const baseURL = import.meta.env.VITE_API_URL || '';
const token = localStorage.getItem('token') || '';

if (!import.meta.env.VITE_API_URL) {
    console.warn('VITE_API_URL environment variable is not set. Defaulting to relative URLs.');
}

const api = axios.create({
    baseURL,
    headers: {
        ...(token ? { 'Authorization': `Bearer ${token}` } : {}),
        'Content-Type': 'application/json',
    },
});

api.interceptors.request.use(config => {
    return config;
});
export default api;
