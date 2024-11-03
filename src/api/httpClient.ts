export interface HttpClient {
  get<T>(url: string, params?: any): Promise<T>;
  post<T>(url: string, data: any): Promise<T>;
  put<T>(url: string, data: any): Promise<T>;
  patch<T>(url: string, data: any): Promise<T>;
  delete<T>(url: string): Promise<T>;
}
