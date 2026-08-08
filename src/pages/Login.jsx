import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebase";
import "../styles/Login.css";

function Login() {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      await signInWithEmailAndPassword(auth, email, password);
      alert("Login Successful!");
      navigate("/dashboard");
    } catch (error) {
      alert(error.message);
    }
  };

  return (
    <div className="login-page">

      <div className="overlay"></div>

      <div className="login-card">

        <div className="logo">
          ☁
        </div>

        <h1>Digital Certificate Locker</h1>

        <p>Securely store and manage your certificates.</p>

        <form onSubmit={handleLogin}>

          <div className="input-group">
            <label>Email</label>

            <input
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e)=>setEmail(e.target.value)}
              required
            />
          </div>

          <div className="input-group">

            <label>Password</label>

            <input
              type="password"
              placeholder="Enter your password"
              value={password}
              onChange={(e)=>setPassword(e.target.value)}
              required
            />

          </div>

          <button className="login-btn">
            Login
          </button>

        </form>

        <div className="bottom-text">

          Don't have an account?

          <Link to="/register">
            Register
          </Link>

        </div>

      </div>

    </div>
  );
}

export default Login;