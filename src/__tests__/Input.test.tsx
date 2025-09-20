import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import Input from '../components/Input';

describe('Input', () => {
  it('renders input with icon', () => {
    render(<Input icon="Search" label="Search" />);
    expect(screen.getByLabelText('Search')).toBeInTheDocument();
  });

  it('calls onIconClick', () => {
    const onIconClick = jest.fn();
    render(<Input icon="Visibility" label="Show" onIconClick={onIconClick} />);
    fireEvent.click(screen.getByRole('button'));
    expect(onIconClick).toHaveBeenCalled();
  });
});
