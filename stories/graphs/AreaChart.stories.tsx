/**
 * AreaChart component wraps Recharts AreaChart.
 *
 * **Props:**
 * - `data`: Array<{ name: string, value: number }>
 * - `xKey`: string
 * - `yKey`: string
 * - `color`: string
 * - `height`: number
 *
 * **Usage:**
 * ```tsx
 * <AreaChart
 *   data={[{ name: 'Jan', value: 400 }]}
 *   xKey="name"
 *   yKey="value"
 *   color="#81c784"
 *   height={300}
 * />
 * ```
 */
import type { Meta, StoryObj } from '@storybook/react';
import { AreaChart } from '../../src';

const meta: Meta<typeof AreaChart> = {
  title: 'Graphs/AreaChart',
  component: AreaChart,
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: 'Recharts AreaChart wrapper. Supports all props above.',
      },
    },
  },
};
export default meta;

type Story = StoryObj<typeof AreaChart>;

const data = [
  { name: 'Jan', value: 400 },
  { name: 'Feb', value: 300 },
  { name: 'Mar', value: 200 },
  { name: 'Apr', value: 278 },
  { name: 'May', value: 189 },
];

export const Default: Story = {
  args: {
    data,
    xKey: 'name',
    yKey: 'value',
    color: '#81c784',
    height: 300,
  },
};
