exports.seed = function(knex) {
  return knex("job_descriptions").insert(
    [
      { job_id: 1, description: "this is a grate place to work" },
      { job_id: 2, description: "this is a grate place to work" },
      { job_id: 2, description: "this is a grate place to work" }
    ],
    "id"
  );
};
