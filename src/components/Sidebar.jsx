import React from "react";
import { Nav } from "react-bootstrap";
import { Link } from "react-router-dom";
import { FaHome, FaClipboardList, FaUsers, FaChartBar, FaCog, FaSignOutAlt } from "react-icons/fa";
import "./Sidebar.css";

const Sidebar = () => {
  return (
    <div className="sidebar">
      <h2 className="sidebar-logo">Skill Scout</h2>

      <Nav className="flex-column sidebar-nav">
        <Nav.Link as={Link} to="/hrdashboard" className="sidebar-link">
          <FaHome className="sidebar-icon" /> Dashboard
        </Nav.Link>
        <Nav.Link as={Link} to="/templates" className="sidebar-link">
          <FaClipboardList className="sidebar-icon" /> Templates
        </Nav.Link>
        <Nav.Link as={Link} to="/hires" className="sidebar-link">
          <FaUsers className="sidebar-icon" /> Hires List
        </Nav.Link>
        <Nav.Link as={Link} to="/analytics" className="sidebar-link">
          <FaChartBar className="sidebar-icon" /> Analytics
        </Nav.Link>
        <Nav.Link as={Link} to="/settings" className="sidebar-link">
          <FaCog className="sidebar-icon" /> Settings
        </Nav.Link>
      </Nav>

      <div className="sidebar-footer">
        <Nav.Link as={Link} to="/logout" className="logout-link">
          <FaSignOutAlt className="sidebar-icon" /> Sign Out
        </Nav.Link>
      </div>
    </div>
  );
};

export default Sidebar;
