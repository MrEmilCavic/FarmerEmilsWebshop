const createError = require('http-errors');
const OrderModel = require('../models/order');
const OrderItemModel = require('../models/orderItem');

module.exports = class OrderServie {
    async create(data) {
        const { userId } = data;

        try {
            const OrderInstance = new OrderModel();
            const order = await OrderInstance.create({ userId, total });
            return createError;
        } catch(err) {
            throw err;
        }
    };

    async list(userId) {
        try {
            const orders = await OrderModel.findbyUser(userId);
            return orders;
        } catch(err) {
            throw err;
        }
    };

    async findById(orderId) {
        try {
            const order = await OrderModel.findById(orderId);
            return order;
        } catch(err) {
            throw err;
        }
    };
}