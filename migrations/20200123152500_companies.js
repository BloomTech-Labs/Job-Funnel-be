
exports.up = function(knex) {
  return knex.schema.createTable('companies', tbl => {
    tbl.increments()

    tbl.varchar('name', 255).notNullable()

    tbl.varchar('description')

    tbl.integer('size', 255)

    tbl.biginteger('revenue', 255)
  });
};

exports.down = function(knex) {
  return knex.schema.dropTableIfExists('companies')
};
