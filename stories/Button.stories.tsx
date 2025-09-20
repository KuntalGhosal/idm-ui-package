import type { Meta, StoryObj } from '@storybook/react';
import Button from '../src/components/Button';

/**
 * Button component wraps MUI Button. Supports all MUI Button props.
 *
 * **Props:**
 * - `variant`: 'contained' | 'outlined' | 'text'
 * - `color`: 'primary' | 'secondary' | 'error' | 'info' | 'success' | 'warning'
 * - `sx`: custom styles
 *
 * **Usage:**
 * ```tsx
 * <Button variant="contained" color="primary">Click Me</Button>
 * ```
 */
const meta: Meta<typeof Button> = {
  title: 'Components/Button',
  component: Button,
  tags: ['autodocs'],
  argTypes: {
    children: { control: 'text' },
    variant: { control: 'select', options: ['contained', 'outlined', 'text'] },
    color: { control: 'select', options: ['primary', 'secondary', 'error', 'info', 'success', 'warning'] },
    sx: { control: 'object' },
  },
  parameters: {
    docs: {
      description: {
        component: 'Material-UI Button wrapper. Supports all MUI Button props.'
      }
    }
  }
};
export default meta;

type Story = StoryObj<typeof Button>;

export const Default: Story = {
  args: {
    children: 'Click Me',
    variant: 'contained',
    color: 'primary',
  },
};

export const Secondary: Story = {
  args: {
    children: 'Secondary',
    variant: 'contained',
    color: 'secondary',
  },
};

export const CustomCSS: Story = {
  args: {
    children: 'Custom CSS',
    variant: 'contained',
    color: 'primary',
    sx: { borderRadius: 20, background: '#1976d2' },
  },
};
