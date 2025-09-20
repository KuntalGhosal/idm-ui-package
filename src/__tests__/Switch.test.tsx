import { render, screen } from '@testing-library/react';
import Switch from '../components/Switch';

describe('Switch', () => {
  it('renders switch', () => {
    render(<Switch defaultChecked inputProps={{ 'aria-label': 'Switch' }} />);
    expect(screen.getByRole('switch')).toBeInTheDocument();
  });
});
