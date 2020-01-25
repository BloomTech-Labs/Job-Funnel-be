const router = require('express').Router();
const db = require('../data/dbConfig');

// This router is for debugging to quickly pull all data from each table. Disable when finished debugging.

// get all companies
router.get('/companies', async (req, res) => {
    try{
        const result = await db('companies as u')
            .select('u.*')
        if(result){
            res.status(200).json(result)
        }else{
            console.log('get all companies 404 error', result);
            res.status(404).json({message: `Companies not found.`});
        }
    }catch(err){
        console.log('get /debug/companies 500 catch error: ', err);
        res.status(500).json({message: 'Error getting all companies.'});
    }
});
// get all locations
router.get('/locations', async (req, res) => {
    try{
        const result = await db('locations as u')
            .select('u.*')
        if(result){
            res.status(200).json(result)
        }else{
            console.log('get all locations 404 error', result);
            res.status(404).json({message: `Locations not found.`});
        }
    }catch(err){
        console.log('get /debug/locations 500 catch error: ', err);
        res.status(500).json({message: 'Error getting all locations.'});
    }
});
// get all users
router.get('/users', async (req, res) => {
    try{
        const result = await db('users as u')
            .select('u.*')
        if(result){
            res.status(200).json(result)
        }else{
            console.log('get all users 404 error', result);
            res.status(404).json({message: `Users not found.`});
        }
    }catch(err){
        console.log('get /debug/users 500 catch error: ', err);
        res.status(500).json({message: 'Error getting all users.'});
    }
});
// get all skills
router.get('/skills', async (req, res) => {
    try{
        const result = await db('skills as u')
            .select('u.*')
        if(result){
            res.status(200).json(result)
        }else{
            console.log('get all skills 404 error', result);
            res.status(404).json({message: `Skills not found.`});
        }
    }catch(err){
        console.log('get /debug/skills 500 catch error: ', err);
        res.status(500).json({message: 'Error getting all skills.'});
    }
});
// get all user skills
router.get('/user_skills', async (req, res) => {
    try{
        const result = await db('user_skills as u')
            .select('u.*')
        if(result){
            res.status(200).json(result)
        }else{
            console.log('get all user skills 404 error', result);
            res.status(404).json({message: `User skills not found.`});
        }
    }catch(err){
        console.log('get /debug/user_skills 500 catch error: ', err);
        res.status(500).json({message: 'Error getting all user skills.'});
    }
});
// get all job listings
router.get('/job_listings', async (req, res) => {
    try{
        const result = await db('job_listings as u')
            .select('u.*')
        if(result){
            res.status(200).json(result)
        }else{
            console.log('get all job listings 404 error', result);
            res.status(404).json({message: `Job listings not found.`});
        }
    }catch(err){
        console.log('get /debug/job_listings 500 catch error: ', err);
        res.status(500).json({message: 'Error getting all job listings.'});
    }
});
// get all job companies
router.get('/job_companies', async (req, res) => {
    try{
        const result = await db('job_companies as u')
            .select('u.*')
        if(result){
            res.status(200).json(result)
        }else{
            console.log('get all job companies 404 error', result);
            res.status(404).json({message: `Job companies not found.`});
        }
    }catch(err){
        console.log('get /debug/job_companies 500 catch error: ', err);
        res.status(500).json({message: 'Error getting all job companies.'});
    }
});
// get all job descriptions
router.get('/job_descriptions', async (req, res) => {
    try{
        const result = await db('job_descriptions as u')
            .select('u.*')
        if(result){
            res.status(200).json(result)
        }else{
            console.log('get all job descriptions 404 error', result);
            res.status(404).json({message: `Job descriptions not found.`});
        }
    }catch(err){
        console.log('get /debug/job_descriptions 500 catch error: ', err);
        res.status(500).json({message: 'Error getting all job descriptions.'});
    }
});
// get all job links
router.get('/job_links', async (req, res) => {
    try{
        const result = await db('job_links as u')
            .select('u.*')
        if(result){
            res.status(200).json(result)
        }else{
            console.log('get all job_links 404 error', result);
            res.status(404).json({message: `job_links not found.`});
        }
    }catch(err){
        console.log('get /debug/job_links 500 catch error: ', err);
        res.status(500).json({message: 'Error getting all job_links.'});
    }
});
// get all job keyphrases
router.get('/job_keyphrases', async (req, res) => {
    try{
        const result = await db('job_keyphrases as u')
            .select('u.*')
        if(result){
            res.status(200).json(result)
        }else{
            console.log('get all job_keyphrases 404 error', result);
            res.status(404).json({message: `job_keyphrases not found.`});
        }
    }catch(err){
        console.log('get /debug/job_keyphrases 500 catch error: ', err);
        res.status(500).json({message: 'Error getting all job_keyphrases.'});
    }
});
// get all user jobs
router.get('/user_jobs', async (req, res) => {
    try{
        const result = await db('user_jobs as u')
            .select('u.*')
        if(result){
            res.status(200).json(result)
        }else{
            console.log('get all user_jobs 404 error', result);
            res.status(404).json({message: `user_jobs not found.`});
        }
    }catch(err){
        console.log('get /debug/user_jobs 500 catch error: ', err);
        res.status(500).json({message: 'Error getting all user_jobs.'});
    }
});
// get all job locations
router.get('/job_locations', async (req, res) => {
    try{
        const result = await db('job_locations as u')
            .select('u.*')
        if(result){
            res.status(200).json(result)
        }else{
            console.log('get all job_locations 404 error', result);
            res.status(404).json({message: `job_locations not found.`});
        }
    }catch(err){
        console.log('get /debug/job_locations 500 catch error: ', err);
        res.status(500).json({message: 'Error getting all job_locations.'});
    }
});

module.exports = router;