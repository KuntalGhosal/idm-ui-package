/**
 * PieChart component wraps Recharts PieChart.
 *
 * **Props:**
 * - `data`: Array<{ name: string, value: number }>
 * - `dataKey`: string
 * - `nameKey`: string
 * - `colors`: string[]
 * - `height`: number
 *
 * **Usage:**
 * ```tsx
 * <PieChart
 *   data={[{ name: 'Group A', value: 400 }]}
 *   dataKey="value"
 *   nameKey="name"
 *   colors={["#1976d2", "#e57373"]}
 *   height={300}
 * />
 * ```
 */
import type { Meta, StoryObj } from '@storybook/react';
import { PieChart } from '../../src';

const meta: Meta<typeof PieChart> = {
  title: 'Graphs/PieChart',
  component: PieChart,
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: 'Recharts PieChart wrapper. Supports all props above.',
      },
    },
  },
};
export default meta;

type Story = StoryObj<typeof PieChart>;

const data = [
  { name: 'Group A', value: 400 },
  { name: 'Group B', value: 300 },
  { name: 'Group C', value: 300 },
  { name: 'Group D', value: 200 },
];

export const Default: Story = {
  args: {
    data,
    dataKey: 'value',
    nameKey: 'name',
    colors: ['#1976d2', '#e57373', '#81c784', '#ffd600'],
    height: 300,
  },
};
