import { createSlice } from '@reduxjs/toolkit';
import { checkLogin } from './Auth.actions';
import { addToCartInc, addCartItem, checkOutCart, loadCart, removeCartItem } from './Cart.actions';

const initialState = {
    cart: [],
};


const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        /*
        addToCartInc: (state, action) => {
            const item = action.payload;
            const shoppingCart = state.cart;
            const isCartItem = state.cart ? 
                                state.cart.find((cartItem) => cartItem.id === item.id) 
                                : state.cart.push(...action.payload);                                
                if(isCartItem) {
                    shoppingCart.item[item.id].quantity += item.quantity;
                } else {                 
                    shoppingCart.push(...action.payload);
                    console.log(`state.cart after push `, state.cart);
                } 
        },  
        */        
    },

    
    extraReducers: (builder) => {
        builder
        .addCase(addToCartInc.fulfilled, (state, action) => {
            const item = action.payload;
            state.cart.push(item);
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
    }
});


export default cartSlice.reducer;
//export const { addToCartInc } = cartSlice.actions;