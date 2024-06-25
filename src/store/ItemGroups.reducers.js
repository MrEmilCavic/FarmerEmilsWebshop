import { createSlice } from '@reduxjs/toolkit';
import { loadItemGroups, loadOneItemGroup } from './ItemGroups.actions';

const initialState = {};

const itemGroupSlice = createSlice({
    name: 'itemGroups',
    initialState,
    reducers: {},
    extraReducers: builder => {
        builder
            .addCase(loadOneItemGroup.fulfilled, (state, action) => {
                const { itemGroup } = action.payload;
                state[itemGroup.id] = itemGroup;
            })
            .addCase(loadItemGroups.fulfilled, (state, action) => {
                const { itemGroups } = action.payload;
                itemGroups.forEach(itemGroup => {
                    const { id } = itemGroup;
                    state[id] = itemGroup;
                });
            })
    }
})

export default itemGroupSlice.reducer;