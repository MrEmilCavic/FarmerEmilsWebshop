import API from './client';

export const fetchItems = async() => {
    try {
        const response = await API.get(`items`);
        return response.data;
    } catch(err) {
        throw err.response.data;
    }
}

export const fetchOneItem = async (itemId) => {
    try {
        const response = await API.get(`items/${itemId}`);
        return response.data;
    } catch(err) {
        throw err.response.data;
    }
}