/**
 * Switch component wraps MUI Switch. Supports all MUI Switch props.
 *
 * **Props:**
 * - `defaultChecked`: boolean
 * - `inputProps`: object
 *
 * **Usage:**
 * ```tsx
 * <Switch defaultChecked inputProps={{ 'aria-label': 'Switch' }} />
 * ```
 */
import type { Meta, StoryObj } from '@storybook/react';
import Switch from '../src/components/Switch';

const meta: Meta<typeof Switch> = {
  title: 'Inputs/Switch',
  component: Switch,
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: 'Material-UI Switch wrapper. Supports all MUI Switch props.'
      }
    }
  }
};
export default meta;

type Story = StoryObj<typeof Switch>;

export const Default: Story = {
  args: {
    defaultChecked: true,
    inputProps: { 'aria-label': 'Switch' },
  },
};
