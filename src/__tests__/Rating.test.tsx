import { render, screen } from '@testing-library/react';
import Rating from '../components/Rating';

describe('Rating', () => {
  it('renders rating', () => {
    render(<Rating value={2} readOnly />);
    expect(screen.getByRole('img')).toBeInTheDocument();
  });
});
