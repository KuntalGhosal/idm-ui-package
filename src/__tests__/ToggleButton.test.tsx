import { render, screen } from '@testing-library/react';
import ToggleButton from '../components/ToggleButton';

describe('ToggleButton', () => {
  it('renders toggle button', () => {
    render(<ToggleButton value="check" selected>Toggle</ToggleButton>);
    expect(screen.getByText('Toggle')).toBeInTheDocument();
  });
});
