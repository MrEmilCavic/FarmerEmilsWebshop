import { createAsyncThunk } from '@reduxjs/toolkit';
import { addToCart, checkOut, fetchCart, removeFromCart } from '../apis/cart';
//import { response } from 'express';

export const addToCartInc = createAsyncThunk(
    'cart/addToCart',
    async(item, thunkAPI) => {
        try {
            const cartItem = item;
            return cartItem;
        } catch(err) {
            throw err;
        }
    }
);

export const addCartItem = createAsyncThunk(
    'cart/addItem',
    async({ item, quantity }, thunkAPI) => {
        try {
            const response = await addToCart(item.id, quantity);
            const cartItem = {
                ...item,
                cartItemId: response.id,
                quantity
            };
            return { cartItem };
        } catch(err) {
            throw err;
        }
    }
);

export const checkOutCart = createAsyncThunk(
    'cart/checkOutCart',
    async ({ cartId }, thunkAPI) => {
        try {
            const response = await checkOut(cartId);
            return {
                order: response
            }
        } catch(err) {
            throw err;
        }
    }
);

export const loadCart = createAsyncThunk(
    'cart/loadCart',
    async (params, thunkAPI) => {
        try {
            const response = await fetchCart();
            return {
                cart: response
            }
        } catch(err) {
            throw err;
        }
    }
);

export const removeCartItem = createAsyncThunk(
    'cart/removeItem',
    async (cartItemId, thunkAPI) => {
        try {
            await removeFromCart(cartItemId);
            return {
                item: cartItemId
            }
        } catch(err) {
            throw err;
        }
    }
);

export const removeItemFromCart = createAsyncThunk(
    'cart/removeItemFromCart',
    async(cartItemId, thunkAPI) => {
        try {
            return {
                item: cartItemId
            }
        } catch(err) {
            throw err;
        }
    }
)