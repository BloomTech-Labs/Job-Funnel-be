exports.seed = function(knex) {
  return knex("job_listings").insert(
    [
      {
        pay_min: 30000,
        pay_max: 100000,
        pay_exact: 89000,
        title: "software dev",
        seniority: "junior"
      },
      {
        pay_min: 60000,
        pay_max: 190000,
        pay_exact: 120000,
        title: "node developer",
        seniority: "senior"
      },
      {
        pay_min: 40000,
        pay_max: 90000,
        pay_exact: 80000,
        title: "ux designer",
        seniority: "some guy"
      }
    ],
    "id"
  );
};
