const router = require('express').Router();
const bcrypt = require('bcryptjs');
const cloudinary = require('cloudinary').v2;
const dbMethods = require('../data/db-model');
const db = require('../data/dbConfig');
const table = 'users';

// get by token
router.get('/user', async (req, res) => {
    try {
        const user = await dbMethods.findById(table, req.user.id);
        if (user) {
            res.status(200).json({ ...user, password: null })
        } else {
            console.log('Get user by token 404 error', user);
            res.status(404).json({ message: `User with id ${req.user.id} not found.` });
        }

    } catch (err) {
        console.log('Get user by token 500 error: ', err);
        res.status(500).json({ message: 'Error getting user information.' });
    }
});

// get by id
router.get('/:id', async (req, res) => {
    try {
        const user = await dbMethods.findById(table, req.params.id);
        if (user) {
            res.status(200).json({ ...user, password: null });
        } else {
            throw 404;
        }
    } catch (err) {
        console.log(err);
        switch (err) {
            case 404: res.status(404).json({ message: 'User with specified ID not found' });
                break;
            default: res.status(500).json({ message: 'Error getting user information' });
                break;
        }
    }
});

// put by token
router.put('/user', async (req, res) => {
    const { email, first_name, last_name } = req.body;
    const newValues = { email, first_name, last_name, };
    let { password, newPassword } = req.body;
    console.log('updating user- newValues: ', newValues);
    for (let val in newValues) {
        if (typeof newValues[val] === 'string') {
            newValues[val] = newValues[val].toLowerCase();
        }
    };

    try {
        if (!password) {
            throw 1
        }
        if (email) {
            const foundEmail = await db('users')
                .where({ email: newValues.email })
                .first();

            if (foundEmail) {
                throw 2
            }
        }

        const user = await dbMethods.findById(table, req.user.id);

        if (user && bcrypt.compareSync(password, user.password)) {
            if (newPassword) {
                password = bcrypt.hashSync(newPassword, 12);
            }
            const updated = await dbMethods.update(table, req.user.id, newPassword ? { ...newValues, password } : { ...newValues });
            if (updated) {
                const updatedUser = await dbMethods
                    .findBy(table, { id: req.user.id })
                    .select("*");

                res.status(200).json({ ...updatedUser, password: null });
            } else {
                throw 'User could not be updated'
            }
        } else {
            throw 3
        }
    } catch (err) {
        if (err === 1) {
            res.status(400).json({ message: 'Current password is required.' });
        } if (err === 2) {
            res.status(409).json({ message: `Email '${email}' is already in use.` });
        } if (err === 3) {
            res.status(403).json({ message: 'Invalid credentials' });
        }

        // if(err === 1){
        //     res.status(400).json({message: `Email, and password are required.`});
        // }


        else {
            console.log(err);
            res.status(500).json({ message: 'Server could not update user.', error: err });
        }
    }
});

// delete by token
router.delete('/user', async (req, res) => {
    const { password } = req.body;
    try {
        if (password) {
            const user = await dbMethods.findById(table, req.user.id);
            if (user && bcrypt.compareSync(password, user.password)) {
                await dbMethods.remove(table, { id: req.user.id });
                res.status(200).json({ message: 'User successfully deleted' });
            } else {
                throw 1
            }
        } else {
            throw 2
        }
    } catch (err) {
        if (err === 1) {
            res.status(403).json({ message: 'Invalid credentials.' });
        } else if (err === 2) {
            res.status(400).json({ message: 'Please provide password.' });
        }
        console.log('delete users/user 500 error: ', err)
        res.status(500).json({ message: 'Error deleting user.' });
    }
});





//upload profile pictures to cloudinary
cloudinary.config({
    cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
    api_key: process.env.CLOUDINARY_API_KEY,
    api_secret: process.env.CLOUDINARY_API_SECRET,
});

router.put('/user/picture', (req, res) => {
    console.log(req.files);

    if (req.files && req.files.image){
        const file = req.file.image;
        cloudinary.uploader.upload(file.tempFilePath, async (err, result) => {
            try{
                const user = await dbMethods.findById(table, req.user.id);
                if (user) {
                    const image = await db('users')
                    .where({ id: req.user.id })
                    .update({ profile_img: result.secure_url });
    
                    if(image){
                        res.status(201).json({profile_img: result.secure_url});
                    }else{
                        throw 'Image could not be added'
                    }
                } else {
                    console.log('Get user by token 404 error', user);
                    res.status(404).json({ message: `User with id ${req.user.id} not found.` });
                }
            }catch(err){
                console.log(err);
                res.status(500).json({message: 'Error adding profile picture'});
            }
        });
    }
    else{
        res.status(400).json({message: 'No file provided'});
    }
});

router.delete('/user/picture', async (req, res) => {
    try{
        const user = await dbMethods.findById(table, req.user.id);
        if (user) {
            const image = await db('users')
            .where({ id: req.user.id })
            .update({ profile_img: '' });

            if(image){
                res.status(200).json({message: `Profile picture for user id ${req.user.id} successfully deleted`});
            }else{
                throw 'Image could not be deleted'
            }
        } else {
            console.log('Get user by token 404 error', user);
            res.status(404).json({ message: `User with id ${req.user.id} not found.` });
        }
    }catch(err){
        console.log(err);
        res.status(500).json({message: 'Error deleting profile picture.'})
    }
});
































module.exports = router;