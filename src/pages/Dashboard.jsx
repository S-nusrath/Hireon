// src/pages/Dashboard.jsx
import React from "react";
import DashboardSidebar from "../components/DashboardSidebar";
import Navbar from "../components/Navbar";
import DashboardCard from "../components/DashboardCard";
import "../components/Dashboard.css";

const Dashboard = () => {
  return (
    <div className="dashboard-page">
      <DashboardSidebar />
      <div className="dashboard-main">
        <Navbar />
        <div className="dashboard-content">
          <h1>Welcome to Hireon Dashboard</h1>
          <p>Your AI-powered student hiring and skill-building platform.</p>

          <div className="dashboard-cards">
            <DashboardCard
              title="Available Jobs"
              description="Check all the jobs matching your profile."
              linkText="View Jobs"
              linkUrl="/dashboard/jobs"
            />
            <DashboardCard
              title="Profile Status"
              description="Update your profile to increase visibility to employers."
              linkText="Update Profile"
              linkUrl="/dashboard/profile"
            />
            <DashboardCard
              title="Skill Tracker"
              description="Check your skill gaps and improve yourself."
              linkText="View Skills"
              linkUrl="/dashboard/skills"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
