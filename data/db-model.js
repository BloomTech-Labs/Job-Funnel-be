const db = require('./dbConfig.js');

module.exports = {
    findBy,
    findByMultiple,
    findById,
    add,
    update,
    remove,
    searchBy,
    saveJob,
    findSaved
}

function findBy(table, value) {
    return db(table)
        .where(value)
        .first();
}

function findByMultiple(table, value1, value2) {
    // console.log(value1, value2)
    return db(table)
        .where({ ...value1, ...value2 })
}

function searchBy(table, columnName, value) {
    return db(table).whereRaw(`LOWER(${columnName}) LIKE '%${value.toLowerCase()}%'`);
}

function add(table, row) {
    console.log('DB Add: ', table, row)
    return db(table)
        .insert({ ...row }, 'id');
}

// save a job added by Mauricio and Anthony

function saveJob(job) {
    return db('user_jobs')
        .insert(job, 'job_id')
        .then(ids => {
            const [id] = ids;
            return db("user_jobs")
                .where("id", "=", id)
                .first();
        })     
}

//
//get saved job
function findSaved(id) {
    return db('user_jobs as uj')
        .where({user_id: id})
        .leftJoin('users as u', 'u.id', 'uj.user_id')
        .leftJoin('job_companies as jc', 'jc.job_id', 'uj.id')
        .leftJoin('companies as c', 'c.id', 'jc.company_id')
        .leftJoin('job_descriptions as jd', 'jd.job_id', 'uj.id')
        .leftJoin('job_locations as jl', 'jl.job_id', 'uj.id')
        .leftJoin('locations as l', 'l.id', 'jl.location_id')
        .leftJoin('job_links as links', 'links.job_id', 'uj.id')
        // .select('j.*', 'c.name as companyName', 'jd.description as description', 
        // 'l.city as city', 'l.state_province as stateOrProvince', 'l.country as country', 'links.external_url as testexternal_url')
        .select('u.id', 'uj.job_id', 'uj.status', 'uj.*', 'c.name as companyName', 'jd.description as description', 
        'l.city as city', 'l.state_province as stateOrProvince', 'l.country as country', 'links.external_url as testexternal_url')
  }




// function findExercises(id){
//     return db('exercise as e')
//     .where({workout_id: id})
//     .join('workout as w', 'w.id', 'e.workout_id')
//     .select('e.id','e.name', 'e.sets', 'e.reps', 'e.weight', 'e.workout_id')
// }

function findById(table, id) {
    return db(`${table} as t`)
        .where({ 't.id': id })
        .select('t.*')
        .first();
}

function update(table, id, row) {
    return db(table)
        .where({ id })
        .update({ ...row });
}

async function remove(table, value) {
    console.log('db-methods remove table/value: ', table, value)
    await db.transaction(async trx => {
        try {
            await trx(table)
                .where(value);

            const rowDeleted = await trx(table)
                .where(value)
                .del();

            if (!rowDeleted) {
                throw `Error deleting row from ${table}`
            }

            return true;
        } catch (err) {
            throw err;
        }
    });
}