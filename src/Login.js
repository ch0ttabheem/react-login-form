import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

// Hardcoded fallback credentials for local/dev testing
const TEST_USERNAME = "aidlc";
const TEST_PASSWORD = "Devdlc@123";

function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();

    // Check empty fields
    if (!username.trim() || !password.trim()) {
      alert("Please enter both username and password.");
      return;
    }

    // Hardcoded test login — bypasses the API entirely
    if (username === TEST_USERNAME && password === TEST_PASSWORD) {
      alert("Login successful!");
      navigate("/home");
      return;
    }

    try {
      // Axios API request
      const response = await axios.post(
        "https://dummyjson.com/auth/login",
        {
          username: username,
          password: password,
        }
      );

      console.log(response.data);

      alert("Login successful!");

      // Move to Welcome page
      navigate("/home");
    } catch (error) {
      console.log(error);
      alert("Login failed!");
    }
  };

  return (
    <div className="login-page">
      <div className="login-container">
        <h2>Login</h2>

        <form onSubmit={handleLogin}>
          <label>Username</label>

          <input
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />

          <label>Password</label>

          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />

          <button type="submit">Login</button>
        </form>

        <p>
          Don't have an account? <a href="/register">Register</a>
        </p>
      </div>
    </div>
  );
}

export default Login;