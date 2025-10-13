import React from "react";
import { Link } from "react-router-dom";
import "./Reports.css";

function Reports() {
  return (
    <div className="reports-container">
      <div className="sidebar">
        <h2 className="sidebar-title">HR Panel</h2>
        <ul className="sidebar-menu">
          <li><Link to="/hrdashboard">Dashboard</Link></li>
          <li><Link to="/employee">Employees</Link></li>
          <li><Link to="/reports" className="active">Reports</Link></li>
          <li><Link to="/add-employee">Add Employee</Link></li>
        </ul>
      </div>

      <div className="main-content">
        <h2 className="dashboard-title">Reports</h2>
        <h4>Department-wise Employee Count</h4>
        <img
          src={`https://quickchart.io/chart?c=${encodeURIComponent(JSON.stringify({
            type: "bar",
            data: {
              labels: ["HR", "Finance", "Engineering", "Sales"],
              datasets: [{
                label: "Employees",
                data: [10, 8, 20, 12],
                backgroundColor: ["#00FFB0", "#FF9F40", "#36A2EB", "#FF6384"]
              }]
            },
            options: { plugins: { legend: { labels: { color: "#fff" } } } }
          }))}`}
          alt="Reports Chart"
          style={{ width: "80%", borderRadius: "10px", marginTop: "10px" }}
        />
      </div>
    </div>
  );
}

export default Reports;
