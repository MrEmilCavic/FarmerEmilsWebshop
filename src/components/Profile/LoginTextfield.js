import React from 'react';
import { useField } from 'formik';
import TextField from '@mui/material/TextField';

function LoginTextfield(props) {
    const { name, ...data } = props;
    const [ field, { error } ] = useField({ name, type: name });

    return (
        <TextField
        {...field}
        {...data}
        error={!!error}
        helperText={error} />
    );
}

export default LoginTextfield;