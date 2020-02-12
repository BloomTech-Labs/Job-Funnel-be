Endpoints:
BaseURL:
https://quickhire.herokuapp.com/api/

- ### users
    | Path              | Type   | Deployed | Auth (JWT) | Body               | Description          |
    | ----------------- |:------:|:--------:|:----------:|:------------------:| -------------------- |
    | /auth/register    | POST   |     True | None       | User               | Create new user      |
    | /auth/login       | POST   |     True | None       | email, password    | Log in, get token    |
    | /users/:id        | GET    |     True | Required   | None               | Get user by param ID |
    | /users/user       | GET    |     True | Required   | None               | Get user by token    |
    | /users/user       | PUT    |     True | Required   | User, password     | Update user by token |
    | /users/user       | DELETE |     True | Required   | password           | Delete user by token |
    #### Future:
    >tbd

- ### debug
    | Path                     | Type   | Deployed | Auth (JWT) | Body  | Description              |
    | ------------------------ |:------:|:--------:|:----------:|:-----:| ------------------------ |
    | /debug/companies         | GET    |    True | Required    | None  | Get all companies        |
    | /debug/locations         | GET    |    True | Required    | None  | Get all locations        |
    | /debug/users             | GET    |    True | Required    | None  | Get all users            |
    | /debug/skills            | GET    |    True | Required    | None  | Get all skills           |
    | /debug/user_skills       | GET    |    True | Required    | None  | Get all user skills      |
    | /debug/job_listings      | GET    |    True | Required    | None  | Get all job listings     |
    | /debug/job_companies     | GET    |    True | Required    | None  | Get all job companies    |
    | /debug/job_descriptions  | GET    |    True | Required    | None  | Get all job descriptions |
    | /debug/job_links         | GET    |    True | Required    | None  | Get all job links        |
    | /debug/job_keyphrases    | GET    |    True | Required    | None  | Get all job keyphrases   |
    | /debug/user_jobs         | GET    |    True | Required    | None  | Get all user jobs        |
    | /debug/job_locations     | GET    |    True | Required    | None  | Get all job locations    |
    #### Future:
    >Remove or relocate from this router when no longer needed.


   | Path                     | Type   | Deployed | Auth (JWT) | Body  | Description                 |
   | ------------------------ |:------:|:--------:|:----------:|:-----:| --------------------------- |
   | api/job/:id                 | GET    |     True | Required   | none  | GET job details by id    |
   | api/saved/:id               | GET    |     True | Required   | none  | GET job details by id    |
   | api/saved/                  | POST   |     True | Required   | none  | GET job details by id    |
   | api/history/                | POST   |     True | Required   | none  | POST job to history      |
   | api/history/                | GET    |     True | Required   | none  | GET all history          |
   | api/history/all             | DELETE |     True | Required   | none  | DELETE all history       |


    