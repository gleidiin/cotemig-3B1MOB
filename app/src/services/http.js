import axios from 'axios';
import { setupCache } from 'axios-cache-adapter';
import localforage from 'localforage';

const BASE_URL = "http://localhost:8080"

const forageStore = localforage.createInstance({
    driver: [
        localforage.INDEXEDDB,
        localforage.LOCALSTORAGE
    ],
    name: 'app-cache'
});
  
const cache = setupCache({
  maxAge: 1 * 60 * 1000,
  store: forageStore,
  invalidate: async (config, request) => {
    if (request.clearCacheEntry) {
        await config.store.removeItem(config.uuid)
    }
  }
});

const http = axios.create({
    baseURL: BASE_URL,
    adapter: cache.adapter
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