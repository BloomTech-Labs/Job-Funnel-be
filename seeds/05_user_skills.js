exports.seed = function(knex) {
  return knex("users_skills").insert(
    [
      { users_id: 1, skill_id: 3 },
      { users_id: 2, skill_id: 1 },
      { users_id: 3, skill_id: 2 }
    ],
    "id"
  );
};
