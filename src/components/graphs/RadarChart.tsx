import React from 'react';
import { RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, Radar, Tooltip, Legend, ResponsiveContainer } from 'recharts';

export interface RadarChartProps {
  data: any[];
  dataKey: string;
  nameKey: string;
  color?: string;
  height?: number;
}

const RadarChartComponent: React.FC<RadarChartProps> = ({ data, dataKey, nameKey, color = '#1976d2', height = 300 }) => (
  <ResponsiveContainer width="100%" height={height}>
    <RadarChart data={data}>
      <PolarGrid />
      <PolarAngleAxis dataKey={nameKey} />
      <PolarRadiusAxis />
      <Radar dataKey={dataKey} stroke={color} fill={color} fillOpacity={0.6} />
      <Tooltip />
      <Legend />
    </RadarChart>
  </ResponsiveContainer>
);

export default RadarChartComponent;
