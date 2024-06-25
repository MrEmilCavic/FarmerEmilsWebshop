import { createAsyncThunk } from '@reduxjs/toolkit';
import { fetchItemGroups, fetchOneItemGroup } from '../apis/itemGroup';

export const loadItemGroups = createAsyncThunk(
    'itemGroups/loadItemGroups',
    async (params, thunkAPI) => {
        try {
            const response = await fetchItemGroups();
            return {
                itemGroups: response
            }
        } catch(err) {
            dispatch(err);
        }
    }
);

export const loadOneItemGroup = createAsyncThunk(
    'itemGroups/loadOneItemGroup',
    async (itemGroupId, thunkAPI) => {
        try {
            const response = await fetchOneItemGroup(itemGroupId);
            return {
                itemGroup: response
            };
        } catch(err) {
            throw err;
        }
    }
);