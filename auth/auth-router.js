const router = require('express').Router();
const bcrypt = require('bcryptjs');
const db = require('../data/dbConfig.js');
const userDb = require('../data/users-model.js');
const generateToken = require('./token.js');

router.post('/register', async (req, res) => {
    const user = {first_name, last_name, email, password, user_type} = req.body;
    console.log('registering ', username);
    for(let val in user){
        if(typeof user[val] === 'string'){
            user[val] = user[val].toLowerCase();
        } 
    };
   
    try{
        if(!(email && password)){
            throw 1
        }

        const foundEmail = await db('users')
        .where({email: user.email})
        .first();

        if(foundEmail){
            throw 2
        }if(!first_name || !last_name){
            throw 3
        }if(!user_type){
            throw 4
        }
        
        const [id] = await userDb.add({...user, password: bcrypt.hashSync(password, 12)});

        const response = await db('users').select('id', 'username').where({id}).first();

        res.status(201).json({id :response.id, username: response.username});
    }catch(err){
        if(err === 1){
            res.status(400).json({message: `Email and password are required.`});
        }else if(err === 2){
            res.status(409).json({message: `There is already an account associated with that email`});
        }else if(err === 3){
            res.status(400).json({message: `First and last names are required`});
        }else if(err === 4){
            res.status(400).json({message: `User type is required`});
        }
        else{
            console.log(err);
            res.status(500).json({message: 'Server could not add user.', error: err});
        }
    }
});

router.post('/login', async (req, res) => {
    const {email, password} = req.body;
    if(email && password){
        const user = await db('users as u').where({'u.email': email.toLowerCase()})
            .select('u.*')
            .first();
        if(user && bcrypt.compareSync(password, user.password)){
            const token = await generateToken(user);
            res.status(200).json({message: `Welcome ${user.name}`, token, user: {...user, password: undefined}});
        }else{
            res.status(403).json({message: 'Invalid email or password'});
        }
    }else{
        res.status(400).json({message: 'Please provide an email and password'});
    }
});

module.exports = router;