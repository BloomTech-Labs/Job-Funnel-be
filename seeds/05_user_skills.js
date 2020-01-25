exports.seed = function(knex) {
  return knex("user_skills").insert(
    [
      { user_id: 1, skill_id: 3 },
      { user_id: 2, skill_id: 1 },
      { user_id: 3, skill_id: 2 }
    ],
    "id"
  );
};
