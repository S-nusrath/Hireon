import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav style={{ 
      display: "flex", 
      justifyContent: "space-between", 
      alignItems: "center", 
      padding: "10px 20px", 
      backgroundColor: " #007bff", 
      borderBottom: "1px solid #ddd" 
    }}>
      <h2>Hireon</h2>
      <div>
        <Link to="/" style={{ marginRight: "15px" }}>Home</Link>
        <Link to="/login" style={{ marginRight: "15px" }}>Login</Link>
        <Link to="/register">Register</Link>
        <Link to="/dashboard" style={{ marginLeft: "15px" }}>Dashboard</Link>
      </div>
    </nav>
  );
};

export default Navbar;
