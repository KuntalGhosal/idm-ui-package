import { render, screen } from '@testing-library/react';
import Fab from '../components/Fab';

describe('Fab', () => {
  it('renders fab', () => {
    render(<Fab aria-label="Add">+</Fab>);
    expect(screen.getByLabelText('Add')).toBeInTheDocument();
  });
});
