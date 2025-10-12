import React from "react";
import "./Features.css"; // We'll create this CSS for styling

const Features = () => {
  return (
    <div className="features-page">
      <section className="features-section">
        <h2>Platform Features</h2>
        <p className="features-subtitle">
          Everything you need to get industry-ready and land your dream job.
        </p>
        <div className="features-cards">
          <div className="features-card">
            <h3>Real-time Job Notifications</h3>
            <p>
              Get instant updates on internships and jobs that match your branch, year, and interests.
            </p>
          </div>
          <div className="features-card">
            <h3>Skill Gap Analyzer</h3>
            <p>
              Identify skills you need to learn for the roles you want and track your progress.
            </p>
          </div>
          <div className="features-card">
            <h3>Practice Arena</h3>
            <p>
              Solve coding challenges, MCQs, and mini-projects to sharpen your skills.
            </p>
          </div>
          <div className="features-card">
            <h3>Resume Builder & Leaderboards</h3>
            <p>
              Build your resume, monitor your progress on leaderboards, and compete in daily challenges.
            </p>
          </div>
          <div className="features-card">
            <h3>Company Dashboard</h3>
            <p>
              For recruiters to post jobs, track applications, and manage candidates efficiently.
            </p>
          </div>
          <div className="features-card">
            <h3>AI-Powered Recommendations</h3>
            <p>
              Personalized suggestions for courses, challenges, and jobs based on your profile.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Features;
