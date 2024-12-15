const mongoose = require('mongoose');

const EmployeeSchema = new mongoose.Schema({
  firstname: {
    type: String,
    required: true,
  },
  lastname: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
  role: {
    type: String,
    enum: ['Worker', 'Hire'], // Add 'admin' as a valid role here
    required: true,
  },
},
  {
    timestamps: true
  }
);


const EmployeeModel = mongoose.model("employees", EmployeeSchema)

module.exports = EmployeeModel