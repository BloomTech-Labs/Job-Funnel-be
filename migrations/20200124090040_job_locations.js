
exports.up = function(knex) {
    return knex.schema.createTable('job_locations', tbl => {
        tbl.increments()

        tbl.integer('job_id', 255)
        .references("id")
        .inTable("job_listings")
        .notNullable()
        .onDelete('CASCADE')

        tbl.integer('location_id', 255)
        .references("id")
        .inTable("locations")
        .notNullable()
        .onDelete('CASCADE')
    });
};

exports.down = function(knex) {
    return knex.schema.dropTableIfExists('job_locations')
};