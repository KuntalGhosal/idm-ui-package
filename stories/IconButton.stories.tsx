/**
 * IconButton component wraps MUI IconButton. Supports all MUI IconButton props.
 *
 * **Props:**
 * - `aria-label`: string
 * - `children`: React.ReactNode
 *
 * **Usage:**
 * ```tsx
 * <IconButton aria-label="icon"><Icons.Search /></IconButton>
 * ```
 */
import type { Meta, StoryObj } from '@storybook/react';
import IconButton from '../src/components/IconButton';
import { Icons } from '../src';

const meta: Meta<typeof IconButton> = {
  title: 'Inputs/IconButton',
  component: IconButton,
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: 'Material-UI IconButton wrapper. Supports all MUI IconButton props.'
      }
    }
  }
};
export default meta;

type Story = StoryObj<typeof IconButton>;

export const Default: Story = {
  args: {
    'aria-label': 'icon',
    children: <Icons.Search />,
  },
};
