import React from 'react';
import MuiButton, { ButtonProps } from '@mui/material/Button';

export interface CustomButtonProps extends ButtonProps {
	color?: 'primary' | 'secondary';
	sx?: object;
}

const Button: React.FC<CustomButtonProps> = (props) => <MuiButton {...props} />;
export default Button;
