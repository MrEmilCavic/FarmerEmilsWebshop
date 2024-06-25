import React from 'react';
import Button from '@mui/material/Button';
import CircularProgress from '@mui/material/CircularProgress';

function LoginButton(props) {
    const { children, isLoading, ...data} = props;

    return (
        <Button {...data}>
            {!isLoading && children}
            {isLoading && <CircularProgress />}
        </Button>
    );
}

export default LoginButton;