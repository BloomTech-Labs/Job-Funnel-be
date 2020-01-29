exports.seed = function (knex) {
  return knex("companies").insert(
    [
      {
        name: "IBM",
        description: "a big tech company",
        size: 500000,
        revenue: 79000000000
      },
      {
        name: "apple",
        description: "maker of expensive stuff",
        size: 200000,
        revenue: 258000000000
      },
      {
        name: "amazon",
        description: "seller of stuff",
        size: 600000,
        revenue: 232000000000
      }
    ],
    "id"
  );
};
