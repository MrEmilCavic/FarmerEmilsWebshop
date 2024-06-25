import { createAsyncThunk } from '@reduxjs/toolkit';
import { fetchItems, fetchOneItem } from '../apis/item';


export const loadItems = createAsyncThunk(
    'items/loadItems',
    async (params, thunkAPI) => {
        try {
            const response = await fetchItems();
            return {
                items: response
            }
        } catch(err) {
            throw err;
        }
    }
);

export const loadOneItem = createAsyncThunk(
    'items/loadOneItem',
    async (itemId, thunkAPI) => {
        try {
            const response = await fetchOneItem(itemId);
            return {
                item: response
            };
        } catch(err) {
            throw err;
        }
    }
);

