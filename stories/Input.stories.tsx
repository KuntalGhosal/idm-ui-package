import type { Meta, StoryObj } from '@storybook/react';
import Input from '../src/components/Input';
import { Icons } from '../src';

/**
 * Input component wraps MUI TextField. Supports all input types, label, placeholder, and icon.
 *
 * **Props:**
 * - `type`: string
 * - `label`: string
 * - `placeholder`: string
 * - `icon`: keyof typeof Icons
 * - `iconPosition`: 'start' | 'end'
 * - `onIconClick`: () => void
 *
 * **Usage:**
 * ```tsx
 * <Input label="Name" placeholder="Enter name" />
 * <Input type="password" label="Password" />
 * <Input icon="Search" label="Search" />
 * <Input icon="Visibility" iconPosition="end" onIconClick={handler} />
 * ```
 */
const meta: Meta<typeof Input> = {
  title: 'Components/Input',
  component: Input,
  tags: ['autodocs'],
  argTypes: {
    icon: { control: 'select', options: Object.keys(Icons) },
    iconPosition: { control: 'select', options: ['start', 'end'] },
    type: { control: 'select', options: ['text', 'password', 'email', 'number'] },
  },
  parameters: {
    docs: {
      description: {
        component: 'Material-UI TextField supporting all input types, label, placeholder, and icon.'
      }
    }
  }
};
export default meta;

type Story = StoryObj<typeof Input>;

export const Default: Story = {
  args: {
    label: 'Name',
    placeholder: 'Enter name',
    icon: 'Search',
    iconPosition: 'start',
    type: 'text',
  },
};

export const Primary: Story = {
  args: {
    label: 'Primary',
    placeholder: 'Type here',
    color: 'primary',
  },
};

export const Secondary: Story = {
  args: {
    label: 'Secondary',
    placeholder: 'Type here',
    color: 'secondary',
  },
};

export const CustomCSS: Story = {
  args: {
    label: 'Custom',
    placeholder: 'Styled input',
    color: 'primary',
    sx: { borderRadius: 10, background: '#e3f2fd' },
  },
};
