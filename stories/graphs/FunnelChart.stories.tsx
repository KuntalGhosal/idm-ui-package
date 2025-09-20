/**
 * FunnelChart component wraps Recharts FunnelChart.
 *
 * **Props:**
 * - `data`: Array<{ stage: string, value: number }>
 * - `dataKey`: string
 * - `nameKey`: string
 * - `colors`: string[]
 * - `height`: number
 *
 * **Usage:**
 * ```tsx
 * <FunnelChart
 *   data={[{ stage: 'Visit', value: 1000 }]}
 *   dataKey="value"
 *   nameKey="stage"
 *   colors={["#1976d2", "#e57373"]}
 *   height={300}
 * />
 * ```
 */
import type { Meta, StoryObj } from '@storybook/react';
import { FunnelChart } from '../../src';

const meta: Meta<typeof FunnelChart> = {
  title: 'Graphs/FunnelChart',
  component: FunnelChart,
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: 'Recharts FunnelChart wrapper. Supports all props above.',
      },
    },
  },
};
export default meta;

type Story = StoryObj<typeof FunnelChart>;

const data = [
  { stage: 'Visit', value: 1000 },
  { stage: 'Sign Up', value: 800 },
  { stage: 'Purchase', value: 600 },
  { stage: 'Retention', value: 400 },
];

export const Default: Story = {
  args: {
    data,
    dataKey: 'value',
    nameKey: 'stage',
    colors: ['#1976d2', '#e57373', '#81c784', '#ffd600'],
    height: 300,
  },
};
