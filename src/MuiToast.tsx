import React from 'react';
import { ToastContainer, toast, ToastOptions } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export const showToast = (message: string, options?: ToastOptions) => {
  toast(message, options);
};

const Toast: React.FC = () => <ToastContainer />;
export default Toast;
