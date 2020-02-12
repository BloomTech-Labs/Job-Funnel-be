const router = require('express').Router();
const db = require('../data/dbConfig');


// get all job listings
router.get('/:id', async (req, res) => {
    try{
        const result = await db('job_listings as j')
        .where({ 'j.id': req.params.id })
            .leftJoin('job_companies as jc', 'jc.job_id', 'j.id')
            .leftJoin('companies as c', 'c.id', 'jc.company_id')
            .leftJoin('job_descriptions as jd', 'jd.job_id', 'j.id')
            .leftJoin('job_locations as jl', 'jl.job_id', 'j.id')
            .leftJoin('locations as l', 'l.id', 'jl.location_id')
            .leftJoin('job_links as links', 'links.job_id', 'j.id')
            .select('j.*','c.name as companyName', 'jd.description as description', 
            'l.city as city', 'l.state_province as stateOrProvince', 'l.country as country', 'links.external_url as testexternal_url').limit(100)
            .first()
        if(result){
            res.status(200).json(result)
        }else{
            console.log('get all job listings 404 error', result);
            res.status(404).json({message: `Job not found.`});
        }
    }catch(err){
        console.log('get /debug/job_listings 500 catch error: ', err);
        res.status(500).json({message: 'Error getting job listing.'});
    }
});

// Post Job to Saved Jobs
// router.post('/saved', async (req, res) => {
//     const { jobID, jobStatus } = req.body;
//     console.log(req.body);
// })



// router.post('/', restricted, (req, res) => {
//     const input = req.body;

//     if(input.name && input.description && input.user_id && input.date) {
//         Workouts.add(input)
//         .then(workout => {
//             res.status(201).json(workout)
//         })
//         .catch(error => {
//             console.log(error)
//             res.status(500).json({message: "failed to create a new workout"})
//         })
//     } else {
//         res.status(400).json({message: "please make sure you fill out all of the required fields"})
//     }
  
  
// })



  
module.exports = router;


  