const express = require('express');
const router = express.Router();
const ItemGroupService = require('../services/ItemGroupService');
const ItemGroupServiceInstance = new ItemGroupService();

module.exports = (app) => {
    app.use('/api/itemGroups', router);
    router.get('/', async (req, res, next) => {
        try {
            const queryParams = req.query;
            const response = await ItemGroupServiceInstance.groupList(queryParams);
            res.status(200).send(response);
        } catch(err) {
            next(err);
        }
    });

    router.get('/:itemGroupId', async (req, res, next) => {
        try {
            const { itemGroupId } = req.params;
            const response = await ItemGroupServiceInstance.get(itemGroupId);
            res.status(200).send(response);
        } catch(err) {
            next(err);
        }
    });
}