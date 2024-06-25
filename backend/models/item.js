const db = require('../db');

module.exports = class ItemModel {
    async find(options = {}) {
        try {
            const statement = `SELECT * FROM items`;
            const values = [];
            const result = await db.query(statement, values);

            if(result.rows?.length) {
                return result.rows;
            }
            return [];
        } catch(err) {
            throw err;
        }
    }

    async findOne(id) {
        try {
            const statement = `SELECT * FROM items WHERE id = $1`;
            const values = [id];
            const result = await db.query(statement, values);

            if(result.rows?.length){
                return result.rows[0]
            }
            return null;
        } catch(err) {
            throw err;
        }
    }
}