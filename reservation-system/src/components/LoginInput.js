import React from 'react';
import { TextField } from '@mui/material';

const LoginInput = ({ label, type, value, onChange }) => {
  return (
    <TextField
      label={label}
      type={type}
      variant="outlined"
      fullWidth
      margin="normal"
      value={value}
      onChange={onChange}
      InputProps={{
        style: {
          fontFamily: 'Poppins, sans-serif',
        },
      }}
      InputLabelProps={{
        style: {
          fontFamily: 'Poppins, sans-serif',
        },
      }}
    />
  );
};

export default LoginInput;
