// const express = require('express');
// const router = express.Router();
// const { postJob, getall } = require('../controllers/postjob.controller');

// // Route to post a job, handled by the controller
// router.post('/hireexpert', postJob);
// router.get('/all', getall);

// module.exports = router;








const express = require('express');
const router = express.Router();
const { postJob, getAllJobs, updateJob, deleteJob } = require('../controllers/postjob.controller');
// const jobValidation = require('../middleware/jobValidation'); // Ensure this path is correct

// Route to post a job
router.post('/hireexpert', postJob); // Apply validation middleware here

// Route to get all jobs
router.get('/all', getAllJobs);

// Route to update a job by ID
router.put('/update/:id', updateJob); // Optionally apply validation

// Route to delete a job by ID
router.delete('/delete/:id', deleteJob);

module.exports = router;
