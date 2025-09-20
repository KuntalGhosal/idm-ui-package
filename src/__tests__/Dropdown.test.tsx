import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import Dropdown from '../components/Dropdown';

describe('Dropdown', () => {
  const options = [
    { label: 'Option 1', value: '1' },
    { label: 'Option 2', value: '2' },
    { label: 'Option 3', value: '3' },
  ];

  it('renders single select dropdown and handles selection', () => {
    const handleChange = jest.fn();
    render(<Dropdown label="Select" options={options} value="1" onChange={handleChange} />);
    fireEvent.mouseDown(screen.getByRole('combobox'));
    fireEvent.click(screen.getByText('Option 2'));
    expect(handleChange).toHaveBeenCalledWith('2');
  });

  it('renders multi select dropdown and handles selection', () => {
    const handleChange = jest.fn();
    render(<Dropdown label="Multi" options={options} value={['1']} multiple onChange={handleChange} />);
    fireEvent.mouseDown(screen.getByRole('combobox'));
    fireEvent.click(screen.getByText('Option 2'));
    expect(handleChange).toHaveBeenCalledWith(['1', '2']);
  });
});
