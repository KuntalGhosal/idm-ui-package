/**
 * ToggleButton component wraps MUI ToggleButton. Supports all MUI ToggleButton props.
 *
 * **Props:**
 * - `value`: string
 * - `selected`: boolean
 * - `children`: React.ReactNode
 *
 * **Usage:**
 * ```tsx
 * <ToggleButton value="check" selected>Toggle</ToggleButton>
 * ```
 */
import type { Meta, StoryObj } from '@storybook/react';
import ToggleButton from '../src/components/ToggleButton';

const meta: Meta<typeof ToggleButton> = {
  title: 'Inputs/ToggleButton',
  component: ToggleButton,
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: 'Material-UI ToggleButton wrapper. Supports all MUI ToggleButton props.',
      },
    },
  },
};
export default meta;

type Story = StoryObj<typeof ToggleButton>;

export const Default: Story = {
  args: {
    value: 'check',
    selected: true,
    children: 'Toggle',
  },
};
