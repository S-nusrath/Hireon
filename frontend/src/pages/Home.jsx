// Home.jsx
import React from "react";
import { Link } from "react-router-dom";
import "./Home.css";

const jobs = [
  { id: 1, title: "Frontend Developer Intern", company: "TechCorp", type: "Internship", location: "Hyderabad" },
  { id: 2, title: "Software Engineer", company: "Innovatech", type: "Job", location: "Bangalore" },
  { id: 3, title: "UI/UX Designer", company: "DesignHub", type: "Internship", location: "Remote" },
  { id: 4, title: "Data Analyst", company: "DataSolutions", type: "Job", location: "Mumbai" },
];

const Home = () => {
  return (
    <div>
      {/* Hero Section */}
      <section id="hero" className="hero-section">
        <div className="hero-content">
          <h1>Hire the Best Students, Effortlessly</h1>
          <p>Hireon connects students with companies and internships seamlessly.</p>
          <div className="hero-buttons">
            <Link to="/register"><button className="register-btn">Get Started</button></Link>
            <Link to="/login"><button className="login-btn">Login</button></Link>
          </div>
        </div>
        <div className="hero-image">
          <img src="https://cdn-icons-png.flaticon.com/512/3135/3135715.png" alt="Students" />
        </div>
      </section>

      {/* Jobs Section */}
      <section id="jobs" className="jobs-section">
        <h2>Available Jobs & Internships</h2>
        <div className="jobs-cards">
          {jobs.map(job => (
            <div key={job.id} className="job-card">
              <h3>{job.title}</h3>
              <p><strong>Company:</strong> {job.company}</p>
              <p><strong>Type:</strong> {job.type}</p>
              <p><strong>Location:</strong> {job.location}</p>
              <button className="apply-btn">Apply Now</button>
            </div>
          ))}
        </div>
      </section>

      {/* Top Companies Section */}
      <section id="companies" className="companies-section">
        <h2>Top Companies Hiring</h2>
        <p className="companies-subtitle">Work with the best companies in the industry.</p>
        <div className="company-logos">
          <img src="https://upload.wikimedia.org/wikipedia/commons/2/2f/Google_2015_logo.svg" alt="Google" />
          <img src="https://upload.wikimedia.org/wikipedia/commons/4/44/Microsoft_logo.svg" alt="Microsoft" />
          <img src="https://upload.wikimedia.org/wikipedia/commons/f/fa/Apple_logo_black.svg" alt="Apple" />
          <img src="https://upload.wikimedia.org/wikipedia/commons/0/08/Netflix_2015_logo.svg" alt="Netflix" />
        </div>
      </section>

    </div>
  );
};

export default Home;
