
exports.up = function(knex) {
    return knex.schema.createTable('locations', tbl => {
        tbl.increments()
      
        tbl.varchar("city", 255).notNullable()

        tbl.varchar("state_province", 255).notNullable()

        tbl.varchar("country", 255).notNullable()
    });
};

exports.down = function(knex) {
    return knex.schema.dropTableIfExists('locations')
};