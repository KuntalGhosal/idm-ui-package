import { render, screen } from '@testing-library/react';
import Select from '../components/Select';
import MenuItem from '@mui/material/MenuItem';

describe('Select', () => {
  it('renders select', () => {
    render(
      <Select defaultValue="1" label="Select">
        <MenuItem value="1">One</MenuItem>
        <MenuItem value="2">Two</MenuItem>
      </Select>
    );
    expect(screen.getByRole('combobox')).toBeInTheDocument();
  });
});
