import React from 'react';
import { render } from '@testing-library/react';
import Toast, { showToast } from '../components/Toast';

describe('Toast', () => {
  it('renders ToastContainer with props', () => {
    const { container } = render(
      <Toast position="top-right" autoClose={2000} theme="dark" newestOnTop closeOnClick pauseOnHover draggable />
    );
    expect(container.querySelector('.Toastify')).toBeInTheDocument();
  });

  it('shows toast message with options', () => {
    expect(() => showToast('Test', { position: 'bottom-left', autoClose: 1000, theme: 'colored' })).not.toThrow();
  });
});
