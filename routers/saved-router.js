const router = require('express').Router();
const jobs = require('../data/db-model');
const db = require('../data/dbConfig');



router.post('/', (req, res) => {
    const input = req.body
    console.log(req.body)
    if(input.user_id && input.job_id && input.status){
        jobs.saveJob(input)
        .then(job => {
            res.status(201).json(job)
        })
        .catch(err => {
            console.error(err)
            res.status(500).json({message: "failed to save job"})
        })
    } else if (!input.user_id){
        res.status(400).json({message: "missing user id"})
    } else if(!input.job_id) {
        res.status(400).json({message: "missing job id"})
    } else if(!input.status) {
        res.status(400).json({message: "missing job status"})
    } else if(!input.job_id && !input.user_id && !input.status){
        res.status(400).json({message: "missing both job and user id"})
    }
})

router.get('/:id', (req, res) => {
    const user_id = req.params.id;
    jobs.findSaved(user_id)
    .then( id => {
        if (id) {
            res.status(200).json(id)
        } else {
            res.status(404).json({ message: "The user with the specified ID does not exist." })
        }
    })
    .catch( error => {
        console.log(error);
        res.status(500).json( { error: "The user's job information could not be retrieved." })
    })
})

router.delete('/:id', (req, res) => {
   const id = req.params.id;
   jobs.clearSaved(id)
    .then( id => {
        if (id) {
            res.status(200).json({message: "The saved job was successfully deleted."})
        } else {
            res.status(404).json({ message: "The job with the specified ID could not be found." })
        }
    })
    .catch(error => {
        console.log(error)
        res.status(500).json({ error: "The job could not be removed" })
    })
})




module.exports = router;