const express = require('express');
const mongoose = require('mongoose');
const Employee = require('./model/employeSchema');

const app = express();
const PORT = 8000;

mongoose.connect('mongodb://localhost:27017/employeeDetails', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

app.get('/empSchema', async (req, res) => {
  try {
    const employees = await Employee.find({});
    

    const formattedData = employees.map(employee => 
      `emp-cod: ${employee.emp_code}, Empname: ${employee.emp_name}, Salary: ${employee.salary}`
    ).join('\n');


    res.type('text').send(formattedData);
  } catch (error) {
    console.error('Error fetching schema:', error);
    res.status(500).send('Internal Server Error');
  }
});

app.listen(PORT, () => {
  console.log(`Server is running on PORT : ${PORT}`);
});
