import axios, { AxiosInstance, InternalAxiosRequestConfig } from 'axios';
import { TransportsApi } from './transports.api';
import { endpoints } from '@app/constants/endpoints';
import { useAuthStore } from '@app/zustores';
import { AuthApi } from '@app/api/auth.api';
import { apiUrl } from '@app/config';

class ApiService {
  private instance: AxiosInstance;
  private endpoints = endpoints;
  transports: TransportsApi;
  auth: AuthApi;

  constructor() {
    this.instance = axios.create({
      baseURL: apiUrl,
      headers: {
        'Content-Type': 'application/json',
      },
    });
    this.transports = new TransportsApi(this.instance, this.endpoints);
    this.auth = new AuthApi(this.instance, this.endpoints);

    this.instance.interceptors.request.use(this.requestInterceptor);
  }

  requestInterceptor(config: InternalAxiosRequestConfig) {
    const auth = useAuthStore.getState();

    if (auth.token) {
      config.headers.Authorization = 'Bearer ' + auth.token;
    }
    return config;
  }
}

export const api = new ApiService();
