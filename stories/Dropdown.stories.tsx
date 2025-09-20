/**
 * Dropdown component wraps MUI Select. Supports single and multi-select.
 *
 * **Props:**
 * - `label`: string
 * - `options`: { label: string; value: string }[]
 * - `value`: string | string[]
 * - `multiple`: boolean
 * - `onChange`: (value: string | string[]) => void
 *
 * **Usage:**
 * ```tsx
 * <Dropdown label="Select" options={[{label: 'A', value: 'a'}]} value="a" onChange={handler} />
 * <Dropdown label="Multi" options={[{label: 'A', value: 'a'}]} value={["a"]} multiple onChange={handler} />
 * ```
 */
import type { Meta, StoryObj } from '@storybook/react';
import React from 'react';
import Dropdown from '../src/components/Dropdown';

const meta: Meta<typeof Dropdown> = {
  title: 'MUI/Dropdown',
  component: Dropdown,
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: 'Material-UI Select supporting single and multi-select.'
      }
    }
  }
};
export default meta;

type Story = StoryObj<typeof Dropdown>;

const options = [
  { label: 'One', value: '1' },
  { label: 'Two', value: '2' },
  { label: 'Three', value: '3' },
];

export const SingleSelect: Story = {
  render: (args) => {
    const [value, setValue] = React.useState(args.value);
    return <Dropdown {...args} value={value} onChange={setValue} />;
  },
  args: {
    label: 'Select',
    options,
    value: '1',
  },
};

export const Primary: Story = {
  args: {
    label: 'Primary',
    options,
    value: '1',
    onChange: () => {},
    color: 'primary',
    sx: { minWidth: 200 },
  },
};

export const Secondary: Story = {
  args: {
    label: 'Secondary',
    options,
    value: '2',
    onChange: () => {},
    color: 'secondary',
    sx: { minWidth: 200 },
  },
};

export const MultiSelect: Story = {
  render: (args) => {
    const [value, setValue] = React.useState(args.value);
    return <Dropdown {...args} value={value} onChange={setValue} />;
  },
  args: {
    label: 'Multi',
    options,
    value: ['1'],
    multiple: true,
  },
};

export const CustomCSS: Story = {
  args: {
    label: 'Styled Multi',
    options,
    value: ['1'],
    multiple: true,
    onChange: () => {},
    sx: { background: '#fce4ec', borderRadius: 10 },
  },
};
