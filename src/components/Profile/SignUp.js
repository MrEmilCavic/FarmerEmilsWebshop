import React, { useState } from 'react';
import { Form, Formik } from 'formik';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import * as Yup from 'yup';
import { registerUser } from '../../store/Auth.actions';
import LoginTextfield from './LoginTextfield';
import LoginButton from './LoginButton';

const SignUp = (props) => {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const { error } = useSelector(state => state.auth);
    const [isLoading, setIsLoading] = useState(false);

    const handleSignUp = async (credentials) => {
        try { 
            setIsLoading(true);
            await dispatch(registerUser(credentials));
            setIsLoading(false);
            navigate.push('/');
        } catch(err) {
            setIsLoading(false);
        }
    }

    const credentialValidator = Yup.object().shape({
        email: Yup.string()
            .email("Invalid e-mail address!")
            .required("e-mail address is required!"),
        password: Yup.string()
            .required("Password is required!"),
        confirmPassword: Yup.string()
            .oneOf([Yup.ref('password'), null], "Oopsie! Passwords dont seem to match!")
    })

    return (
        <div className='SignUp'>
            <h2>Sign up and have fun!</h2>
            <div className="formWrapper">
                <Formik
                    initialValues={{email:'', password: ''}}
                    validationSchema={credentialValidator}
                    validateOnBlur
                    onSubmit={async (data) => {
                        const { confirmPassword, ...credentials } = data;
                        await handleSignUp(credentials);
                    }}>
                        <Form className="signUpForm">
                            <LoginTextfield
                            label="e-mail"
                            name="email"
                            id="emailInput" />
                            <LoginTextfield
                            label="Password"
                            name="password"
                            id="passwordInput" 
                            type="password" />
                            <LoginTextfield
                            label="Repeat password"
                            name="repeatPassword"
                            id="repeatPasswordInput" 
                            type="password" />
                            { error && <div className="errormessage">{error}</div> }
                            <LoginButton variant="contained" type="submit" idLoading={isLoading}>
                                Sign Up!
                            </LoginButton>
                        </Form>
                    </Formik>
            </div>
        </div>
    );
};

export default SignUp;