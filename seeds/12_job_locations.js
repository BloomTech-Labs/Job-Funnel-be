exports.seed = function(knex) {
  return knex("job_locations").insert(
    [
      { job_id: 1, location_id: 1 },
      { job_id: 2, location_id: 2 },
      { job_id: 3, location_id: 3 }
    ],
    "id"
  );
};
