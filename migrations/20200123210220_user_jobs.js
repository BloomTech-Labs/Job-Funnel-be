
exports.up = function(knex) {
    return knex.schema.createTable('user_jobs', tbl => {
        tbl.increments()

        tbl.integer('user_id', 255)
        .references("id")
        .inTable("users")
        .notNullable()
        .onDelete('CASCADE')

        tbl.integer('job_id', 255)
        .references("id")
        .inTable("job_listings")
        .notNullable()
        .onDelete('CASCADE')

        tbl.varchar("status", 255).notNullable()
    });
};

exports.down = function(knex) {
    return knex.schema.dropTableIfExists('user_jobs')
};

