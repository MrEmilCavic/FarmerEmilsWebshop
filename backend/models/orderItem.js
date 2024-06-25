const db = require('../db');
const moment = require('moment');
const pgp = require('pg-promise')({ capSQL: true });

module.exports = class OrderItemModel {

    constructor(data = {}) {
        this.itemId = data.id;
        this.name = data.name;
        this.quantity = data.quantity || 1;
        this.price = data.price || 0;
        this.created = data.created || moment.tz('Europe/Berlin').toISOString();
        this.modified = moment.tz('Europe/Berlin').toISOString();
        this.orderId = data.orderId || null;
    }

    static async create(data) {
        try {
            const statement = pgp.helpers.insert(data, null, 'orderitems') + ' RETURNING *';
            const result = await db.query(statement);

            if (result.rows?.length) {
                return result.rows[0];
            }
            return null;
        } catch(err) {
            throw new Error(err);
        }
    }

    static async find(orderId) {
        try {
            const statement = `SELECT oi.id as cartItemId, i.name, i.price, oi.quantity
                                from orderitems oi left join items i on oi.itemid = i.id
                                where orderid = $1`;
            const values = [orderId];
            const result = await db.query(statement, values);

            if (result.rows?.length) {
                return result.rows;
            }
            return [];
        } catch(err) {
            throw new Error(err);
        }
    }
}