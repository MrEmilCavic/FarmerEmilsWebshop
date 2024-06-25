const createError = require('http-errors');
const ItemGroupModel = require('../models/itemGroups');
const ItemGroupModelInstance = new ItemGroupModel();

module.exports = class ItemGroupService {
    async groupList(data) {
        try {
            const itemGroups = await ItemGroupModelInstance.find(data);
            return itemGroups;
        } catch(err) {
            throw err;
        }
    };

    async get(id) {
        try {
            const itemGroup = await ItemGroupModelInstance.findOneGroup(id);
            if(!itemGroup) {
                throw createError(404, 'This item group doesnt exist? Impossible!');
            }
            return itemGroup;
        } catch(err) {
            throw err;
        }
    };
}