exports.seed = function (knex) {
  return knex("job_companies").insert(
    [
      { company_id: 1, job_id: 1 },
      { company_id: 2, job_id: 2 },
      { company_id: 3, job_id: 3 },
      { company_id: 1, job_id: 4 },
      { company_id: 2, job_id: 5 },
      { company_id: 3, job_id: 6 }
    ],
    "id"
  );
};
