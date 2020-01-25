exports.seed = function(knex) {
  return knex("job_keyphrases").insert(
    [
      { job_id: 1, keyphrase: "java, ruby" },
      { job_id: 2, keyphrase: "java, ruby" },
      { job_id: 3, keyphrase: "java, ruby" }
    ],
    "id"
  );
};
