// src/components/DashboardCard.jsx
import React from "react";
import "./DashboardCard.css";

const DashboardCard = ({ title, description, linkText, linkUrl }) => {
  return (
    <div className="dashboard-card">
      <h3>{title}</h3>
      <p>{description}</p>
      {linkText && linkUrl && (
        <a href={linkUrl} className="card-link">
          {linkText}
        </a>
      )}
    </div>
  );
};

export default DashboardCard;
