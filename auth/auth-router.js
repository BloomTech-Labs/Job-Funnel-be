const router = require('express').Router();
const bcrypt = require('bcryptjs');
const db = require('../data/db-config.js');
const userDb = require('../data/users-model.js');
const {generateToken} = require('./token.js');

router.post('/register', async (req, res) => {
    const user = {isFarmer, farmID, email, username, password, name, zipCode } = req.body;
    console.log('registering ', username);
    for(let val in user){
        if(typeof user[val] === 'string'){
            user[val] = user[val].toLowerCase();
        } 
    };
   
    try{
        if(!(username && password && email)){
            throw 1
        }else if(!(/^[a-z][a-z0-9_]*$/i.test(username))){
            throw 2
        }

        const foundUsername = await db('users')
        .where({username: user.username})
        .first();

        if(foundUsername){
            throw 3
        }

        const foundEmail = await db('users')
        .where({email: user.email})
        .first();

        if(foundEmail){
            throw 4
        }if(!farmID){
            throw 5
        }if(!name){
            throw 6
        }if(!zipCode){
            throw 7
        }if(zipCode.length !== 5){
            throw 8
        }if (isNaN(zipCode)){
            throw 9
        }
        if (isFarmer === undefined){
            throw 10
        }
        
        const [id] = await userDb.add({...user, password: bcrypt.hashSync(password, 12)});

        const response = await db('users').select('id', 'username').where({id}).first();

        res.status(201).json({id :response.id, username: response.username});
    }catch(err){
        if(err === 1){
            res.status(400).json({message: `Email, username and password are required.`});
        }else if(err === 2){
            res.status(400).json({message: 'Username must only contain characters A-Z, _, and 0-9. Username must start with a letter.'});
        }else if(err === 3){
            res.status(409).json({message: `Username '${user.username}' is already in use.`});
        }else if(err === 4){
            res.status(409).json({message: `There is already an account associated with that email`});
        }else if(err === 5){
            res.status(400).json({message: `Farm ID is required`});
        }else if(err === 6){
            res.status(400).json({message: `Name is required`});
        }else if(err === 7){
            res.status(400).json({message: `Zip code is required`});
        }else if(err === 8){
            res.status(400).json({message: `Zip code must be five digits.`});
        }else if(err === 9){
            res.status(400).json({message: `Zip code must be a number.`});
        }else if(err === 10){
            res.status(400).json({message: `bool isFarmer is required`});
        }else{
            console.log(err);
            res.status(500).json({message: 'Server could not add user.', error: err});
        }
    }
});

router.post('/login', async (req, res) => {
    const {username, password} = req.body;
    if(username && password){
        const user = await db('users as u').where({'u.username': username.toLowerCase()})
            .leftJoin('farms as f', 'u.id', 'f.id')
            .select('u.*', 'f.name as farmName')
            .first();
        if(user && bcrypt.compareSync(password, user.password)){
            const token = await generateToken(user);
            res.status(200).json({message: `Welcome ${user.name}`, token, user: {...user, password: undefined}});
        }else{
            res.status(403).json({message: 'Invalid username or password'});
        }
    }else{
        res.status(400).json({message: 'Please provide a username and password'});
    }
});

module.exports = router;