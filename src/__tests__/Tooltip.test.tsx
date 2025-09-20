import { render, screen } from '@testing-library/react';
import Tooltip from '../components/Tooltip';

describe('Tooltip', () => {
  it('renders tooltip', () => {
    render(<Tooltip title="Tip"><span>Hover me</span></Tooltip>);
    expect(screen.getByText('Hover me')).toBeInTheDocument();
  });
});
