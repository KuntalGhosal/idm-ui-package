/**
 * Chip component wraps MUI Chip. Supports all MUI Chip props.
 *
 * **Props:**
 * - `label`: string
 * - `color`: string
 *
 * **Usage:**
 * ```tsx
 * <Chip label="Chip" color="primary" />
 * ```
 */
import type { Meta, StoryObj } from '@storybook/react';
import Chip from '../src/components/Chip';

const meta: Meta<typeof Chip> = {
  title: 'Data Display/Chip',
  component: Chip,
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: 'Material-UI Chip wrapper. Supports all MUI Chip props.'
      }
    }
  }
};
export default meta;

type Story = StoryObj<typeof Chip>;

export const Default: Story = {
  args: {
    label: 'Chip',
    color: 'primary',
  },
};

export const Clickable: Story = {
  args: {
    label: 'Clickable',
    clickable: true,
    color: 'secondary',
  },
};
