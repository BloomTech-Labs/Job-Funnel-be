const bcrypt = require("bcryptjs");

exports.seed = function (knex) {
  return knex("users").insert(
    [
      {
        first_name: "dev",
        last_name: "team",
        email: "devTeam@me.com",
        password: bcrypt.hashSync("password", 12),
        user_type: "admin",
        company_id: 1,
        location_id: 1,
        education: "lambda"
      },
      {
        first_name: "jack",
        last_name: "denning",
        email: "jackman@gmaile.com",
        password: bcrypt.hashSync("password", 12),
        user_type: "job seeker",
        company_id: 2,
        location_id: 2,
        education: "code dojo"
      },
      {
        first_name: "luis",
        last_name: "kirkman",
        email: "hell4o@yahoo.com",
        password: bcrypt.hashSync("password", 12),
        user_type: "job seeker",
        company_id: 3,
        location_id: 3,
        education: "self taught"
      },
      {
        first_name: "dev.",
        last_name: "team.",
        email: "devT43eam@me.com",
        password: bcrypt.hashSync("password", 12),
        user_type: "admin",
        company_id: 1,
        location_id: 1,
        education: "lambda"
      },
      {
        first_name: "jack1",
        last_name: "denning1",
        email: "jackma1n@gmail.com",
        password: bcrypt.hashSync("password", 12),
        user_type: "job seeker",
        company_id: 2,
        location_id: 2,
        education: "code dojo"
      },
      {
        first_name: "luis1",
        last_name: "kirkman1",
        email: "helloyou@yahoo.com",
        password: bcrypt.hashSync("password", 12),
        user_type: "job seeker",
        company_id: 3,
        location_id: 3,
        education: "self taught"
      }
    ],
    "id"
  );
};
