import { createSlice } from '@reduxjs/toolkit';
import { checkLogin } from './Auth.actions';
import { addCartItem, checkOutCart, loadCart, removeCartItem } from './Cart.actions';

const initialState = {};


const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        addToCart: (state, action) => {
            const item = action.payload;
            const shoppingCart = state.items;
            console.log(`state.items is `, state.items);
            console.log(`action.payload is `, action.payload);
            console.log(`addtocart item is `, item);
            state.items.push(action.payload);
            console.log(`state.cart after push `, state.items);
            const isCartItem = state.items ? 
                                state.items.find((cartItem) => cartItem.id === item.id) 
                                : state.items.push(...action.payload);
                if(isCartItem) {
                    shoppingCart.item[item.id].quantity += item.quantity;
                } else {                 
                    shoppingCart.push(...action.payload);
                    console.log(`state.items after push `, state.items);
                } 
        },          
    },

    
    extraReducers: (builder) => {
        builder
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
    }
});


export default cartSlice.reducer;
export const { addToCart } = cartSlice.actions;