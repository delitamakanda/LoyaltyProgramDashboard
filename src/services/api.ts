import axios from 'axios';

const api = axios.create({
    baseURL: 'https://api.example.com/v1',
    headers: {
        'Authorization': 'Bearer YOUR_API_TOKEN',
        'Content-Type': 'application/json',
    },
});

api.interceptors.request.use(config => {
    return config;
});

export default api;