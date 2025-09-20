import { render, screen } from '@testing-library/react';
import List from '../components/List';

describe('List', () => {
  it('renders list', () => {
    render(<List><li>Item</li></List>);
    expect(screen.getByText('Item')).toBeInTheDocument();
  });
});
