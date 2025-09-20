import React from 'react';
import Select from '../src/components/Select';
import MenuItem from '@mui/material/MenuItem';

export default {
  title: 'MUI/Select',
  component: Select,
  tags: ['autodocs'],
};

export const Default = () => (
  <Select defaultValue="1" label="Select">
    <MenuItem value="1">One</MenuItem>
    <MenuItem value="2">Two</MenuItem>
    <MenuItem value="3">Three</MenuItem>
  </Select>
);
