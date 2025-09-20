import { render, screen } from '@testing-library/react';
import Chip from '../components/Chip';

describe('Chip', () => {
  it('renders chip', () => {
    render(<Chip label="Chip" />);
    expect(screen.getByText('Chip')).toBeInTheDocument();
  });
});
