import { getCookie, setCookie } from "./cookies";

export const getToken = (): string | null => {
  return getCookie('token');
};

export const setToken = (token: string): void => {
  setCookie('token', token);
};

export const removeToken = (): void => {
  setCookie('token', '', -1);
};
