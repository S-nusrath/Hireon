import React from "react";
//import "./AuthForm.css";
import "../components/AuthForm.css";

const Register = () => {
  return (
    <div className="auth-container">
      <form className="auth-form">
        <h2>Create an Account</h2>
        <input type="text" placeholder="Full Name" required />
        <input type="email" placeholder="Email" required />
        <input type="password" placeholder="Password" required />
        <input type="password" placeholder="Confirm Password" required />
        <button type="submit">Register</button>
        <p className="auth-footer">
          Already have an account? <a href="/login">Login</a>
        </p>
      </form>
    </div>
  );
};

export default Register;
