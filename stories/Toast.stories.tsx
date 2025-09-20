import type { Meta, StoryObj } from '@storybook/react';
import Toast, { showToast, showToastWithType } from '../src/components/Toast';

const meta: Meta<typeof Toast> = {
  title: 'Components/Toast',
  component: Toast,
  tags: ['autodocs'],
  argTypes: {
    position: {
      control: 'select',
      options: ['top-left', 'top-right', 'top-center', 'bottom-left', 'bottom-right', 'bottom-center'],
    },
    autoClose: { control: 'number' },
    theme: { control: 'select', options: ['light', 'dark', 'colored'] },
    newestOnTop: { control: 'boolean' },
    closeOnClick: { control: 'boolean' },
    pauseOnHover: { control: 'boolean' },
    draggable: { control: 'boolean' },
  },
};
export default meta;

type Story = StoryObj<typeof Toast>;

export const Default: Story = {
  render: (args) => (
    <>
      <button onClick={() => showToastWithType('Success Toast!', 'success', { ...args, position: args.position })}>Show Success</button>
      <button onClick={() => showToastWithType('Error Toast!', 'error', { ...args, position: args.position })}>Show Error</button>
      <button onClick={() => showToastWithType('Info Toast!', 'info', { ...args, position: args.position })}>Show Info</button>
      <button onClick={() => showToastWithType('Warning Toast!', 'warning', { ...args, position: args.position })}>Show Warning</button>
      <Toast {...args} />
    </>
  ),
  args: {
    position: 'top-right',
    autoClose: 3000,
    theme: 'light',
    newestOnTop: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
  },
};
