/**
 * ButtonGroup component wraps MUI ButtonGroup. Supports all MUI ButtonGroup props.
 *
 * **Props:**
 * - `children`: React.ReactNode
 *
 * **Usage:**
 * ```tsx
 * <ButtonGroup>
 *   <Button>One</Button>
 *   <Button>Two</Button>
 * </ButtonGroup>
 * ```
 */
import type { Meta, StoryObj } from '@storybook/react';
import ButtonGroup from '../src/components/ButtonGroup';
import Button from '../src/components/Button';

const meta: Meta<typeof ButtonGroup> = {
  title: 'Inputs/ButtonGroup',
  component: ButtonGroup,
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: 'Material-UI ButtonGroup wrapper. Supports all MUI ButtonGroup props.'
      }
    }
  }
};
export default meta;

type Story = StoryObj<typeof ButtonGroup>;

export const Default: Story = {
  args: {
    children: <><Button>One</Button><Button>Two</Button></>,
  },
};
