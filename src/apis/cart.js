import API from './client';

export const fetchCart = async () => {
    try {
        const response = await API.get('carts/mine');
        return response.data;
    } catch(err) {
        throw err.response.data;
    }
}

export const addToCart = async (itemId, quantity) => {
    try {
        const response = await API.post(`carts/mine/items`, { itemId, quantity });
        return response.data;
    } catch(err) {
        throw err.response.data;
    }
}

export const removeFromCart = async (cartItemId) => {
    try {
        const response = await API.delete(`carts/mine/items/${cartItemId}`);
        return response.data;
    } catch(err) {
        throw err.response.data;
    }
}

export const checkOut = async (cartId) => {
    try {
        const response = await API.post(`carts/mine/checkout`, { cartId });
        return response.data;
    } catch(err) {
        throw err.response.data;
    }
}