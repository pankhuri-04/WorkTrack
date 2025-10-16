import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Sidebar from "./components/Sidebar";
import HRDashboard from "./pages/HRDashboard";

import EmployeeForm from "./pages/EmployeeForm";
import EmployeeView from "./pages/Task";
import Reports from "./pages/Reports";
import EmployeeList from "./pages/EmployeeList";
import ResumeParser from "./pages/ResumeParser";



<Route path="/employee" element={<EmployeeList />} />

import "./App.css";
function App() {
  return (
    <Router>
      <div className="app-container">
        <Sidebar />
        <div className="main-content">
          <Routes>
            <Route path="/" element={<HRDashboard />} />
            <Route path="/resume-parser" element={<ResumeParser />} />
            <Route path="/hrdashboard" element={<HRDashboard />} />
            <Route path="/employees" element={<EmployeeList />} />
            <Route path="/reports" element={<Reports />} />
            <Route path="/add-employee" element={<EmployeeForm />} />
            <Route path="/employee" element={<EmployeeView />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;