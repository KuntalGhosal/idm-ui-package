import React from 'react';
import { render } from '@testing-library/react';
import Graph from '../components/Graph';

describe('Graph', () => {
  it('renders graph with data', () => {
    const data = [
      { name: 'Jan', value: 400 },
      { name: 'Feb', value: 300 },
    ];
  const { container } = render(<Graph data={data} xKey="name" lineKey="value" />);
  // Check for chart container presence
  expect(container.firstChild).toBeTruthy();
  });
});
