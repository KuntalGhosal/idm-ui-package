import { render, screen } from '@testing-library/react';
import Radio from '../components/Radio';

describe('Radio', () => {
  it('renders radio', () => {
    render(<Radio value="radio" inputProps={{ 'aria-label': 'Radio' }} />);
    expect(screen.getByLabelText('Radio')).toBeInTheDocument();
  });
});
