const express = require('express');
const router = express.Router();

const ItemService = require('../services/ItemService');
const ItemServiceInstance = new ItemService();

module.exports = (app) => {
    app.use('/api/items', router);

    router.get('/', async (req, res, next) => {
        try {
            const queryParams = req.query;
            const response = await ItemServiceInstance.list(queryParams);
            res.status(200).send(response);
        } catch(err) {
            next(err);
        }
    });

    router.get('/:itemId', async (req, res, next) => {
        try {
            const { itemId } = req.params;
            const response = await ItemServiceInstance.get(itemId);
            res.status(200).send(response);
        } catch(err) {
            next(err);
        }
    });
}