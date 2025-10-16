import React from "react";
import "../pages/HRDashboard.css";
import StatCard from "../components/StatCard";
import AnalyticsChart from "../components/AnalyticsChart";

function HRDashboard() {
  return (
    <div className="hr-dashboard">
      <h1>Dashboard</h1>
      <div className="stats-container">
        <StatCard title="Total Employees" value="120" />
        <StatCard title="New Hires" value="15" />
        <StatCard title="Departments" value="8" />
      </div>

      
      <AnalyticsChart />
    </div>
  );
}

export default HRDashboard;
