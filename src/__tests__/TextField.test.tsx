import { render, screen } from '@testing-library/react';
import TextField from '../components/TextField';

describe('TextField', () => {
  it('renders text field', () => {
    render(<TextField label="Text Field" />);
    expect(screen.getByLabelText('Text Field')).toBeInTheDocument();
  });
});
