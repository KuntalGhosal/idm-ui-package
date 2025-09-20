/**
 * Rating component wraps MUI Rating. Supports all MUI Rating props.
 *
 * **Props:**
 * - `value`: number
 * - `readOnly`: boolean
 *
 * **Usage:**
 * ```tsx
 * <Rating value={2} readOnly />
 * ```
 */
import type { Meta, StoryObj } from '@storybook/react';
import Rating from '../src/components/Rating';

const meta: Meta<typeof Rating> = {
  title: 'Inputs/Rating',
  component: Rating,
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: 'Material-UI Rating wrapper. Supports all MUI Rating props.'
      }
    }
  }
};
export default meta;

type Story = StoryObj<typeof Rating>;

export const Default: Story = {
  args: {
    value: 2,
    readOnly: true,
  },
};
