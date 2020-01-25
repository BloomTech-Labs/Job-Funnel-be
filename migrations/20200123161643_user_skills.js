exports.up = function(knex) {
  return knex.schema.createTable("users_skills", tbl => {
    tbl
      .integer("users_id", 255)
      .references("id")
      .inTable("users")
      .notNullable()
      .onDelete("CASCADE");

    tbl
      .integer("skill_id", 255)
      .references("id")
      .inTable("skills")
      .notNullable()
      .unique()
      .onDelete("CASCADE");
  });
};

exports.down = function(knex) {
  return knex.schema.dropTableIfExists("users_skills");
};
