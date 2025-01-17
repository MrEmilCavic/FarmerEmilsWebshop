const db = require('../db');
const moment = require('moment');
const pgp = require('pg-promise')({ capSQL: true });

module.exports = class CartModel {
    constructor(data = {}) {
        this.created = data.created || moment.tz('Europe/Berlin').toISOString();
        this.modified = moment.tz('Europe/Berlin').toISOString();
        this.converted = data.converted || null;
        this.isActive = data.isActive || true;
    }

    async create(userId) {
        try {
            const data = {userId, ...this}
            const statement = pgp.helpers.insert(data, null, 'carts') + ' RETURNING *';
            const result = await db.query(statement);

            if(result.rows?.length) {
                return result.rows[0];
            }
            return null;
        } catch(err) {
            throw new Error(err);
        }
    }

    async findOneById(id) {
        try {
            const statement = `SELECT * FROM carts WHERE id = $1`;
            const values = [id];
            const result = await db.query(statement, values);
            if (result.rows?.length) {
                return result.rows[0];
            }
            return null;
        } catch(err) {
            throw new Error(err);
        }
    }

    async findOneByUserId(userid) {
        try {
            const statement = `SELECT * FROM carts where userid = $1`;
            const values = [userid];
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