
import AxiosHttpClient from '@/api/axiosHttpClient';
import type { AuthState } from '@/store';

export const loginService = async (adhesion: string, password: string): Promise<AuthState> => {

  const httpClient = new AxiosHttpClient();
  const route = '/auth/login';
  const authDatas = {
    adhesionNumber: adhesion,
    password: password
  };

  const response: AuthState = await httpClient.post(route, authDatas)
  return response
}
