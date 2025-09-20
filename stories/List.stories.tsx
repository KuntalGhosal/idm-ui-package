/**
 * List component wraps MUI List. Supports all MUI List props.
 *
 * **Props:**
 * - `children`: React.ReactNode
 *
 * **Usage:**
 * ```tsx
 * <List><li>Item</li></List>
 * ```
 */
import type { Meta, StoryObj } from '@storybook/react';
import List from '../src/components/List';

const meta: Meta<typeof List> = {
  title: 'Data Display/List',
  component: List,
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: 'Material-UI List wrapper. Supports all MUI List props.'
      }
    }
  }
};
export default meta;

type Story = StoryObj<typeof List>;

export const Default: Story = {
  args: {
    children: <li>Item</li>,
  },
};
