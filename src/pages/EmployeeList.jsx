import React, { useState } from "react";
import "./EmployeeList.css";
import {
  Chart as ChartJS,
  LineElement,
  CategoryScale,
  LinearScale,
  PointElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Line } from "react-chartjs-2";

ChartJS.register(LineElement, CategoryScale, LinearScale, PointElement, Title, Tooltip, Legend);

const employees = [
  {
    id: 1,
    name: "Yash singh",
    department: "HR",
    role: "Manager",
    joiningDate: "2020-03-15",
    experience: "5 years",
    education: "MBA in HR",
    performance: [70, 75, 80, 85, 90, 88],
  },
  {
    id: 2,
    name: "neha mishra",
    department: "Finance",
    role: "Analyst",
    joiningDate: "2021-06-10",
    experience: "3 years",
    education: "B.Com (Hons)",
    performance: [60, 62, 70, 68, 74, 78],
  },
  {
    id: 3,
    name: "Riya Sharma",
    department: "Engineering",
    role: "Developer",
    joiningDate: "2022-01-25",
    experience: "2 years",
    education: "B.Tech in CS",
    performance: [80, 82, 84, 87, 89, 92],
  },
];

function EmployeeList() {
  const [selectedEmployee, setSelectedEmployee] = useState(null);

  return (
    <div className="employee-page">
      <div className="employee-list-section">
        <h2>Employee List</h2>
        <ul className="employee-list">
          {employees.map((emp) => (
            <li key={emp.id} onClick={() => setSelectedEmployee(emp)}>
              <strong>{emp.name}</strong> <span>({emp.department})</span>
            </li>
          ))}
        </ul>
      </div>

      <div className="employee-details-section">
        {selectedEmployee ? (
          <div className="employee-card">
            <h2>{selectedEmployee.name}</h2>
            <p><strong>Department:</strong> {selectedEmployee.department}</p>
            <p><strong>Role:</strong> {selectedEmployee.role}</p>
            <p><strong>Date of Joining:</strong> {selectedEmployee.joiningDate}</p>
            <p><strong>Experience:</strong> {selectedEmployee.experience}</p>
            <p><strong>Education:</strong> {selectedEmployee.education}</p>

            <div className="chart-section">
              <h3>Performance Trend</h3>
              <Line
                data={{
                  labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun"],
                  datasets: [
                    {
                      label: "Performance (%)",
                      data: selectedEmployee.performance,
                      borderColor: "#00ffb0",
                      backgroundColor: "rgba(0, 255, 176, 0.1)",
                      fill: true,
                      tension: 0.3,
                    },
                  ],
                }}
                options={{
                  responsive: true,
                  plugins: {
                    legend: { labels: { color: "#fff" } },
                  },
                  scales: {
                    x: { ticks: { color: "#aaa" }, grid: { color: "#333" } },
                    y: { ticks: { color: "#aaa" }, grid: { color: "#333" } },
                  },
                }}
              />
            </div>
          </div>
        ) : (
          <div className="placeholder">
            <h3>Select an employee to view details</h3>
          </div>
        )}
      </div>
    </div>
  );
}

export default EmployeeList;
