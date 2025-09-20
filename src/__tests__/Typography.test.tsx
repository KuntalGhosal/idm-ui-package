import { render, screen } from '@testing-library/react';
import Typography from '../components/Typography';

describe('Typography', () => {
  it('renders typography', () => {
    render(<Typography variant="h6">Title</Typography>);
    expect(screen.getByText('Title')).toBeInTheDocument();
  });
});
