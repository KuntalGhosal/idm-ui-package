/**
 * BarChart component wraps Recharts BarChart.
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
 * <BarChart
 *   data={[{ name: 'Jan', value: 400 }]}
 *   xKey="name"
 *   yKey="value"
 *   color="#e57373"
 *   height={300}
 * />
 * ```
 */
import type { Meta, StoryObj } from '@storybook/react';
import { BarChart } from '../../src';

const meta: Meta<typeof BarChart> = {
  title: 'Graphs/BarChart',
  component: BarChart,
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: 'Recharts BarChart wrapper. Supports all props above.',
      },
    },
  },
};
export default meta;

type Story = StoryObj<typeof BarChart>;

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
    color: '#e57373',
    height: 300,
  },
};
