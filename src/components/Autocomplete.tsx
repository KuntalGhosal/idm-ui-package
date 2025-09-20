import React from 'react';
import Autocomplete, { AutocompleteProps } from '@mui/material/Autocomplete';
import TextField from '@mui/material/TextField';

export type CustomAutocompleteProps = AutocompleteProps<any, any, any, any> & {
  label?: string;
  options: any[];
};

const CustomAutocomplete: React.FC<CustomAutocompleteProps> = ({ label, options, ...props }) => (
  <Autocomplete
    options={options}
    renderInput={params => <TextField {...params} label={label} />}
    {...props}
  />
);

export default CustomAutocomplete;
