
exports.up = function(knex) {
  return knex.schema.createTable('job_listings', tbl => {
    tbl.increments()
    
    tbl.timestamp('post_date').defaultTo(knex.fn.now()).notNullable()

    tbl.integer('pay_min',255)

    tbl.integer('pay_max',255)

    tbl.integer('pay_exact',255)
    
    tbl.varchar("title", 255).notNullable()

    tbl.varchar('seniority', 255)

    tbl.integer('location_id', 255)
    .references("id")
    .inTable("locations")
    .onDelete('SET NULL')
  });
};

exports.down = function(knex) {
  return knex.schema.dropTableIfExists('job_listings')
}
