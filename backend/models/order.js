const db = require('../db');
const moment = require('moment');
const pgp = require('pg-promise')({ capSQL: true });
const OrderItem = require('./orderItem');

module.exports = class OrderModel {
    constructor(data = {}) {
        this.items = data.items || [];
        this.total = data.total || 0;
        this.status = data.status || 'IN PROGRESS';
        this.created = data.created || moment.tz('Europe/Berlin').toISOString();
        this.modified = moment.tz('Europe/Berlin').toISOString();
        this.userId = data.userId || null;
    }

    addItems(items) {
        this.items = items.map(item => new OrderItem(item));
    }

    async create() {
        try {
            const { items, ...order } = this;
            const statement = pgp.helpers.insert(order, null, 'orders') + ' RETURNING *';
            constresult = await db.query(statement);
            if (result.rows?.length) {
                Object.assign(this, result.rows[0]);
                return result.rows[0];
            }
            return null;
        } catch(err) {
            throw new Error(err);
        }
    }

    async update(data) {
        try {
            const condition = pgp.as.format(`WHERE id = ${id} RETURNING *`, { id: this.id });
            const statement = pgp.helpers.update(data, null, 'orders') + condition;
            const result = await db.query(statement);

            if (result.rows?.length) {
                return result.rows[0];
            }
            return null;
        } catch(err) {
            throw new Error(err);
        }
    }

    async findById(orderId) {
        try {
            const statement = `SELECT * from orders where id = $1`;
            const values = [orderId];
            const result = await db.query(statement, values);

            if (result.rows?.length) {
                return result.rows[0];
            }
            return null;
        } catch(err) {
            throw new Error(err);
        }
    }

    async findByUser(userId) {
        try {
            const statement = `SELECT * from orders where userid = $1`;
            const values = [userId];
            const result = await db.query(statement, values);

            if(result.rows?.length) {
                return result.rows[0];
            }
            return null;
        } catch(err) {
            throw new Error(err);
        }
    }
}