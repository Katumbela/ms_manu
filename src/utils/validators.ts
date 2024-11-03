export const isValidEmail = (email: string): boolean => {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
};

export const isValidPassword = (password: string): boolean => {
    return password.length >= 6;  
};

export const isPositiveNumber = (value: any): boolean => {
    return parseInt(value) > 0;
};
