import React from "react";
import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";

const Landing = () => {
  return (
    <>
      <Navbar />

      <div style={{ 
        textAlign: "center", 
        marginTop: "100px"
      }}>
        <h1>Welcome to Hireon</h1>
        <p>Your AI-powered student hiring and skill-building platform.</p>
      </div>
    </>
  );
};

export default Landing;
