import { render } from '@testing-library/react';
import Icon from '../components/Icon';

describe('Icon', () => {
  it('renders icon', () => {
    render(<Icon>star</Icon>);
    // Icon is present in the DOM
  });
});
