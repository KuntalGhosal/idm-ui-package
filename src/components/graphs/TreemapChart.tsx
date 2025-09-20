import React from 'react';
import { Treemap, Tooltip, ResponsiveContainer } from 'recharts';

export interface TreemapChartProps {
  data: any[];
  dataKey: string;
  height?: number;
}

const TreemapChartComponent: React.FC<TreemapChartProps> = ({ data, dataKey, height = 300 }) => (
  <ResponsiveContainer width="100%" height={height}>
    <Treemap data={data} dataKey={dataKey} aspectRatio={4/3} stroke="#fff" fill="#1976d2">
      <Tooltip />
    </Treemap>
  </ResponsiveContainer>
);

export default TreemapChartComponent;
