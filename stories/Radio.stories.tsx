/**
 * Radio component wraps MUI Radio. Supports all MUI Radio props.
 *
 * **Props:**
 * - `value`: string
 * - `inputProps`: object
 *
 * **Usage:**
 * ```tsx
 * <Radio value="radio" inputProps={{ 'aria-label': 'Radio' }} />
 * ```
 */
import type { Meta, StoryObj } from '@storybook/react';
import Radio from '../src/components/Radio';

const meta: Meta<typeof Radio> = {
  title: 'Inputs/Radio',
  component: Radio,
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: 'Material-UI Radio wrapper. Supports all MUI Radio props.'
      }
    }
  }
};
export default meta;

type Story = StoryObj<typeof Radio>;

export const Default: Story = {
  args: {
    value: 'radio',
    inputProps: { 'aria-label': 'Radio' },
  },
};
