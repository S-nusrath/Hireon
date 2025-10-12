import React from "react";
import "./About.css"; // We'll create this CSS file for styling

const About = () => {
  return (
    <div className="about-page">
      <section className="about-section">
        <h2>About Hireon</h2>
        <p className="about-subtitle">
          Hireon is an AI-powered student hiring and skill-building platform.
        </p>
        <div className="about-cards">
          <div className="about-card">
            <h3>Real-time Job Notifications</h3>
            <p>Receive job alerts based on your branch, year, and interests.</p>
          </div>
          <div className="about-card">
            <h3>Skill Gap Analyzer</h3>
            <p>Shows what to learn to qualify for your desired jobs.</p>
          </div>
          <div className="about-card">
            <h3>Practice Arena</h3>
            <p>Sharpen skills with coding challenges, MCQs, and mini-projects.</p>
          </div>
          <div className="about-card">
            <h3>Resume Builder & Leaderboards</h3>
            <p>
              Build resumes, track progress on leaderboards, and complete daily challenges to become industry-ready.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
