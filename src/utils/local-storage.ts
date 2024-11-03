export const getLocalStorage = (key: string): string | null => {
  const value = localStorage.getItem(key);
  return value ? value : null;
};

export const setLocalStorage = (key: string, value: any): void => {
  localStorage.setItem(key, JSON.stringify(value));
};
