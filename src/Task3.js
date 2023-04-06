import React, { useState } from "react";

const employees = [
  { id: 1, firstName: "John", lastName: "Doe", salary: 5000 },
  { id: 2, firstName: "Jane", lastName: "Doe", salary: 6000 },
  { id: 3, firstName: "Bob", lastName: "Smith", salary: 7000 },
  { id: 4, firstName: "Alice", lastName: "Jones", salary: 8000 },
  { id: 5, firstName: "Tom", lastName: "Wilson", salary: 9000 },
  { id: 6, firstName: "Kate", lastName: "Brown", salary: 10000 },
  { id: 7, firstName: "Mike", lastName: "Taylor", salary: 11000 },
  { id: 8, firstName: "Mary", lastName: "Johnson", salary: 12000 },
  { id: 9, firstName: "Peter", lastName: "Davis", salary: 13000 },
  { id: 10, firstName: "Sara", lastName: "Clark", salary: 14000 },
  { id: 11, firstName: "Jack", lastName: "Lee", salary: 15000 },
  { id: 12, firstName: "Amy", lastName: "Wong", salary: 16000 },
  { id: 13, firstName: "David", lastName: "Chen", salary: 17000 },
  { id: 14, firstName: "Lisa", lastName: "Zhang", salary: 18000 },
  { id: 15, firstName: "Kevin", lastName: "Lin", salary: 19000 },
];

const PAGE_SIZE = 10;

function Task3() {
  const [currentPage, setCurrentPage] = useState(1);

  const handlePageClick = (page) => {
    setCurrentPage(page);
  };

  const startIdx = (currentPage - 1) * PAGE_SIZE;
  const visibleEmployees = employees.slice(startIdx, startIdx + PAGE_SIZE);

  return (
    <div>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Salary</th>
          </tr>
        </thead>
        <tbody>
          {visibleEmployees.map((employee) => (
            <tr key={employee.id}>
              <td>{employee.id}</td>
              <td>{employee.firstName}</td>
              <td>{employee.lastName}</td>
              <td>{employee.salary}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <div>
        {Array.from({ length: Math.ceil(employees.length / PAGE_SIZE) }).map(
          (_, idx) => (
            <button key={idx} onClick={() => handlePageClick(idx + 1)}>
              {idx + 1}
            </button>
          )
        )}
      </div>
    </div>
  );
}

export default Task3;
