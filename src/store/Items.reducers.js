import { createSlice } from '@reduxjs/toolkit';
import { loadItems, loadOneItem } from './Items.actions';

const initialState = {};

const itemSlice = createSlice({
    name: 'items',
    initialState,
    reducers: {},
    extraReducers: builder => {
        builder
            .addCase(loadOneItem.fulfilled, (state, action) => {
                const { item } = action.payload;
                state[item.id] = item;
            })
            .addCase(loadItems.fulfilled, (state, action) => {
                const { items } = action.payload;
                items.forEach(item => {
                    const { id } = item;
                    state[id] = item;
                });
            })
    }
});

export default itemSlice.reducer;