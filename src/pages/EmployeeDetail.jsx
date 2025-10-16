import React from "react";
import { useParams, Link } from "react-router-dom";
import "../pages/EmployeeDetails.css";

const EmployeeDetail = () => {
  const { id } = useParams();

  const employees = [
    {
      id: 1,
      name: "Alice Johnson",
      department: "HR",
      role: "Manager",
      experience: "5 years",
      education: "MBA in Human Resources",
      joiningDate: "2019-06-12",
      location: "New York",
    },
    {
      id: 2,
      name: "Bob Smith",
      department: "Finance",
      role: "Analyst",
      experience: "3 years",
      education: "B.Com in Finance",
      joiningDate: "2021-01-20",
      location: "Chicago",
    },
    {
      id: 3,
      name: "Clara Evans",
      department: "Engineering",
      role: "Developer",
      experience: "4 years",
      education: "B.Tech in Computer Science",
      joiningDate: "2020-03-05",
      location: "San Francisco",
    },
  ];

  const employee = employees.find((e) => e.id === parseInt(id));

  if (!employee) {
    return <p>Employee not found.</p>;
  }

  return (
    <div className="employee-detail-container">
      <h2>{employee.name}'s Profile</h2>
      <div className="employee-info-card">
        <p><strong>Department:</strong> {employee.department}</p>
        <p><strong>Role:</strong> {employee.role}</p>
        <p><strong>Experience:</strong> {employee.experience}</p>
        <p><strong>Education:</strong> {employee.education}</p>
        <p><strong>Date of Joining:</strong> {employee.joiningDate}</p>
        <p><strong>Location:</strong> {employee.location}</p>
      </div>

      <Link to="/employee" className="back-button">← Back to Employee List</Link>
    </div>
  );
};

export default EmployeeDetail;
