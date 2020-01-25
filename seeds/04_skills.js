exports.seed = function(knex) {
  return knex("skills").insert(
    [
      { name: "java script, node.js, react" },
      { name: "java , vue.js, redux" },
      { name: "type script, graphql, react" }
    ],
    "id"
  );
};
