import * as React from 'react';
import TextField from '@mui/material/TextField';

export default function TextFieldUsage({ fieldName }) {
  return <TextField id="standard-basic" label={fieldName} variant="standard" />;
}