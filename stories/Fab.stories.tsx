/**
 * Fab component wraps MUI Fab. Supports all MUI Fab props.
 *
 * **Props:**
 * - `color`: string
 * - `children`: React.ReactNode
 *
 * **Usage:**
 * ```tsx
 * <Fab color="primary">+</Fab>
 * ```
 */
import type { Meta, StoryObj } from '@storybook/react';
import Fab from '../src/components/Fab';

const meta: Meta<typeof Fab> = {
  title: 'Inputs/Fab',
  component: Fab,
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: 'Material-UI Fab wrapper. Supports all MUI Fab props.'
      }
    }
  }
};
export default meta;

type Story = StoryObj<typeof Fab>;

export const Default: Story = {
  args: {
    color: 'primary',
    children: '+',
  },
};
