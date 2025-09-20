/**
 * Divider component wraps MUI Divider. Supports all MUI Divider props.
 *
 * **Props:**
 * - All MUI Divider props
 *
 * **Usage:**
 * ```tsx
 * <Divider />
 * ```
 */
import type { Meta, StoryObj } from '@storybook/react';
import Divider from '../src/components/Divider';

const meta: Meta<typeof Divider> = {
  title: 'Data Display/Divider',
  component: Divider,
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: 'Material-UI Divider wrapper. Supports all MUI Divider props.'
      }
    }
  }
};
export default meta;

type Story = StoryObj<typeof Divider>;

export const Default: Story = {
  args: {},
};
