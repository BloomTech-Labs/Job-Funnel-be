const router = require('express').Router();
const bcrypt = require('bcryptjs');
const dbMethods = require('../data/db-model');
const db = require('../data/dbConfig');

// get all users: for debugging, remove when finished
router.get('/users', async (req, res) => {
    try{
        const user = await db('users as u')
            .select('u.*')
        if(user){
            res.status(200).json(user)
        }else{
            console.log('get user 404 error', user);
            res.status(404).json({message: `User with id ${req.user.id} not found.`});
        }
    }catch(err){
        console.log('get users/user/all 500 catch error: ', err);
        res.status(500).json({message: 'Error getting user information.'});
    }
});

module.exports = router;