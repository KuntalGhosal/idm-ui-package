import React from 'react';
import { ComposedChart, Line, Bar, Area, CartesianGrid, XAxis, YAxis, Tooltip, Legend, ResponsiveContainer } from 'recharts';

export interface ComposedChartProps {
  data: any[];
  xKey: string;
  lineKey?: string;
  barKey?: string;
  areaKey?: string;
  color?: string;
  height?: number;
}

const ComposedChartComponent: React.FC<ComposedChartProps> = ({ data, xKey, lineKey, barKey, areaKey, color = '#1976d2', height = 300 }) => (
  <ResponsiveContainer width="100%" height={height}>
    <ComposedChart data={data}>
      <CartesianGrid strokeDasharray="3 3" />
      <XAxis dataKey={xKey} />
      <YAxis />
      <Tooltip />
      <Legend />
      {lineKey && <Line type="monotone" dataKey={lineKey} stroke={color} />}
      {barKey && <Bar dataKey={barKey} fill={color} />}
      {areaKey && <Area type="monotone" dataKey={areaKey} stroke={color} fill={color} />}
    </ComposedChart>
  </ResponsiveContainer>
);

export default ComposedChartComponent;
