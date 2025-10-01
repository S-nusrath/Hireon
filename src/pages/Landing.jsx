import React from "react";

function Landing() {
  return (
    <div style={{ padding: "20px", textAlign: "center" }}>
      <h1>Welcome to Hireon </h1>
      <p>Your AI-powered student hiring & skill-building platform.</p>
      <div style={{ marginTop: "20px" }}>
        <a href="/login" style={{ marginRight: "15px" }}>Login</a>
        <a href="/register">Register</a>
        <a href="/Landing">Landing</a>
      </div>
    </div>
  );
}

export default Landing;
