import React from "react";
import { Link } from "react-router-dom";
import "./DashboardSidebar.css";

const DashboardSidebar = () => (
  <div className="sidebar">
    <h2 className="sidebar-logo">Hireon</h2>
    <nav className="sidebar-nav">
      <ul>
        <li><Link to="/dashboard">Dashboard</Link></li>
        <li><Link to="/dashboard/jobs">Jobs</Link></li>
        <li><Link to="/dashboard/profile">Profile</Link></li>
        <li><Link to="/dashboard/settings">Settings</Link></li>
      </ul>
    </nav>
  </div>
);

export default DashboardSidebar;
