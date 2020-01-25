exports.seed = function(knex) {
  return knex("job_links").insert(
    [
      { job_id: 1, external_url: "me@link.com" },
      { job_id: 2, external_url: "1me@link.com" },
      { job_id: 3, external_url: "2me@link.com" }
    ],
    "id"
  );
};
