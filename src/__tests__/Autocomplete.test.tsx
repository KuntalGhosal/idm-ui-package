import { render, screen } from '@testing-library/react';
import Autocomplete from '../components/Autocomplete';
import TextField from '../components/TextField';

describe('Autocomplete', () => {
  it('renders options', () => {
    render(
      <Autocomplete options={['A', 'B']} renderInput={params => <TextField {...params} label="Test" />} />
    );
    expect(screen.getByLabelText('Test')).toBeInTheDocument();
  });
});
