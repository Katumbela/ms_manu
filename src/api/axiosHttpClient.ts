/* eslint-disable @typescript-eslint/no-explicit-any */


import axios, { AxiosInstance, AxiosRequestConfig } from 'axios';
import { HttpClient } from './httpClient';
import { env } from '@/infra';

class AxiosHttpClient implements HttpClient {
  private axiosInstance: AxiosInstance;

  constructor() {
    this.axiosInstance = axios.create({
      baseURL: env.apiUrl,
      // baseURL: env.localDb,
    });
  }

  setAuthorizationToken(token: string) {
    this.axiosInstance.defaults.headers.common['Authorization'] = `Bearer ${token}`;
  }

  // Método GET com headers opcionais
  async get<T>(url: string, params?: any, headers?: any): Promise<T> {
    try {
      const config: AxiosRequestConfig = { params };
      if (headers) {
        config.headers = headers;
      }
      const response = await this.axiosInstance.get<T>(url, config);
      return response.data;
    } catch (error) {
      this.handleError(error);
      throw new Error('Failed to fetch data');
    }
  }

  // Método POST com headers opcionais
  async post<T>(url: string, data: any, options?: { headers?: any }): Promise<T> {
    try {
      const config: AxiosRequestConfig = {};
      if (options?.headers) {
        config.headers = options.headers;
      }
      const response = await this.axiosInstance.post<T>(url, data, config);

      if (response.status >= 200 && response.status < 300) {
        return response.data;
      } else {
        console.log(response);
        return response as unknown as T;
      }
    } catch (error) {
      this.handleError(error);
      throw new Error('Failed to post data');
    }
  }

  // Método PUT com headers opcionais
  async put<T>(url: string, data?: any, headers?: any): Promise<T> {
    try {
      const config: AxiosRequestConfig = {};
      if (headers) {
        config.headers = headers;
      }
      const response = await this.axiosInstance.put<T>(url, data, config);
      return response.data;
    } catch (error) {
      this.handleError(error);
      throw new Error('Failed to update data');
    }
  }

  // Método PATCH com headers opcionais
  async patch<T>(url: string, data?: any, headers?: any): Promise<T> {
    try {
      const config: AxiosRequestConfig = {};
      if (headers) {
        config.headers = headers;
      }
      const response = await this.axiosInstance.patch<T>(url, data, config);
      return response.data;
    } catch (error) {
      this.handleError(error);
      throw new Error('Failed to update data');
    }
  }

  async delete<T>(url: string, headers?: any): Promise<T> {
    try {
      const config: AxiosRequestConfig = {};
      if (headers) {
        config.headers = headers;
      }
      const response = await this.axiosInstance.delete<T>(url, config);
      return response.data;
    } catch (error) {
      this.handleError(error);
      throw new Error('Failed to delete data');
    }
  }

  private handleError(error: any) {
    if (axios.isAxiosError(error)) {
      const status = error.response?.status;
      const message = error.response?.data?.message || error.message;
      switch (status) {
        case 401:
          console.error('Unauthorized access:', message);
          break;
        case 422:
          console.error('Validation error:', message);
          break;
        case 500:
          console.error('Server error:', message);
          break;
        default:
          console.error('An error occurred:', message);
      }
    } else {
      console.error('Unexpected error:', error);
    }
  }
}

export default AxiosHttpClient;
