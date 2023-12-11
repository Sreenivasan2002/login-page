import React, { useState } from "react";
import axios from 'axios';
import { Link, useNavigate } from "react-router-dom";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loginError, setLoginError] = useState("");
  const navigate = useNavigate();

  const handleLogin = async () => {
    try {
      const response = await axios.post('http://localhost:5000/api/login', {
        email,
        password,
      });
  
      // Check if login was successful
      if (response.data.success) {
        // Redirect to the home page after successful login
        navigate("/home");
      } else {
        // Set login error message for display
        setLoginError(response.data.error);
      }
    } catch (error) {
      console.error("Error during login:", error.message);
    }
  };
  

  return (
    <div className="loginBox">
      <h1 className="login">Log In</h1>

      {loginError && (
        <p style={{ color: "red" }}>{loginError}</p>
      )}

      <div>
        <label>Email:</label>
        <input
          type="email"
          placeholder="Enter your email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </div>

      <div>
        <label>Password:</label>
        <input
          type="password"
          placeholder="Enter your password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </div>

      <button type="submit" onClick={handleLogin}>
        Login
      </button>

      <p>
        If you didn't register, <Link to="/register">click here</Link>
      </p>
    </div>
  );
}

export default Login;
