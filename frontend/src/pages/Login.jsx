import React from "react";
//import "./AuthForm.css";
import "../components/AuthForm.css";
const Login = () => {
  return (
    <div className="auth-container">
      <form className="auth-form">
        <h2>Login to Hireon</h2>
        <input type="email" placeholder="Email" required />
        <input type="password" placeholder="Password" required />
        <button type="submit">Login</button>
        <p className="auth-footer">
          Don't have an account? <a href="/register">Register</a>
        </p>
      </form>
    </div>
  );
};

export default Login;
