import React from 'react';
import InputAdornment from '@mui/material/InputAdornment';
import TextField, { TextFieldProps } from '@mui/material/TextField';
import IconButton from '@mui/material/IconButton';
import * as MuiIcons from '@mui/icons-material';

export type InputProps = TextFieldProps & {
  icon?: keyof typeof MuiIcons;
  iconPosition?: 'start' | 'end';
  onIconClick?: () => void;
  color?: 'primary' | 'secondary';
  sx?: object;
};

const Input: React.FC<InputProps> = ({ icon, iconPosition = 'start', onIconClick, label, placeholder, type = 'text', ...props }) => {
  const IconComponent = icon ? MuiIcons[icon] : null;
  const adornment =
    IconComponent ? (
      <InputAdornment position={iconPosition}>
        {onIconClick ? (
          <IconButton onClick={onIconClick} size="small">
            <IconComponent />
          </IconButton>
        ) : (
          <IconComponent />
        )}
      </InputAdornment>
    ) : null;

  return (
    <TextField
      {...props}
      label={label}
      placeholder={placeholder}
      type={type}
      color={props.color}
      sx={props.sx}
      InputProps={{
        ...props.InputProps,
        [iconPosition === 'start' ? 'startAdornment' : 'endAdornment']: adornment,
      }}
    />
  );
};

export default Input;
