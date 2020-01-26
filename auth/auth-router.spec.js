const request = require('supertest');

const server = require('../server.js');
require('dotenv').config();
// const db = require('../data/dbConfig');
// const userDb = require('./users-model');

    
// /api/users/...
describe('auth router', () => {
    // user can update account
    describe('POST /auth/register', () => {
        it('should return status 201 if registered', async () => {
            const res = await request(server).post('/api/auth/register')
            .send({
                email: "testemail22@gmail.com",
                password: "seriously",
                first_name: "jorge",
                last_name: "clooney",
                user_type: "applicant"
            });
            console.log(res.body);
            expect(res.status).toBe(201);
            expect(res.type).toMatch(/json/i);
        })
    })

    // user can login
    describe('POST /auth/login', () => {
        it('should require authorization', async () => {
            const res = await request(server).get('/api/users/user');
            expect(res.status).toBe(400);
            expect(res.body).toEqual({message: 'No token was provided'})
        });
        it('should return status 200 and an object if authenticated', async () => {
            const auth = await request(server).post('/api/auth/login')
            .send({
                email: "testemail22@gmail.com",
                password: "seriously",
            });
            console.log(auth.body);
            expect(auth.status).toBe(200);
            expect(auth.type).toMatch(/json/i);
        })
    });

    // user can delete account
    describe('DELETE /users/user', () => {
        it('should require authorization', async () => {
            const res = await request(server).get('/api/users/user');
            expect(res.status).toBe(400);
            expect(res.body).toEqual({message: 'No token was provided'})
        });

        it('should return status 200 and account should be deleted', async () => {
            const auth = await request(server).post('/api/auth/login')
            .send({
                email: "testemail22@gmail.com",
                password: "seriously",
            });
            const res = await request(server).delete('/api/users/user')
            .send({password: 'seriously'})
            .set({'authorization': auth.body.token});
            console.log(res.body);
            expect(res.status).toBe(200);
            expect(res.type).toMatch(/json/i);
            expect(res.body.message.length).toBeTruthy();
            expect(res.body.message).toBe('User successfully deleted');
        })
})
});