import React, { useState } from 'react';

function Task2() {
  const [employees, setEmployees] = useState([
    { firstName: 'John', lastName: 'Doe', salary: 5000, gender: 'male' },
    { firstName: 'Jane', lastName: 'Doe', salary: 6000, gender: 'female' },
    { firstName: 'Bob', lastName: 'Smith', salary: 4500, gender: 'male' },
  ]);
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    salary: '',
    gender: 'male',
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const { firstName, lastName, salary, gender } = formData;
    const newEmployee = { firstName, lastName, salary: Number(salary), gender };
    setEmployees([...employees, newEmployee]);
    setFormData({ firstName: '', lastName: '', salary: '', gender: 'male' });
  };

  return (
    <div>
      <h1>Employees</h1>
      <table>
        <thead>
          <tr>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Salary</th>
            <th>Gender</th>
          </tr>
        </thead>
        <tbody>
          {employees.map((employee, index) => (
            <tr key={index}>
              <td>{employee.firstName}</td>
              <td>{employee.lastName}</td>
              <td>{employee.salary}</td>
              <td>{employee.gender}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <h2>Add Employee</h2>
      <form onSubmit={handleSubmit}>
        <label htmlFor="firstName">First Name:</label>
        <input type="text" name="firstName" value={formData.firstName} onChange={handleChange} />
        <label htmlFor="lastName">Last Name:</label>
        <input type="text" name="lastName" value={formData.lastName} onChange={handleChange} />
        <label htmlFor="salary">Salary:</label>
        <input type="number" name="salary" value={formData.salary} onChange={handleChange} />
        <label htmlFor="gender">Gender:</label>
        <select name="gender" value={formData.gender} onChange={handleChange}>
          <option value="male">Male</option>
          <option value="female">Female</option>
        </select>
        <button type="submit">Add</button>
      </form>
    </div>
  );
}

export default Task2;
