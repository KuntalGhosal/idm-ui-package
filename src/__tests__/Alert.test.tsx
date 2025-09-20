import { render, screen } from '@testing-library/react';
import Alert from '../components/Alert';

describe('Alert', () => {
  it('renders alert', () => {
    render(<Alert severity="info">Info Alert</Alert>);
    expect(screen.getByText('Info Alert')).toBeInTheDocument();
  });
});
