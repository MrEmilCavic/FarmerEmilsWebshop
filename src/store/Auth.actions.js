import { createAsyncThunk } from '@reduxjs/toolkit';
import { loggedIn, login, register } from '../apis/auth';

export const checkLogin = createAsyncThunk(
    'auth/checkLogin',
    async (param, thunkAPI) => {
        try {
            const response = await loggedIn();
            return {
                cart: response.cart,
                isAuthenticated: true,
                user: response.user
            }
        } catch(err) {
            throw err;
        }
    }
);

export const loginUser = createAsyncThunk(
    'auth/loginUser',
    async (credentials, thunkAPI) => {
        try {
            const response = await login(credentials);
            return {
                user: response,
                isAuthenticated: true
            }
        } catch(err) {
            throw err;
        }
    }
);

export const registerUser = createAsyncThunk(
    'auth/registerUser',
    async (credentials, thunkAPI) => {
        try {
            await register(credentials);
            return {};
        } catch(err) {
            throw err;
        }
    }
);