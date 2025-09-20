import React from 'react';
import { FunnelChart, Funnel, Tooltip, Legend, ResponsiveContainer, LabelList } from 'recharts';

export interface FunnelChartProps {
  data: any[];
  dataKey: string;
  nameKey: string;
  colors?: string[];
  height?: number;
}

const FunnelChartComponent: React.FC<FunnelChartProps> = ({ data, dataKey, nameKey, colors = ['#1976d2', '#e57373', '#81c784'], height = 300 }) => (
  <ResponsiveContainer width="100%" height={height}>
    <FunnelChart>
      <Tooltip />
      <Legend />
      <Funnel dataKey={dataKey} data={data} isAnimationActive>
        <LabelList position="right" dataKey={nameKey} />
        {data.map((entry, index) => (
          <LabelList key={`cell-${index}`} fill={colors[index % colors.length]} />
        ))}
      </Funnel>
    </FunnelChart>
  </ResponsiveContainer>
);

export default FunnelChartComponent;
