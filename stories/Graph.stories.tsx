/**
 * Graph component wraps Recharts LineChart. Supports all Recharts LineChart props.
 *
 * **Props:**
 * - `data`: Array<Record<string, any>>
 * - `xKey`: string
 * - `lineKey`: string
 * - `lineColor`: string
 *
 * **Usage:**
 * ```tsx
 * <Graph data={data} xKey="name" lineKey="value" />
 * ```
 */
import type { Meta, StoryObj } from '@storybook/react';
import Graph from '../src/components/Graph';

const meta: Meta<typeof Graph> = {
  title: 'Charts/Graph',
  component: Graph,
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: 'Recharts LineChart wrapper. Supports all Recharts LineChart props.',
      },
    },
  },
};
export default meta;

type Story = StoryObj<typeof Graph>;

const data = [
  { name: 'Jan', value: 30 },
  { name: 'Feb', value: 50 },
];

export const Default: Story = {
  args: {
    data,
    xKey: 'name',
    lineKey: 'value',
    lineColor: '#1976d2',
  },
};
