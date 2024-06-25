import { createAsyncThunk } from '@reduxjs/toolkit';
import { fetchOrders, fetchOneOrder } from '../apis/order';

export const loadOneOrder = createAsyncThunk(
    'orders/loadOrder',
    async (orderId, thunkAPI) => {
        try {
            const response = await fetchOneOrder(orderId);
            return {
                order: response
            };        
        } catch(err) {
            throw err;
        }
    }
);

export const loadOrders = createAsyncThunk(
    'orders/loadOrders',
    async (params, thunkAPI) => {
        try {
            const response = await fetchOrders();
            return {
                orders: response
            }
        } catch(err) {
            throw err;
        }
    }
);