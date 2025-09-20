/**
 * ComposedChart component wraps Recharts ComposedChart.
 *
 * **Props:**
 * - `data`: Array<{ name: string, uv: number, pv: number, amt: number }>
 * - `xKey`: string
 * - `lineKey`: string
 * - `barKey`: string
 * - `areaKey`: string
 * - `color`: string
 * - `height`: number
 *
 * **Usage:**
 * ```tsx
 * <ComposedChart
 *   data={[{ name: 'Page A', uv: 400, pv: 240, amt: 240 }]}
 *   xKey="name"
 *   lineKey="uv"
 *   barKey="pv"
 *   areaKey="amt"
 *   color="#e57373"
 *   height={300}
 * />
 * ```
 */
import type { Meta, StoryObj } from '@storybook/react';
import { ComposedChart } from '../../src';

const meta: Meta<typeof ComposedChart> = {
  title: 'Graphs/ComposedChart',
  component: ComposedChart,
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: 'Recharts ComposedChart wrapper. Supports all props above.',
      },
    },
  },
};
export default meta;

type Story = StoryObj<typeof ComposedChart>;

const data = [
  { name: 'Page A', uv: 400, pv: 240, amt: 240 },
  { name: 'Page B', uv: 300, pv: 139, amt: 221 },
  { name: 'Page C', uv: 200, pv: 980, amt: 229 },
  { name: 'Page D', uv: 278, pv: 390, amt: 200 },
  { name: 'Page E', uv: 189, pv: 480, amt: 218 },
];

export const Default: Story = {
  args: {
    data,
    xKey: 'name',
    lineKey: 'uv',
    barKey: 'pv',
    areaKey: 'amt',
    color: '#e57373',
    height: 300,
  },
};
