Endpoints:
BaseURL:
https://quickhire.herokuapp.com/api/

- ### users
    | Path              | Type   | Deployed | Auth (JWT) | Body               | Description                   |
    | ----------------- |:------:|:--------:|:----------:|:------------------:| ----------------------------- |
    | /auth/register    | POST   |     True | None       | User               | Create new user               |
    | /auth/login       | POST   |     True | None       | email, password    | Log in, get token             |
    | /users/:id        | GET    |     True | Required   | None               | Get user by param ID          |
    | /users/user       | GET    |     True | Required   | None               | Get user by token             |
    | /users/user       | PUT    |    False | Required   | User, password     | Update user by token          |
    | /users/user       | DELETE |     True | Required   | password           | Delete user by token          |
    | /users/user/all   | GET    |     True | Required   | None               | Debug only, return all users  |
    #### Future:
    >tbd