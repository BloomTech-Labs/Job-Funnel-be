
exports.up = function(knex) {
    return knex.schema.createTable('job_links', tbl => {
        tbl.increments()

        tbl.integer('job_id', 255)
        .references("id")
        .inTable("job_listings")
        .notNullable()
        .onDelete('CASCADE')

        tbl.varchar("external_url", 255).notNullable().unique()
    });
};

exports.down = function(knex) {
    return knex.schema.dropTableIfExists('job_links')
};