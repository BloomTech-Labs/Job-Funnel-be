exports.seed = function(knex) {
  return knex("companies").insert(
    [
      {
        name: "IBM",
        description: "a big tech company",
        size: "large",
        revenue: 79000000000
      },
      {
        name: "apple",
        description: "maker of expensive ",
        size: "extra large",
        revenue: 258000000000
      },
      {
        name: "amazon",
        description: "seller of stuff",
        size: "MEGA",
        revenue: 232000000000
      }
    ],
    "id"
  );
};
