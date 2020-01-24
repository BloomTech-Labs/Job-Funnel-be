
exports.up = function(knex) {
    return knex.schema.createTable('job_companies', tbl => {
      tbl.increments()
      
      tbl.integer('company_id', 255)
      .references("id")
      .inTable("companies")
      .notNullable()
      .onDelete('CASCADE')

      tbl.integer('job_id', 255)
      .references("id")
      .inTable("job_listings")
      .notNullable()
      .onDelete('CASCADE')
    });
};

exports.down = function(knex) {
    return knex.schema.dropTableIfExists('job_companies')
};