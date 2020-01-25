exports.seed = function(knex) {
  return knex("companies").insert(
    [
      {
        name: "IBM",
        description: "a big tech company",
        size: "large",
        revenue: "79 billion"
      },
      {
        name: "apple",
        description: "maker of expensive ",
        size: "extra large",
        revenue: "258 billion"
      },
      {
        name: "amazon",
        description: "seller of stuff",
        size: "MEGA",
        revenue: "232 billion"
      }
    ],
    "id"
  );
};
