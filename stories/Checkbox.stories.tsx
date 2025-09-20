import type { Meta, StoryObj } from '@storybook/react';
import Checkbox from '../src/components/Checkbox';

/**
 * Checkbox component wraps MUI Checkbox. Supports all MUI Checkbox props.
 *
 * **Props:**
 * - All MUI Checkbox props
 *
 * **Usage:**
 * ```tsx
 * <Checkbox color="primary" />
 * ```
 */
const meta: Meta<typeof Checkbox> = {
  title: 'Inputs/Checkbox',
  component: Checkbox,
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: 'Material-UI Checkbox wrapper. Supports all MUI Checkbox props.'
      }
    }
  }
};
export default meta;

type Story = StoryObj<typeof Checkbox>;

export const Default: Story = {
  args: {
    color: 'primary',
  },
};
