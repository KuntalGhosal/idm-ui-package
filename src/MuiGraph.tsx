import React from 'react';
import { ResponsiveContainer, LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';

export interface GraphProps {
  data: Array<Record<string, any>>;
  xKey: string;
  lineKey: string;
  lineColor?: string;
}

const Graph: React.FC<GraphProps> = ({ data, xKey, lineKey, lineColor = '#8884d8' }) => (
  <ResponsiveContainer width="100%" height={300}>
    <LineChart data={data}>
      <CartesianGrid strokeDasharray="3 3" />
      <XAxis dataKey={xKey} />
      <YAxis />
      <Tooltip />
      <Legend />
      <Line type="monotone" dataKey={lineKey} stroke={lineColor} />
    </LineChart>
  </ResponsiveContainer>
);

export default Graph;
