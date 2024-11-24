import AxiosHttpClient from "@/api/axiosHttpClient";
import { showErrorToast } from "@/utils";
import axios from "axios";

export async function authorizedRequest<T>(url: string, method: 'get' | 'post' | 'put' | 'delete', data?: any): Promise<T | null> {
  const httpClient = new AxiosHttpClient();
  const token = localStorage.getItem('token');

  if (!token) {
    showErrorToast('No token found. Please log in.');
    return null;
  }

  httpClient.setAuthorizationToken(token);

  try {
    let response;
    switch (method) {
      case 'get':
        response = await httpClient.get<T>(url, data);
        break;
      case 'post':
        response = await httpClient.post<T>(url, data);
        break;
      case 'put':
        response = await httpClient.put<T>(url, data);
        break;
      case 'delete':
        response = await httpClient.delete<T>(url);
        break;
      default:
        throw new Error('Unsupported method');
    }
    return response;
  } catch (error) {
    if (axios.isAxiosError(error)) {
      const status = error.response?.status;
      if (status === 401) {
        showErrorToast('Unauthorized access - invalid token');
      } else {
        showErrorToast('Error occurred');
      }
    } else {
      console.error('Unexpected error:', error);
    }
    return null;
  }
}