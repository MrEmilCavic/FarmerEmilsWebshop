import { createSlice } from '@reduxjs/toolkit';
import { checkLogin } from './Auth.actions';
import { addToCartInc, addCartItem, checkOutCart, loadCart, removeCartItem, removeItemFromCart } from './Cart.actions';

const initialState = { cart: [],};


const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {},

    
    extraReducers: (builder) => {
        builder
        .addCase(addToCartInc.fulfilled, (state, action) => {
            const item = action.payload;
            const isInCart = state.cart.find((cartItem) => cartItem.id === item.id);
            if (isInCart) {
                isInCart.quantity += item.quantity;
            } else {
                state.cart.push(item);
            }
        })
            .addCase(addCartItem.fulfilled, (state, action) => {
                const { item } = action.payload;
                state.items.push(item);
            })
            .addCase(checkLogin.fulfilled, (state, action) => {
                const { cart } = action.payload;
                Object.assign(state, cart);
            })
            .addCase(checkOutCart.fulfilled, (state, action) => {
            })
            .addCase(loadCart.fulfilled, (state, action) => {
                const { cart } = action.payload;
                Object.assign(state, cart);
            })
            .addCase(removeCartItem.fulfilled, (state, action) => {
                const { item } = action.payload;
                state.items = state.items.filter((cartItem) => cartItem.id !== item.id);
            })
            .addCase(removeItemFromCart.fulfilled, (state, action) => {
                const { item } = action.payload;
                state.cart = state.cart.filter((cartItem) => cartItem.id !== item.id);
            })
    }
});


export default cartSlice.reducer;