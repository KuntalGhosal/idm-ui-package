import { render } from '@testing-library/react';
import TreemapChart from '../components/graphs/TreemapChart';

describe('TreemapChart', () => {
  it('renders without crashing', () => {
    render(
      <TreemapChart data={[{ name: 'A', size: 400 }]} dataKey="size" height={300} />
    );
  });
});
