import { render, screen } from '@testing-library/react';
import Avatar from '../components/Avatar';

describe('Avatar', () => {
  it('renders avatar', () => {
    render(<Avatar alt="A" src="/avatar.png" />);
    expect(screen.getByAltText('A')).toBeInTheDocument();
  });
});
