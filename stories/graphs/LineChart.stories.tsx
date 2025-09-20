/**
 * LineChart component wraps Recharts LineChart.
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
 * <LineChart
 *   data={[{ name: 'Jan', value: 400 }]}
 *   xKey="name"
 *   yKey="value"
 *   color="#1976d2"
 *   height={300}
 * />
 * ```
 */
import type { Meta, StoryObj } from '@storybook/react';
import { LineChart } from '../../src';

const meta: Meta<typeof LineChart> = {
  title: 'Graphs/LineChart',
  component: LineChart,
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: 'Recharts LineChart wrapper. Supports all props above.',
      },
    },
  },
};
export default meta;

type Story = StoryObj<typeof LineChart>;

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
    color: '#1976d2',
    height: 300,
  },
};
