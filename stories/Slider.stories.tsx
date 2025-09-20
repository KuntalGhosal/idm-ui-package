/**
 * Slider component wraps MUI Slider. Supports all MUI Slider props.
 *
 * **Props:**
 * - `defaultValue`: number | number[]
 *
 * **Usage:**
 * ```tsx
 * <Slider defaultValue={30} />
 * <Slider defaultValue={[20, 40]} />
 * ```
 */
import type { Meta, StoryObj } from '@storybook/react';
import Slider from '../src/components/Slider';

const meta: Meta<typeof Slider> = {
  title: 'Inputs/Slider',
  component: Slider,
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: 'Material-UI Slider wrapper. Supports all MUI Slider props.'
      }
    }
  }
};
export default meta;

type Story = StoryObj<typeof Slider>;

export const Default: Story = {
  args: {
    defaultValue: 30,
  },
};

export const Range: Story = {
  args: {
    defaultValue: [20, 40],
  },
};
