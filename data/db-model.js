const db = require('./db-config.js');

module.exports = {
    findBy,
    findByMultiple,
    findById,
    add,
    update,
    remove,
    searchBy,
}

function findBy(table, value){
    return db(table)
        .where(value)
        .first();
}

function findByMultiple(table, value1, value2){
    // console.log(value1, value2)
    return db(table)
        .where({...value1, ...value2})
}

function searchBy(table, columnName, value){
    return db(table).whereRaw(`LOWER(${columnName}) LIKE '%${value.toLowerCase()}%'`);
}

function add(table, row){
    console.log('DB Add: ', table, row)
    return db(table)
    .insert({...row}, 'id');
}

function findById(table, id){
    return db(`${table} as t`)
    .where({'t.id': id})
    .select('t.*')
    .first();
}

function update(table, id, row){
    return db(table)
    .where({id})
    .update({...row});
}

async function remove(table, value){
    console.log('db-methods remove value: ', value)
    await db.transaction(async trx => {
        try{
             await trx(table)
            .where(value);

            const rowDeleted = await trx(table)
            .where(value)
            .del();
            
            if(!rowDeleted){
                throw `Error deleting row from ${table}`
            }

            return true;
        }catch(err){
            throw err;
        }
    });
}