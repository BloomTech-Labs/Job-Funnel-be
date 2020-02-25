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

 - ### user_jobs
   
   | Path                     | Type   | Deployed | Auth (JWT) | Body  | Description              |
   | ------------------------ |:------:|:--------:|:----------:|:-----:| ------------------------ |
   | saved/              | POST    |     True | Required   | user ID, job ID, status  | POST a saved job to user_jobs  |
   | saved/:id            | GET    |     True | Required   | none  | GET saved user_job by user ID    |
   | saved/:id               | DELETE   |     True | Required   | none  | DELETE saved job from user_job by Job ID    |

 - ### Job_Listings

   
   | Path                     | Type   | Deployed | Auth (JWT) | Body  | Description              |
   | ------------------------ |:------:|:--------:|:----------:|:-----:| ------------------------ |
   | jobs/:id             | GET    |     True | Required   | none  | GET Job Details by Job ID  |


    

