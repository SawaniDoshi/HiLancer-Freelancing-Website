// // Import the PostJob model
// const PostJob=require("../model/PostJob")
// // Controller to handle job posting
// exports.postJob = async (req, res) => {
//   try {
//     const { Jobtitle, Jobdesc, ReqSkills, Budget, Date } = req.body;

//     // Validate request body
//     if (!Jobtitle || !Jobdesc || !ReqSkills || !Budget || !Date) {
//       return res.status(400).json({ message: 'All fields are required' });
//     }

//     // Create a new job instance
//     const newJob = new PostJob({
//       Jobtitle,
//       Jobdesc,
//       ReqSkills,
//       Budget,
//       Date,
//     });

//     // Save the job to the database
//     await newJob.save();

//     // Send a success response
//     res.status(201).json({ message: 'Job posted successfully', job: newJob });
//   } catch (err) {
//     // Handle errors
//     res.status(500).json({ message: 'Failed to post job', error: err.message });
//   }
// };

// exports.getall = async (req, res) => {
//   try {
//     const jobs = await PostJob.find(); // Use the PostJob model to get all jobs
//     res.json(jobs); // Send the jobs as a JSON response
//   } catch (err) {
//     res.status(500).json({ message: "Error fetching jobs", error: err.message });
//   }
// };











// Import the PostJob model
const PostJob = require("../model/PostJob");

// Controller to handle job posting
exports.postJob = async (req, res) => {
  try {
    const { Jobtitle, Jobdesc, ReqSkills, Budget, Date } = req.body;

    // Validate request body
    if (!Jobtitle || !Jobdesc || !ReqSkills || !Budget || !Date) {
      return res.status(400).json({ message: 'All fields are required' });
    }

    // Create a new job instance
    const newJob = new PostJob({
      Jobtitle,
      Jobdesc,
      ReqSkills,
      Budget,
      Date,
    });

    // Save the job to the database
    await newJob.save();

    // Send a success response
    res.status(201).json({ message: 'Job posted successfully', job: newJob });
  } catch (err) {
    // Handle errors
    res.status(500).json({ message: 'Failed to post job', error: err.message });
  }
};

// Controller to get all jobs
exports.getAllJobs = async (req, res) => {
  try {
    const jobs = await PostJob.find(); // Use the PostJob model to get all jobs
    res.status(200).json(jobs); // Send the jobs as a JSON response
  } catch (err) {
    res.status(500).json({ message: "Error fetching jobs", error: err.message });
  }
};

// Controller to update a job by ID
exports.updateJob = async (req, res) => {
  try {
    const jobId = req.params.id;
    const { Jobtitle, Jobdesc, ReqSkills, Budget, Date } = req.body;

    // Validate request body
    if (!Jobtitle || !Jobdesc || !ReqSkills || !Budget || !Date) {
      return res.status(400).json({ message: 'All fields are required' });
    }

    // Find the job by ID and update it
    const updatedJob = await PostJob.findByIdAndUpdate(
      jobId,
      { Jobtitle, Jobdesc, ReqSkills, Budget, Date },
      { new: true } // Return the updated document
    );

    if (!updatedJob) {
      return res.status(404).json({ message: 'Job not found' });
    }

    // Send a success response
    res.status(200).json({ message: 'Job updated successfully', job: updatedJob });
  } catch (err) {
    // Handle errors
    res.status(500).json({ message: 'Failed to update job', error: err.message });
  }
};

// Controller to delete a job by ID
exports.deleteJob = async (req, res) => {
  try {
    const jobId = req.params.id;

    // Find the job by ID and delete it
    const deletedJob = await PostJob.findByIdAndDelete(jobId);

    if (!deletedJob) {
      return res.status(404).json({ message: 'Job not found' });
    }

    // Send a success response
    res.status(200).json({ message: `Job with ID ${jobId} deleted successfully` });
  } catch (err) {
    // Handle errors
    res.status(500).json({ message: 'Failed to delete job', error: err.message });
  }
};














