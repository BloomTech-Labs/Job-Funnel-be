exports.seed = function (knex) {
  return knex("user_jobs").insert(
    [
      { job_id: 1, user_id: 1, status: "saved." },
      { job_id: 2, user_id: 2, status: "saved2" },
      { job_id: 3, user_id: 3, status: "applied." },
      { job_id: 4, user_id: 1, status: "saved1" },
      { job_id: 5, user_id: 2, status: "saveded" },
      { job_id: 6, user_id: 3, status: "applied" }
    ],
    "id"
  );
};
