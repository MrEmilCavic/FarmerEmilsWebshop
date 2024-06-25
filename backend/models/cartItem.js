const db = require('../db');
const pgp = require('pg-promise')({ capSQL: true });

module.exports = class CartItemModel {
    static async create(data) {
        try {
            const statement = pgp.helpers.insert(data, null, 'cartitems') + ' RETURNING *';
            const result = await db.query(statement);
            if (result.rows?.length) {
                return result.rows[0];
            }
            return null;
        } catch(err) {
            throw new Error(err);
        }
    }

    static async update(id, data) {
        try {
            const condition = pgp.as.format(`WHERE id = ${id} RETURNING *`, { id });
            const statement = pgp.helpers.update(data, null, `cartitems`) + condition;
            const result = await db.query(statement);

            if(result.rows?.length) {
                return result.rows[0];
            }
            return null;
        } catch(err) {
            throw new Error(err);
        }
    }

    static async delete(id) {
        try {
            const statement = `DELETE FROM cartitems WHERE id = $1 RETURNING *`;
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

    static async find(cartId) {
        try {
            const statement = `SELECT ci.id AS cartItemId, ci.quantity, i.name, i.description, i.price
                                from cartitems ci LEFT JOIN items i on ci.itemid = i.id WHERE cartid = $1`;
            const values = [cartId];
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