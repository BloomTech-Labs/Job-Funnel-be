exports.seed = function(knex) {
  return knex("user_jobs").insert(
    [
      { job_id: 1, user_id: 1, status: "saved." },
      { job_id: 2, user_id: 2, status: "saved" },
      { job_id: 3, user_id: 3, status: "applied" }
    ],
    "id"
  );
};
