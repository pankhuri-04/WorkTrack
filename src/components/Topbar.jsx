import React from "react";
import "../components/Topbar.css";

const Topbar = () => {
  return (
    <div className="topbar">
      <h3>Welcome, HR Manager</h3>
      <button className="logout-btn">Logout</button>
    </div>
  );
};

export default Topbar;
