import { render, screen } from '@testing-library/react';
import ButtonGroup from '../components/ButtonGroup';
import Button from '../components/Button';

describe('ButtonGroup', () => {
  it('renders button group', () => {
    render(
      <ButtonGroup>
        <Button>One</Button>
        <Button>Two</Button>
      </ButtonGroup>
    );
    expect(screen.getByText('One')).toBeInTheDocument();
    expect(screen.getByText('Two')).toBeInTheDocument();
  });
});
