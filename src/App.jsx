import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HRDashboard from "./pages/HRDashboard";
import EmployeeView from "./pages/EmployeeView";
import Reports from "./pages/Reports";
import EmployeeForm from "./pages/EmployeeForm";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HRDashboard />} />
        <Route path="/hrdashboard" element={<HRDashboard />} />
        <Route path="/employee" element={<EmployeeView />} />
        <Route path="/reports" element={<Reports />} />
        <Route path="/add-employee" element={<EmployeeForm />} />
      </Routes>
    </Router>
  );
}

export default App;
