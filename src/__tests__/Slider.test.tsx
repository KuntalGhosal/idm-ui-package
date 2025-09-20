import { render, screen } from '@testing-library/react';
import Slider from '../components/Slider';

describe('Slider', () => {
  it('renders slider', () => {
    render(<Slider defaultValue={30} aria-label="Slider" />);
    expect(screen.getByLabelText('Slider')).toBeInTheDocument();
  });
});
