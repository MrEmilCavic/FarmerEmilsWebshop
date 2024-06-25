const createError = require('http-errors');
const CartModel = require('../models/cart');
const OrderModel = require('../models/order');
const CartItemModel = require('../models/cartItem');

module.exports = class CartService {
    async create(data) {
        const { userId } = data;

        try {
            const CartModelInstance = new CartModel();
            const cart = await CartModelInstance.create(userId);
            return cart;
        } catch(err) {
            throw err;
        }
    };

    async loadCart(userId) {
        try {
            const cart = await CartModel.findOneByUser(userId);
            const items = await CartItemModel.find(cart.id);
            cart.items = items;
            return cart;
        } catch(err) {
            throw err;
        }
    };

    async addItem(userId, item) {
        try {
            const cart = await CartModel.findOneByUser(userId);
            const cartItem = await CartItemModel.create({ cartId: cart.id, ...item });
            return cartItem;
        } catch(err) {
            throw err;
        }
    };

    async updateItem(cartItemId, data) {
        try {
            const cartItem = await CartItemModel.update(cartItemId, data);
            return cartItem;
        } catch(err) {
            throw err;
        }
    };

    async removeItem(cartItemId) {
        try {
            const cartItem = await CartItemModel.delete(cartItemId);
            return cartItem;
        } catch(err) {
            throw err;
        }
    };

    async checkout(cartId, userId) {
        try {
            const cartItems = await CartItemModel.find(cartId);
            const total = cartITems.reduce((total, item) => {
                return total += Number(item.price);
            }, 0);
            const OrderInstance = new OrderModel({ total, userId });
            OrderInstance.addItems(cartItems);
            await OrderInstance.create();
            const order = OrderInstance.update({ status: 'IT IS DONE' });
            return order;
        } catch(err) {
            throw err;
        }
    };
}