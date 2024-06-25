const db = require('../db');

module.exports = class ItemGroupModel {
    async find(options = {}) {
        try {
            const statement = `SELECT * from itemgroups`;
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

    async findOneGroup(id) {
        try {
            const statement = `SELECT * from itemgroups where id = $1`;
            const values = [id];
            const result = await db.query(statement, values);

            if(result.rows?.length) {
                return result.rows;
            }
            return []; 
        } catch(err) {
            throw err;
        }
    }
}