import { createSlice } from '@reduxjs/toolkit';
import { checkOutCart } from './Cart.actions';
import { loadOneOrder, loadOrders } from './Orders.actions';
const orderSlice = createSlice({
    name: 'orders',
    initialState: {},
    reducers: {},
    extrareducers: builder => {
        builder
            .addCase(checkOutCart.fulfilled, (state, action) => {
                const { order } = action.payload;
                state[order.id] = order;
            })
            .addCase(loadOneOrder.fulfilled, (state, action) => {
                const { order } = action.payload;
                state[order.id] = order;
            })
            .addCase(loadOrders.fulfilled, (state,action) => {
                const { orders } = action.payload;
                orders.forEach(order => {
                    const { id } = order;
                    state[id] = order;
                });
            })
    }
});

export default orderSlice.reducer;
