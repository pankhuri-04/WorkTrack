import React from "react";
import { useLocation, Link } from "react-router-dom";
import { Card, Button } from "react-bootstrap";
import "./EmployeeView.css";

const employeeDetails = {
  1: { name: "Alice Johnson", role: "HR Manager", dept: "HR", status: "Active", joining: "10 Jan 2023" },
  2: { name: "Bob Smith", role: "Finance Analyst", dept: "Finance", status: "Active", joining: "22 Feb 2023" },
  3: { name: "Clara Evans", role: "Software Developer", dept: "Engineering", status: "On Leave", joining: "15 Mar 2022" },
  4: { name: "David Lee", role: "Sales Executive", dept: "Sales", status: "Active", joining: "05 Apr 2021" },
};

function EmployeeView() {
  const location = useLocation();
  const id = new URLSearchParams(location.search).get("id");
  const employee = employeeDetails[id] || employeeDetails[1];

  return (
    <div className="employee-view-container">
      <Card className="employee-card">
        <Card.Body>
          <h2>{employee.name}</h2>
          <p><strong>Role:</strong> {employee.role}</p>
          <p><strong>Department:</strong> {employee.dept}</p>
          <p><strong>Status:</strong> {employee.status}</p>
          <p><strong>Joining Date:</strong> {employee.joining}</p>
          <Button as={Link} to="/hrdashboard" variant="primary">Back to Dashboard</Button>
        </Card.Body>
      </Card>
    </div>
  );
}

export default EmployeeView;
