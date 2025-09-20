/**
 * ScatterChart component wraps Recharts ScatterChart.
 *
 * **Props:**
 * - `data`: Array<{ x: number, y: number }>
 * - `xKey`: string
 * - `yKey`: string
 * - `color`: string
 * - `height`: number
 *
 * **Usage:**
 * ```tsx
 * <ScatterChart
 *   data={[{ x: 100, y: 200 }]}
 *   xKey="x"
 *   yKey="y"
 *   color="#ffd600"
 *   height={300}
 * />
 * ```
 */
import type { Meta, StoryObj } from '@storybook/react';
import { ScatterChart } from '../../src';

const meta: Meta<typeof ScatterChart> = {
  title: 'Graphs/ScatterChart',
  component: ScatterChart,
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: 'Recharts ScatterChart wrapper. Supports all props above.',
      },
    },
  },
};
export default meta;

type Story = StoryObj<typeof ScatterChart>;

const data = [
  { x: 100, y: 200 },
  { x: 120, y: 100 },
  { x: 170, y: 300 },
  { x: 140, y: 250 },
  { x: 150, y: 400 },
];

export const Default: Story = {
  args: {
    data,
    xKey: 'x',
    yKey: 'y',
    color: '#ffd600',
    height: 300,
  },
};
