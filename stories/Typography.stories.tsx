/**
 * Typography component wraps MUI Typography. Supports all MUI Typography props.
 *
 * **Props:**
 * - `variant`: string
 * - `children`: React.ReactNode
 *
 * **Usage:**
 * ```tsx
 * <Typography variant="h6">Title</Typography>
 * ```
 */
import type { Meta, StoryObj } from '@storybook/react';
import Typography from '../src/components/Typography';

const meta: Meta<typeof Typography> = {
  title: 'Data Display/Typography',
  component: Typography,
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: 'Material-UI Typography wrapper. Supports all MUI Typography props.'
      }
    }
  }
};
export default meta;

type Story = StoryObj<typeof Typography>;

export const Default: Story = {
  args: {
    variant: 'h6',
    children: 'Title',
  },
};
