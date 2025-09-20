import { render } from '@testing-library/react';
import Divider from '../components/Divider';

describe('Divider', () => {
  it('renders divider', () => {
    render(<Divider />);
    // Divider is present in the DOM
  });
});
