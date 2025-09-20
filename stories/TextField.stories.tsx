/**
 * TextField component wraps MUI TextField. Supports all MUI TextField props.
 *
 * **Props:**
 * - `label`: string
 * - `variant`: 'outlined' | 'filled' | 'standard'
 *
 * **Usage:**
 * ```tsx
 * <TextField label="Text Field" variant="outlined" />
 * <TextField label="Text Field" variant="filled" />
 * <TextField label="Text Field" variant="standard" />
 * ```
 */
import type { Meta, StoryObj } from '@storybook/react';
import TextField from '../src/components/TextField';

const meta: Meta<typeof TextField> = {
  title: 'Inputs/TextField',
  component: TextField,
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: 'Material-UI TextField wrapper. Supports all MUI TextField props.'
      }
    }
  }
};
export default meta;

type Story = StoryObj<typeof TextField>;

export const Default: Story = {
  args: {
    label: 'Text Field',
    variant: 'outlined',
  },
};

export const Filled: Story = {
  args: {
    label: 'Text Field',
    variant: 'filled',
  },
};

export const Standard: Story = {
  args: {
    label: 'Text Field',
    variant: 'standard',
  },
};
