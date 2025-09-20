import { render, screen } from '@testing-library/react';
import IconButton from '../components/IconButton';

describe('IconButton', () => {
  it('renders icon button', () => {
    render(<IconButton aria-label="icon" />);
    expect(screen.getByLabelText('icon')).toBeInTheDocument();
  });
});
