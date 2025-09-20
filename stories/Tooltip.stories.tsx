/**
 * Tooltip component wraps MUI Tooltip. Supports all MUI Tooltip props.
 *
 * **Props:**
 * - `title`: string
 * - `children`: React.ReactNode
 *
 * **Usage:**
 * ```tsx
 * <Tooltip title="Tip"><span>Hover me</span></Tooltip>
 * ```
 */
import type { Meta, StoryObj } from '@storybook/react';
import Tooltip from '../src/components/Tooltip';

const meta: Meta<typeof Tooltip> = {
  title: 'Feedback/Tooltip',
  component: Tooltip,
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: 'Material-UI Tooltip wrapper. Supports all MUI Tooltip props.',
      },
    },
  },
};
export default meta;

type Story = StoryObj<typeof Tooltip>;

export const Default: Story = {
  args: {
    title: 'Tip',
    children: <span>Hover me</span>,
  },
};
