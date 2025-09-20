/**
 * Icon component wraps MUI Icon. Supports all MUI Icon props.
 *
 * **Props:**
 * - `children`: string (icon name)
 *
 * **Usage:**
 * ```tsx
 * <Icon>star</Icon>
 * ```
 */
import type { Meta, StoryObj } from '@storybook/react';
import Icon from '../src/components/Icon';

const meta: Meta<typeof Icon> = {
  title: 'Data Display/Icon',
  component: Icon,
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: 'Material-UI Icon wrapper. Supports all MUI Icon props.',
      },
    },
  },
};
export default meta;

type Story = StoryObj<typeof Icon>;

export const Default: Story = {
  args: {
    children: 'star',
  },
};
