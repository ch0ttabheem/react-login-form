import { Link } from "react-router-dom";

function Register() {
  const handleRegister = (event) => {
    event.preventDefault();

    alert("Registration successful!");
  };

  return (
    <div className="login-page">
      <div className="login-container">
        <h2>Register</h2>

        <form onSubmit={handleRegister}>
          <label>Username</label>
          <input type="text" />

          <label>Password</label>
          <input type="password" />

          <label>Confirm Password</label>
          <input type="password" />

          <button type="submit">Register</button>
        </form>

        <p>
          Already have an account? <Link to="/login">Login</Link>
        </p>
      </div>
    </div>
  );
}

export default Register;