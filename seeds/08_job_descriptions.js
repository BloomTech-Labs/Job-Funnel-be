exports.seed = function(knex) {
  return knex("job_descriptions").insert(
    [
      { job_id: 1, description: "job 1 this is a great place to work" },
      { job_id: 2, description: "job 2 this is a great place to work" },
      { job_id: 3, description: "job 3 this is a great place to work" },
      { job_id: 4, description: "job 4 this is a great place to work" },
      { job_id: 5, description: "job 5 this is a great place to work" },
      { job_id: 6, description: "job 6 this is a great place to work" }
    ],
    "id"
  );
};
