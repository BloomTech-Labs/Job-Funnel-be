const db = require('./dbConfig');

module.exports = {
    findBy,
    findByMultiple,
    findById,
    add,
    update,
    remove,
}

function findBy(value){
    return db('users')
        .where(value)
        .first();
}

function findByMultiple(value1, value2){
    // console.log(value1, value2)
    return db('users')
        .where({...value1, ...value2})
}

function add(user){
    return db('users')
    .insert(user, 'id');
}

function findById(id){
    return db('users as u')
    .where({'u.id': id})
    .select('u.id', 'u.email',)
    .first();
}

function update(id, user){
    return db('users')
    .where({id})
    .update({...user});
}

async function remove(id){
    await db.transaction(async trx => {
        try{
             await trx('users')
            .where({id});

            const userDeleted = await trx('users')
            .where({id})
            .del();
            
            if(!userDeleted){
                throw 'Error deleting user'
            }

            return true;
        }catch(err){
            throw err;
        }
    });
}