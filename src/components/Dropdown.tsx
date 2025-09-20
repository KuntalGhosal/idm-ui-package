import React from 'react';
import Select, { SelectProps } from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import InputLabel from '@mui/material/InputLabel';
import FormControl from '@mui/material/FormControl';
import Checkbox from '@mui/material/Checkbox';
import ListItemText from '@mui/material/ListItemText';

export interface DropdownOption {
  label: string;
  value: string;
}

export interface DropdownProps extends Omit<SelectProps, 'onChange'> {
  label?: string;
  options: DropdownOption[];
  value: string | string[];
  multiple?: boolean;
  onChange: (value: string | string[]) => void;
  color?: 'primary' | 'secondary';
  sx?: object;
}

const Dropdown: React.FC<DropdownProps> = ({ label, options, value, multiple = false, onChange, ...props }) => {
  return (
  <FormControl fullWidth variant="outlined" margin="normal">
      {label && <InputLabel>{label}</InputLabel>}
      <Select
        label={label}
        value={value}
        multiple={multiple}
        variant="outlined"
        color={props.color}
        sx={props.sx}
        onChange={e => {
          const val = multiple ? (e.target.value as string[]) : (e.target.value as string);
          onChange(val);
        }}
        renderValue={selected =>
          multiple
            ? (selected as string[]).map(val => options.find(opt => opt.value === val)?.label).join(', ')
            : options.find(opt => opt.value === selected)?.label
        }
        {...props}
      >
        {options.map(opt => (
          <MenuItem key={opt.value} value={opt.value}>
            {multiple && <Checkbox checked={Array.isArray(value) ? value.includes(opt.value) : false} onClick={e => {
              e.stopPropagation();
              const arr = Array.isArray(value) ? [...value] : [];
              if (arr.includes(opt.value)) {
                onChange(arr.filter(v => v !== opt.value));
              } else {
                onChange([...arr, opt.value]);
              }
            }} />}
            <ListItemText primary={opt.label} />
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  );
};

export default Dropdown;
