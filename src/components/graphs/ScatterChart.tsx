import React from 'react';
import { ScatterChart, Scatter, CartesianGrid, XAxis, YAxis, Tooltip, Legend, ResponsiveContainer } from 'recharts';

export interface ScatterChartProps {
  data: any[];
  xKey: string;
  yKey: string;
  color?: string;
  height?: number;
}

const ScatterChartComponent: React.FC<ScatterChartProps> = ({ data, xKey, yKey, color = '#1976d2', height = 300 }) => (
  <ResponsiveContainer width="100%" height={height}>
    <ScatterChart>
      <CartesianGrid />
      <XAxis dataKey={xKey} />
      <YAxis dataKey={yKey} />
      <Tooltip />
      <Legend />
      <Scatter data={data} fill={color} />
    </ScatterChart>
  </ResponsiveContainer>
);

export default ScatterChartComponent;
