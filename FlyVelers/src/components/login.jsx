import { useState } from "react";

import "./login.css";

import Fotofondo from "../assets/maldivas.png";
import logo from "../assets/flyvelers-logo.png";

function Login({ onSuccess, onClose }) {
  /* =========================
     STATES
  ========================= */
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [success, setSuccess] = useState(false);
  const [error, setError] = useState("");

  /* =========================
     HANDLE LOGIN
  ========================= */
  const handleLogin = (e) => {
    e.preventDefault();

    /* FAKE LOGIN */
    if (
      email === "admin@gmail.com" &&
      password === "123"
    ) {
      setSuccess(true);
      setError("");

      /* esperar animación */
      setTimeout(() => {
        onSuccess();
      }, 1400);

    } else {
      setSuccess(false);

      setError(
        "Incorrect email or password"
      );
    }
  };

  return (
    <div
      className="login-container"
      style={{
        backgroundImage: `url(${Fotofondo})`,
      }}
    >
      {/* DARK BACKGROUND */}
      <div className="background-overlay"></div>

      {/* LOGIN CARD */}
      <div className="login-card">

        {/* CLOSE BUTTON */}
        <button
          type="button"
          className="close-login"
          onClick={onClose}
        >
          ✕
        </button>

        {/* LOGO */}
        <img
          src={logo}
          alt="Logo"
          className="login-logo"
        />

        {/* TEXT */}
        <p className="welcome-text">
          Welcome back
        </p>

        <h1 className="login-title">
          Sign in
        </h1>

        {/* FORM */}
        <form
          className="login-form"
          onSubmit={handleLogin}
        >

          {/* EMAIL */}
          <div className="input-group">
            <label>Email</label>

            <input
              type="email"
              placeholder="example@gmail.com"
              value={email}
              onChange={(e) =>
                setEmail(e.target.value)
              }
              required
            />
          </div>

          {/* PASSWORD */}
          <div className="input-group">

            <div className="password-header">
              <label>Password</label>

              <span>
                Forgot Password ?
              </span>
            </div>

            <input
              type="password"
              placeholder="**************"
              value={password}
              onChange={(e) =>
                setPassword(e.target.value)
              }
              required
            />
          </div>

          {/* BUTTON */}
          <button
            type="submit"
            className="login-btn"
          >
            SIGN IN
          </button>
        </form>

        {/* =========================
            POPUP
        ========================= */}
        {(success || error) && (
          <div className="popup-overlay">

            <div
              className={`popup-card ${
                success
                  ? "success"
                  : "error"
              }`}
            >

              {/* ICON */}
              <div className="popup-icon">
                {success ? "✓" : "✕"}
              </div>

              {/* TITLE */}
              <h2>
                {success
                  ? "Login Successful"
                  : "Login Failed"}
              </h2>

              {/* MESSAGE */}
              <p>
                {success
                  ? "Welcome back User "
                  : error}
              </p>

              {/* ERROR BUTTON */}
              {!success && (
                <button
                  type="button"
                  className="popup-btn"
                  onClick={() => {
                    setSuccess(false);
                    setError("");
                  }}
                >
                  Try Again
                </button>
              )}
            </div>
          </div>
        )}

        {/* SIGNUP */}
        <p className="signup-text">
          I don't have an account ?
          <span> Sign up</span>
        </p>

      </div>
    </div>
  );
}

export default Login;