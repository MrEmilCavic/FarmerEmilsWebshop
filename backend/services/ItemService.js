const createError = require('http-errors');
const ItemModel = require('../models/item');
const ItemModelInstance = new ItemModel();

module.exports = class ItemService {
    async list(data) {
        try {
            const items = await ItemModelInstance.find(data);
            return items;
        } catch(err) {
            throw err;
        }
    };

    async get(id) {
        try {
            const item = await ItemModelInstance.findOne(id);
            if(!item) {
                throw createError(404, 'It seems we cannot find this item!');
            }
            return item;
        } catch(err) {
            throw err;
        }
    };
}