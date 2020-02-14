const router = require('express').Router();
const dbMethods = require('../data/db-model');
const db = require('../data/dbConfig');
const table = 'user_history';



const deleteFunction = job => { 
    //a function that returns a promise
    return Promise.resolve(db('user_history as uvj')
    .where({'uvj.id': job.id})
    .delete()
    .then(res =>{
        return null 
    }))
} 
const updateFunction = (job, index) => { 
    //a function that returns a promise
    return Promise.resolve(db('user_history as uvj')
    .where({'uvj.id': job.id})
    .update({view_number: index+2})
    .then(res =>{
        // console.log('updateFuncWithPromise map success: ', res);
        // console.log('old object: ', order)
        // console.log('new obj test:', {...order, orderedProducts: [...res]})
        return {...job, view_number: index + 2 }
    }))
} 
const asyncPostFunction = async (job, index) => {
    if (index + 2 < 100){
        console.log('updating job: ', job, 'at index: ', index);
        return updateFunction(job, index)
    }
    else {
        console.log('deleting job: ', job, 'at index: ', index);
        return deleteFunction(job);
    }
}
const updateViewNumbers = async (viewedArray) => {
    return Promise.all(viewedArray.map((job, index) => asyncPostFunction(job, index)))
}


// table rows instead
// pull all by user, order by viewID
// add new view with viewID 1
// foreach/for loop starting at index 2 update all remaining views
    // delete any row that has an index > 100

// add job to history
router.post('/', async (req, res) => {
    const {jobID, jobStatus } = req.body;
    try {
        if (!jobID || !jobStatus){
            throw 400;
        }
        const userJobs = await db('user_history as uh').where({ 'uh.user_id': req.user.id })
        .orderBy('view_number', 'asc');
        if (userJobs.length) {
            const updated = await updateViewNumbers(userJobs);
            const added = await db('user_history').insert({ user_id: req.user.id, job_id: jobID, view_number: 1, status: jobStatus });
            added && updated && res.status(201).json({ message: 'Successfully added job to history' });
        } else {
            const added = await db('user_history').insert({ user_id: req.user.id, job_id: jobID, view_number: 1, status: jobStatus });
            res.status(201).json({ message: `Successfully added job id ${jobID} to history`, added: added });
        }
    } catch (err) {
        console.log('viewedJobs post error: ', err);
        switch (err) {
            case 400: res.status(400).json({ message: 'jobID and jobStatus are required', err});
                break;
            default: res.status(500).json({ message: "Error getting user's viewed jobs", err });
                break;
        }
    }
});

// get history
router.get('/', async (req, res) => {
    try {
        const userJobs = await db('user_history as uh').where({ 'uh.user_id': req.user.id })
        .orderBy('view_number', 'asc');
        if (userJobs.length) {
            res.status(200).json({ userJobs });
        } else {
            res.status(200).json({ userJobs, message: `No history found for user with ID ${req.user.id}` });
        }
    } catch (err) {
        console.log('viewedJobs get 500 error: ', err);
        res.status(500).json({ message: "Error getting user's history" });
    }
});

// delete single and update numbers

// delete all
router.delete('/all', async (req, res) => {
    try {
        const userJobs = await db('user_history').where({ user_id: req.user.id }).delete();
        if (userJobs) {
            res.status(200).json({ message: "Successfully deleted user's history" });
        } else {
            throw 404;
        }
    } catch (err) {
        console.log('viewedJobs post error: ', err);
        switch (err) {
            case 404: res.status(404).json({ message: `No history found for user with ID ${req.user.id}` });
                break;
            default: res.status(500).json({ message: "Error getting deleting all of user's history" });
                break;
        }
    }
});


// if job already in history, move it up? or just keep printing it




// get history

// add one/shift down
    // get by user, then pop/push the array
    // if jobid of new job is already in array, pop it out and then push new job in
    // check if history is > 100 and limit there
    // update table with new JSON
    // return jobs ordered by view index and status

// Delete history


module.exports = router;