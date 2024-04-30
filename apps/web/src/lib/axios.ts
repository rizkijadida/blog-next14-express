import { appConfig } from '@/utils/config';
import axios, { AxiosInstance } from 'axios';

const { baseUrl } = appConfig;

export const axiosInsance: AxiosInstance = axios.create({
  baseURL: baseUrl,
});

axiosInsance.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem('token');

    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }

    return config;
  },
  (error) => {
    return Promise.reject(error);
  },
);
