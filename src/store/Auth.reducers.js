import { createSlice } from '@reduxjs/toolkit';
import { checkLogin, loginUser, registerUser } from './Auth.actions';

const initialState = {
    isFetching: false,
    isAuthenticated: false,
    error: null
}

const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {},
    extraReducers: builder => {
        builder
            .addCase(checkLogin.fulfilled, (state, action) => {
                const { isAuthenticated } = action.payload;
                state.isAuthenticated = isAuthenticated;
            })
            .addCase(loginUser.fulfilled, (state, action) => {
                const { isAuthenticated } = action.payload;
                state.isAuthenticaed = isAuthenticated;
            })
            .addCase(loginUser.rejected, (state, action) => {
                const { error } = action.payload;
                state.isAuthenticated = false;
                state.error = error;
            })
            .addCase(registerUser.fulfilled, (state,action) => {
                const { isRegistered } = action.payload;
                state.isRegistered = isRegistered;
            })
            .addCase(registerUser.rejected, (state, action) => {
                const { error } = action.payload;
                state.isAuthenticated = false;
                state.error = error;
            })
    }
});

export default authSlice.reducer;