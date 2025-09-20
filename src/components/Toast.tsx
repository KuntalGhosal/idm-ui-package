import React from 'react';
import { ToastContainer, toast, ToastOptions, ToastContainerProps } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export const showToast = (message: string, options?: ToastOptions) => {
  toast(message, options);
};

export const showToastWithType = (message: string, type: 'success' | 'error' | 'info' | 'warning', options?: ToastOptions) => {
  toast[type](message, options);
};

const Toast: React.FC<ToastContainerProps> = (props) => <ToastContainer {...props} position={props.position || 'top-right'} />;
export default Toast;
