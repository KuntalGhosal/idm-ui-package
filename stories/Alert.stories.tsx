import type { Meta, StoryObj } from '@storybook/react';
import Alert from '../src/components/Alert';

/**
 * Alert component wraps MUI Alert. Supports all MUI Alert props.
 *
 * **Props:**
 * - `severity`: 'success' | 'error' | 'warning' | 'info'
 * - `children`: React.ReactNode
 *
 * **Usage:**
 * ```tsx
 * <Alert severity="success">This is a success alert!</Alert>
 * ```
 */
const meta: Meta<typeof Alert> = {
  title: 'Feedback/Alert',
  component: Alert,
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: 'Material-UI Alert wrapper. Supports all MUI Alert props.'
      }
    }
  }
};
export default meta;

type Story = StoryObj<typeof Alert>;

export const Success: Story = {
  args: {
    severity: 'success',
    children: 'This is a success alert!',
  },
};

export const Error: Story = {
  args: {
    severity: 'error',
    children: 'This is an error alert!',
  },
};

export const Warning: Story = {
  args: {
    severity: 'warning',
    children: 'This is a warning alert!',
  },
};

export const Info: Story = {
  args: {
    severity: 'info',
    children: 'This is an info alert!',
  },
};
