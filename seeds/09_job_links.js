exports.seed = function(knex) {
  return knex("job_links").insert(
    [
      { job_id: 1, external_url: "job.com/job1first" },
      { job_id: 2, external_url: "job.com/job2" },
      { job_id: 3, external_url: "job.com/job3" },
      { job_id: 4, external_url: "job.com/job4" },
      { job_id: 5, external_url: "job.com/job5" },
      { job_id: 6, external_url: "job.com/job6" },
    ],
    "id"
  );
};
