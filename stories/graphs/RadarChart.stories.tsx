/**
 * RadarChart component wraps Recharts RadarChart.
 *
 * **Props:**
 * - `data`: Array<{ subject: string, A: number, B: number }>
 * - `dataKey`: string
 * - `nameKey`: string
 * - `color`: string
 * - `height`: number
 *
 * **Usage:**
 * ```tsx
 * <RadarChart
 *   data={[{ subject: 'Math', A: 120, B: 110 }]}
 *   dataKey="A"
 *   nameKey="subject"
 *   color="#1976d2"
 *   height={300}
 * />
 * ```
 */
import type { Meta, StoryObj } from '@storybook/react';
import { RadarChart } from '../../src';

const meta: Meta<typeof RadarChart> = {
  title: 'Graphs/RadarChart',
  component: RadarChart,
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: 'Recharts RadarChart wrapper. Supports all props above.',
      },
    },
  },
};
export default meta;

type Story = StoryObj<typeof RadarChart>;

const data = [
  { subject: 'Math', A: 120, B: 110 },
  { subject: 'Chinese', A: 98, B: 130 },
  { subject: 'English', A: 86, B: 130 },
  { subject: 'Geography', A: 99, B: 100 },
  { subject: 'Physics', A: 85, B: 90 },
  { subject: 'History', A: 65, B: 85 },
];

export const Default: Story = {
  args: {
    data,
    dataKey: 'A',
    nameKey: 'subject',
    color: '#1976d2',
    height: 300,
  },
};
