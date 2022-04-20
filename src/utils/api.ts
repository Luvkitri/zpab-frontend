import axios, { AxiosRequestConfig } from 'axios';

const API_URL = import.meta.env.VITE_API_URL as string;

const axiosInstance = axios.create({
  baseURL: API_URL,
  headers: {
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Methods': 'GET,PUT,POST,DELETE,PATCH,OPTIONS',
    'Access-Control-Allow-Credentials': true,
  },
});

axiosInstance.interceptors.request.use(
  (config: AxiosRequestConfig<any>) => {
    let token = localStorage.getItem('Authorization');
    if (token) {
      if (config.headers !== undefined) {
        config.headers['Authorization'] = `Bearer ${token}`;
      } else {
        return Promise.reject('config.headers is undefined');
      }
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  },
);

export default axiosInstance;
