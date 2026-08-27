import { useState } from "react";
import axios from "axios";

function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = async (e) => {
    e.preventDefault();

    // Check if username or password is empty
    if (!username || !password) {
      alert("Login failed!");
      return;
    }

    try {
      const response = await axios.post("YOUR_API_URL", {
        username: username,
        password: password,
      });

      if (response.status === 200) {
        alert("Login successful!");
      }
    } catch (error) {
      alert("Login failed!");
    }
  };

  return (
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
    </div>
  );
}

export default Login;