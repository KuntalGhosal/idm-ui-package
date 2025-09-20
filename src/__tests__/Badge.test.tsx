import { render, screen } from '@testing-library/react';
import Badge from '../components/Badge';

describe('Badge', () => {
  it('renders badge', () => {
    render(<Badge badgeContent={4}>Test</Badge>);
    expect(screen.getByText('Test')).toBeInTheDocument();
    expect(screen.getByText('4')).toBeInTheDocument();
  });
});
