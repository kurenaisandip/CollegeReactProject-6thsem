import axios from 'axios';
import useTokenStore from '@/store';
import { promise } from 'zod';

const api = axios.create({
    // todo: move this value to env variable.
    baseURL: 'http://localhost:5513',
    headers: {
        'Content-Type': 'application/json',
    },
});

api.interceptors.request.use((config) => {
    const token = useTokenStore.getState().token;
    if (token) {
        config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
});

export const login = async (data: { email: string; password: string }) =>
    api.post('/api/users/login', data);

export const register = async (data: { name: string; email: string; password: string }) =>
    api.post('/api/users/register', data);

export const getBooks = async () => api.get('/api/books');

export const createBook = async (data: FormData) =>
    api.post('/api/books', data, {
        headers: {
            'Content-Type': 'multipart/form-data',
        },
    });

//export const getProductById = async (productId: string) => api.get(`/api/books/${productId}`);


export const getUserById = (productId:string) => {
    const BASE_URL =  'http://localhost:5513/api/books';
    return new Promise((resolve, reject) => {
      axios.get(`${BASE_URL}/${productId}`)
          .then((res) => {
            resolve(res.data);
          }).catch((err) => {
            reject(err);
          })
    });
  }


  export const deleteProduct = (productId:string) => {
    const BASE_URL =  'http://localhost:5513/api/books';
    return new Promise((resolve, reject) => {
      axios.delete(`${BASE_URL}/${productId}`)
          .then(() => {
            resolve(true);
          }).catch((err) => {
            reject(err);
          })
    });
  }