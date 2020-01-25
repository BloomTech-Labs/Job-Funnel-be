exports.seed = function(knex) {
  return knex("locations").insert(
    [
      { city: "oakland", state_province: "california", country: "USA" },
      {
        city: "san francisco",
        state_province: "california",
        country: "USA"
      },
      { city: "LA", state_province: "california", country: "USA" }
    ],
    "id"
  );
};
