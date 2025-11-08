import React from "react";
import { Link, useNavigate } from "react-router-dom";
import "./Sidebar.css";

function Sidebar() {
  const navigate = useNavigate();

  const handleLogout = () => {
    // Just a placeholder for now (no backend)
    alert("Logged out successfully!");
    navigate("/login");
  };

  return (
    <div className="sidebar">
      <h2 className="sidebar-title">HR Panel</h2>
      <ul className="sidebar-menu">
        <li><Link to="/hrdashboard">Dashboard</Link></li>
        <li><Link to="/employees">Employees</Link></li>
        <li><Link to="/reports">Reports</Link></li>
        <li><Link to="/add-employee">Add Employee</Link></li>
        <li><Link to="/task">Task</Link></li>
        <li><Link to="/resume-parser">AI Resume Parser</Link></li>

      </ul>

      {/* 🔹 Footer Section */}
      <div className="sidebar-footer">
        <button className="logout-btn" onClick={handleLogout}>
          Logout
        </button>
      </div>
    </div>
  );
}

export default Sidebar;

