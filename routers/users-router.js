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
//     const { email, first_name, last_name } = req.body;
//     const newValues = { email, first_name, last_name, };
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
//         if(email){
//             const foundEmail = await db('users')
//             .where({email: newValues.email})
//             .first();

//             if(foundEmail){
//                 throw 2
//             }
//         }

//         const user = await dbMethods.findById(table, req.user.id);

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
//             throw 3
//         }
//     }catch(err){
//         if(err === 1){
//             res.status(400).json({message: 'Current password is required.'});
//         }if(err === 2){
//             res.status(409).json({message: `Email '${email}' is already in use.`});
//         }if(err === 3){
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

// delete by token
router.delete('/user', async (req, res) => {
    const {password} = req.body;
    try{
        if(password){
            const user = await dbMethods.findById(table, req.user.id);
            if(user && bcrypt.compareSync(password, user.password)){
                await dbMethods.remove(table, req.user.id);
                res.status(200).json({message: 'User successfully deleted'});
            }else{
                throw 1
            }
        }else{
            throw 2
        }
    }catch(err){
        if(err === 1){
            res.status(403).json({message: 'Invalid credentials.'});
        }else if(err === 2){
            res.status(400).json({message: 'Please provide password.'});
        }
        res.status(500).json({message: 'Error deleting user.'});
    }
});

module.exports = router;