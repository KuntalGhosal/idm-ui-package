/**
 * Autocomplete component wraps MUI Autocomplete. Supports all MUI Autocomplete props.
 *
 * **Props:**
 * - `options`: string[]
 * - `renderInput`: (params) => React.ReactNode
 *
 * **Usage:**
 * ```tsx
 * <Autocomplete options={['A', 'B']} renderInput={params => <TextField {...params} label="Test" />} />
 * ```
 */
import React from 'react';
import Autocomplete from '../src/components/Autocomplete';
import TextField from '../src/components/TextField';
import type { Meta, StoryObj } from '@storybook/react';

const meta: Meta<typeof Autocomplete> = {
  title: 'MUI/Autocomplete',
  component: Autocomplete,
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: 'Material-UI Autocomplete wrapper. Supports all MUI Autocomplete props.',
      },
    },
  },
};
export default meta;

type Story = StoryObj<typeof Autocomplete>;

const options = ['Option 1', 'Option 2', 'Option 3'];

export const Default: Story = {
  args: {
    options,
    renderInput: (params: any) => <TextField {...params} label="Autocomplete" />,
  },
};
