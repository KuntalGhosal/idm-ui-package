/**
 * TreemapChart component wraps Recharts TreemapChart.
 *
 * **Props:**
 * - `data`: Array<{ name: string, size: number }>
 * - `dataKey`: string
 * - `height`: number
 *
 * **Usage:**
 * ```tsx
 * <TreemapChart
 *   data={[{ name: 'A', size: 400 }]}
 *   dataKey="size"
 *   height={300}
 * />
 * ```
 * Tooltip is automatically included inside the chart.
 */
import type { Meta, StoryObj } from '@storybook/react';
import { TreemapChart } from '../../src';

const meta: Meta<typeof TreemapChart> = {
  title: 'Graphs/TreemapChart',
  component: TreemapChart,
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: 'Recharts TreemapChart wrapper. Supports all props above. Tooltip is included.',
      },
    },
  },
};
export default meta;

type Story = StoryObj<typeof TreemapChart>;

const data = [
  { name: 'A', size: 400 },
  { name: 'B', size: 300 },
  { name: 'C', size: 300 },
  { name: 'D', size: 200 },
];

export const Default: Story = {
  args: {
    data,
    dataKey: 'size',
    height: 300,
  },
};
