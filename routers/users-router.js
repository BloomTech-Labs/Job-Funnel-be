const router = require('express').Router();
const bcrypt = require('bcryptjs');
const dbMethods = require('../data/db-model');
const db = require('../data/dbConfig');
const table = 'users';

// get by token
router.get('/user', async (req, res) => {
    try{
        const user = await dbMethods.findById(table, req.user.id);
        if(user){
            res.status(200).json({...user, password: null})
        }else{
            console.log('Get user by token 404 error', user);
            res.status(404).json({message: `User with id ${req.user.id} not found.`});
        }
        
    }catch(err){
        console.log('Get user by token 500 error: ', err);
        res.status(500).json({message: 'Error getting user information.'});
    }
});

// get by id
router.get('/:id', async (req, res) => {
    try{
        const user = await dbMethods.findById(table, req.params.id);
        if(user){
            res.status(200).json({...user, password: null});
        }else{
            throw 404;
        }
    }catch(err){
        console.log(err);
        switch(err){
            case 404: res.status(404).json({message: 'User with specified ID not found'});
                break;
            default: res.status(500).json({message: 'Error getting user information'});
                break;
        }
    }
});

// put by token
// router.put('/user', async (req, res) => {
//     const { email, name, } = req.body;
//     const newValues = {isFarmer, farmID, email, username, name, zipCode, addressStreet, addressCity, addressState };
//     let { password, newPassword } = req.body;
//     console.log('updating user- newValues: ', newValues);
//     for(let val in newValues){
//         if(typeof newValues[val] === 'string'){
//             newValues[val] = newValues[val].toLowerCase();
//         } 
//     };
   
//     try{
//         if(!password){
//             throw 1
//         }
//         if(username){
//             if(!(/^[a-z][a-z0-9_]*$/i.test(username))){
//                 throw 2
//             }
//             const foundUsername = await db('users')
//             .where({username: newValues.username})
//             .first();

//             if(foundUsername){
//                 throw 3
//             }
//         }
//         if(email){
//             const foundEmail = await db('users')
//             .where({email: newValues.email})
//             .first();

//             if(foundEmail){
//                 throw 4
//             }
//         }

//         const user = await db('users')
//             .where({id: req.user.id})
//             .first();

//         if(user && bcrypt.compareSync(password, user.password)){
//             if(newPassword){
//                 password = bcrypt.hashSync(newPassword, 12);
//             }
//             const updated = await userDb.update(req.user.id, newPassword ? {...newValues, password} : {...newValues});
//             if(updated){
//                 const updatedUser = await userDb
//                 .findBy({id: req.user.id})
//                 .select('id', 'username', 'email', 'name',);
                
//                 res.status(200).json({...updatedUser});
//             }else{
//                 throw 'User could not be updated'
//             }
//         }else{
//             throw 5
//         }
//     }catch(err){
//         if(err === 1){
//             res.status(400).json({message: 'Current password is required.'});
//         }if(err === 2){
//             res.status(400).json({message: 'Username must only contain characters A-Z, _, and 0-9. Username must start with a letter.'});
//         }if(err === 3){
//             res.status(409).json({message: `Username '${username}' is already in use.`});
//         }if(err === 4){
//             res.status(409).json({message: `Email '${email}' is already in use.`});
//         }if(err === 5){
//             res.status(403).json({message: 'Invalid credentials'});
//         }

//         // if(err === 1){
//         //     res.status(400).json({message: `Email, username and password are required.`});
//         // }
        
        
//         else{
//             console.log(err);
//             res.status(500).json({message: 'Server could not update user.', error: err});
//         }
//     }
// });

// // delete by token
// router.delete('/user', async (req, res) => {
//     const {password} = req.body;
//     // console.log('password', password);
//     // console.log(req.body);
//     // console.log(req.body.password);
//     try{
//         if(password){
//             const user = await db('users')
//             .where({id: req.user.id})
//             .first();

//             if(user && bcrypt.compareSync(password, user.password)){
//                 await userDb.remove(req.user.id);
//                 res.status(200).json({message: 'User successfully deleted'});
//             }else{
//                 throw 1
//             }
//         }else{
//             throw 2
//         }
//     }catch(err){
//         if(err === 1){
//             res.status(403).json({message: 'Invalid credentials.'});
//         }else if(err === 2){
//             res.status(400).json({message: 'Please provide password.'});
//         }
//         res.status(500).json({message: 'Error deleting user.'});
//     }
// });


// // get all users: for debugging, remove when finished
// router.get('/user/all', async (req, res) => {
//     try{
//         const user = await db('users as u')
//             .select('u.*')
//         if(user){
//             res.status(200).json(user)
//         }else{
//             console.log('get user 404 error', user);
//             res.status(404).json({message: `User with id ${req.user.id} not found.`});
//         }
        
//     }catch(err){
//         console.log(err);
//         res.status(500).json({message: 'Error getting user information.'});
//     }
// });

module.exports = router;