
[![Maintainability](https://api.codeclimate.com/v1/badges/8ae256b233732b92ab7f/maintainability)](https://codeclimate.com/github/Lambda-School-Labs/Job-Funnel-be/maintainability)

[![Test Coverage](https://api.codeclimate.com/v1/badges/8ae256b233732b92ab7f/test_coverage)](https://codeclimate.com/github/Lambda-School-Labs/Job-Funnel-be/test_coverage)

# API Documentation

#### Backend deployed to [Heroku](https://quickhire.herokuapp.com/) <br>
[Table Structure](https://dbdesigner.page.link/DjSqHkGY7STm3rf76)


## Getting started

To get the server running locally:


- Clone this repo
- **npm i** to install all required dependencies
- **knex migrate:latest** to run migrations.
- **knex seed:run** to seed database for local api calls 
- **npm run server** to start the local server
- **npm run test** to start server using testing environment


### Backend framework 

#### Node/Express

-  In Lambda, we learned how to use node/express to build out our database models. It allowed us to effectively and efficiently create all of the endpoints that we needed, while keeping things simple for the next group of developers that are in charge of adding onto Quickhire down the road. 

#### Knex
- We used Knex to be able to efficiently build out our queries. 
   
####  JsonWebToken
- JavaScript testing library, that allowed us to simply and effectively test our code on the both the front and back-end. 

####  Cloudinary
- Cloudinary allowed us to easily implement, edit, and delete user profile pictures. 

#### PostgreSQL/Sqlite3
- Not a framework, but we used PostgreSQL for our production DB, and used sqlite3 for both development, and staging.


## Endpoints


- ### users
    | Path              | Type   | Deployed | Auth (JWT) | Body               | Description          |
    | ----------------- |:------:|:--------:|:----------:|:------------------:| -------------------- |
    | /auth/register    | POST   |     True | None       | User               | Create new user      |
    | /auth/login       | POST   |     True | None       | email, password    | Log in, get token    |
    | /users/:id        | GET    |     True | Required   | None               | Get user by param ID |
    | /users/user       | GET    |     True | Required   | None               | Get user by token    |
    | /users/user       | PUT    |     True | Required   | User, password     | Update user by token |
    | /users/user       | DELETE |     True | Required   | password           | Delete user by token |
    

---
#### users format

```
{
 first_name: string
 last_name: string
 email: string
 password: string
 job_id: integer
 company_id: integer
 education: string
 about: string 
}
```

---

#### For more docs on the endpoints and testing commands see the [Documentation](https://github.com/Lambda-School-Labs/Job-Funnel-be/tree/master/Documentation) folder.

---

## Link to postman collection to view working API End-Points 

[![Run in Postman](https://run.pstmn.io/button.svg)](https://app.getpostman.com/run-collection/573ca210c5481c7f4047)


##  Environment Variables

In order for the app to function correctly, the user must set up their own environment variables.

create a .env file that includes the following:

```
    *  NODE_ENV - set to "development" until ready for "production"
    *  JWT_SECRET - you can pick any secret for the .env file
    *  CLOUDINARY_API_KEY - Required to be able to use cloudinary as we did 
    *  CLOUDINARY_API_SECRET - Required to be able to use cloudinary as we did 
    *  DATABASE_URL - Connect your created DB
```
    
## Contributing

When contributing to this repository, please first discuss the change you wish to make via issue, email, or any other method with the owners of this repository before making a change.

Please note we have a [code of conduct](./code_of_conduct.md). Please follow it in all your interactions with the project.

### Issue/Bug Request

 **If you are having an issue with the existing project code, please submit a bug report under the following guidelines:**
 - Check first to see if your issue has already been reported.
 - Check to see if the issue has recently been fixed by attempting to reproduce the issue using the latest master branch in the repository.
 - Create a live example of the problem.
 - Submit a detailed bug report including your environment & browser, steps to reproduce the issue, actual and expected outcomes,  where you believe the issue is originating from, and any potential solutions you have considered.

### Feature Requests

We would love to hear from you about new features which would improve this app and further the aims of our project. Please provide as much detail and information as possible to show us why you think your new feature should be implemented.

### Pull Requests

If you have developed a patch, bug fix, or new feature that would improve this app, please submit a pull request. It is best to communicate your ideas with the developers first before investing a great deal of time into a pull request to ensure that it will mesh smoothly with the project.

Remember that this project is licensed under the MIT license, and by submitting a pull request, you agree that your work will be, too.

#### Pull Request Guidelines

- Ensure any install or build dependencies are removed before the end of the layer when doing a build.
- Update the README.md with details of changes to the interface, including new plist variables, exposed ports, useful file locations and container parameters.
- Ensure that your code conforms to our existing code conventions and test coverage.
- Include the relevant issue number, if applicable.
- You may merge the Pull Request in once you have the sign-off of two other developers, or if you do not have permission to do that, you may request the second reviewer to merge it for you.

### Attribution

These contribution guidelines have been adapted from [this good-Contributing.md-template](https://gist.github.com/PurpleBooth/b24679402957c63ec426).

## Documentation
[Front-end github Read-Me](https://github.com/Lambda-School-Labs/Job-Funnel-fe/blob/master/README.md)
