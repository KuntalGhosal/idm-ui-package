import { render, screen } from '@testing-library/react';
import Checkbox from '../components/Checkbox';

describe('Checkbox', () => {
  it('renders checkbox', () => {
    render(<Checkbox inputProps={{ 'aria-label': 'Check' }} />);
    expect(screen.getByLabelText('Check')).toBeInTheDocument();
  });
});
