const mongoose = require('mongoose');

const employeeSchema = new mongoose.Schema({
  emp_code: Number,
  emp_name: String,
  salary: Number,
});

const Employee = mongoose.model('Employee', employeeSchema);

module.exports = Employee;
