import { toast, ToastOptions, type Id } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

// Opções padrão para as notificações
const defaultOptions: ToastOptions = {
  position: "top-right",
  autoClose: 5000,
  hideProgressBar: false,
  closeOnClick: true,
  pauseOnHover: true,
  draggable: true,
  progress: undefined,
};

// Função para exibir notificações de sucesso
export const showSuccessToast = (message: string, options?: ToastOptions) => {
  toast.success(message, { ...defaultOptions, ...options });
};

// Função para exibir notificações de erro
export const showErrorToast = (message: string, options?: ToastOptions) => {
  toast.error(message, { ...defaultOptions, ...options });
};

// Função para exibir notificações informativas
export const showInfoToast = (message: string, options?: ToastOptions) => {
  toast.info(message, { ...defaultOptions, ...options });
};

// Função para exibir notificações de aviso
export const showWarningToast = (message: string, options?: ToastOptions) => {
  toast.warning(message, { ...defaultOptions, ...options });
};

// Função genérica para exibir notificações customizadas
export const showCustomToast = (message: string, options?: ToastOptions) => {
  toast(message, { ...defaultOptions, ...options });
};


// Função para exibir um loading toast
export const showLoadingToast = (message: string, options?: ToastOptions): Id => {
  return toast.loading(message, { ...defaultOptions, ...options, autoClose: false });
};

// Função para atualizar o loading toast
export const updateLoadingToast = (toastId: Id, message: string, type: "success" | "error" | "info" | "warning", options?: ToastOptions) => {
  toast.update(toastId, {
    render: message,
    type: type,
    isLoading: false,
    autoClose: options?.autoClose ?? 5000,
    ...options
  });
};