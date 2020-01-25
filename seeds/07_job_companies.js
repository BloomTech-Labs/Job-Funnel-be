exports.seed = function(knex) {
  return knex("job_companies").insert(
    [
      { company_id: 1, job_id: 1 },
      { company_id: 2, job_id: 2 },
      { company_id: 3, job_id: 3 }
    ],
    "id"
  );
};
