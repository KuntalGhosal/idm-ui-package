/**
 * Badge component wraps MUI Badge. Supports all MUI Badge props.
 *
 * **Props:**
 * - `badgeContent`: number | string
 * - `color`: string
 *
 * **Usage:**
 * ```tsx
 * <Badge badgeContent={4} color="primary">Test</Badge>
 * ```
 */
import type { Meta, StoryObj } from '@storybook/react';
import Badge from '../src/components/Badge';

const meta: Meta<typeof Badge> = {
  title: 'Data Display/Badge',
  component: Badge,
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: 'Material-UI Badge wrapper. Supports all MUI Badge props.'
      }
    }
  }
};
export default meta;

type Story = StoryObj<typeof Badge>;

export const Default: Story = {
  args: {
    badgeContent: 4,
    color: 'primary',
    children: 'Test',
  },
};
