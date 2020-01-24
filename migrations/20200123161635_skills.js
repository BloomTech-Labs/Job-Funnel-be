
exports.up = function(knex) {
    return knex.schema.createTable('skills', tbl => {    
        tbl.increments();
        tbl.varchar('name', 255).notNullable()
    })
};

exports.down = function(knex) {
  return knex.schema.dropTableIfExists('skills');
};
