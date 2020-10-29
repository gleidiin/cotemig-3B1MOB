import axios from 'axios';

const BASE_URL = "http://localhost:8080"

const http = axios.create({
    baseURL: BASE_URL
});

const pegaToken = () => {
    return localStorage.getItem('token');
}

http.interceptors.request.use(config => {
    const token = pegaToken();
    if(token) {
        config.headers['Authorization'] = `Bearer ${token}`
    }
    return config;
})

export default http;