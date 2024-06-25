import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector }  from 'react-redux';
import { Formik, useFormik } from 'formik';
import LoginButton from './LoginButton';
import LoginTextfield from './LoginTextfield';

import { loginUser } from '../../store/Auth.actions';
import * as Yup from 'yup';

const LogIn = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const { error } = useSelector(state => state.auth);
    const [isLoading, setIsLoading] = useState(false);

    const handleLogin = async (credentials) => {
        try {
            setIsLoading(true);
            await dispatch(loginUser(credentials));
            setIsLoading(false);
            navigate.push('/');
        } catch(err) {
            setIsLoading(false);
        }
    }

    const credentialValidator = Yup.object().shape({
        email: Yup.string()
            .email("Invalid email address!")
            .required("e-mail address is required <3"),
        password: Yup.string()
            .required("Password is required")
    })

    return (
        <div className='LogIn'>
            <h2>LogIn</h2>
            <div className="formWrapper">
                <Formik
                    initialValues={{email: '', password: ''}}
                    validationSchema={credentialValidator}
                    validateOnBlur
                    onSubmit={async (values) => {
                        const { email, password } = values;
                        await handleLogin({username: email, password});
                    }}
                >
                    <Form className="loginForm">
                        <LoginTextfield
                        label="e-mail"
                        name="email"
                        id="emailInput" 
                        error={!!error}
                        helperText={error} />
                        <LoginTextfield
                        label="Password"
                        name="password"
                        id="passwordInput" 
                        error={!!error}
                        helperText={error} />
                        { error && <div className="errormsg">{error}</div> }
                        <LoginButton variant="contained" type="submit"
                            isLoading={isLoading}>Login!</LoginButton>
                    </Form>
                </Formik>
            </div>
        </div>
    );
};

export default LogIn;