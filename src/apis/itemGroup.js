import API from './client';
import axios from 'axios';

export const fetchItemGroups = async () => {
    const res = await axios.get(`http://localhost:4000/api/itemGroups`)
    const itemGroups = res.data;
    return itemGroups;
}

export const fetchOneItemGroup = async (itemGroupId) => {
    try {
        const response = await API.get(`itemGroups/${itemGroupId}`);
        return response.data;
    } catch(err) {
        throw err.response.data;
    }
}