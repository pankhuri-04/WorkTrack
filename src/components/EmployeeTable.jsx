import React from "react";
import { Table, Button } from "react-bootstrap";

const EmployeeTable = () => {
  const employees = [
    { id: 1, name: "Aarav Sharma", department: "HR", status: "Active" },
    { id: 2, name: "Priya Patel", department: "IT", status: "Onboarding" },
    { id: 3, name: "Rahul Verma", department: "Finance", status: "Active" },
  ];

  return (
    <Table hover responsive bordered className="shadow-sm">
      <thead className="table-light">
        <tr>
          <th>#</th>
          <th>Name</th>
          <th>Department</th>
          <th>Status</th>
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>
        {employees.map((emp) => (
          <tr key={emp.id}>
            <td>{emp.id}</td>
            <td>{emp.name}</td>
            <td>{emp.department}</td>
            <td>{emp.status}</td>
            <td>
              <Button size="sm" variant="outline-primary">View</Button>{" "}
              <Button size="sm" variant="outline-danger">Remove</Button>
            </td>
          </tr>
        ))}
      </tbody>
    </Table>
  );
};

export default EmployeeTable;
