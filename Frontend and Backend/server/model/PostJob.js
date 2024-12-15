const mongoose = require('mongoose');

const postJobSchema = new mongoose.Schema({
  Jobtitle: {
    type: String,
    required: true,
  },
  Jobdesc: {
    type: String,
    required: true,
  },
  ReqSkills: {
    type: String,
    required: true,
  },
  Budget: {
    type: String,
    required: true,
  },
  Date: {
    type: String,
    required: true,
  }
});

const PostJob = mongoose.model("jobpost", postJobSchema);
module.exports = PostJob;
