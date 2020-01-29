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
        email: "jackman@gmail.com",
        password: bcrypt.hashSync("password", 12),
        user_type: "job seeker",
        company_id: 2,
        location_id: 2,
        education: "code dojo"
      },
      {
        first_name: "luis",
        last_name: "kirkman",
        email: "hello@yahoo.com",
        password: bcrypt.hashSync("password", 12),
        user_type: "job seeker",
        company_id: 3,
        location_id: 3,
        education: "self taught"
      },
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
        email: "jackman@gmail.com",
        password: bcrypt.hashSync("password", 12),
        user_type: "job seeker",
        company_id: 2,
        location_id: 2,
        education: "code dojo"
      },
      {
        first_name: "luis",
        last_name: "kirkman",
        email: "hello@yahoo.com",
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
