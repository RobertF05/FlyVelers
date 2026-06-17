import { useState } from "react";
import { useNavigate } from "react-router-dom";

import "./login.css";

import Fotofondo from "../assets/maldivas.png";
import logo from "../assets/flyvelers-logo.png";

const AUTH_STORAGE_KEY = "flyvelers-authenticated";
const USER_PROFILE_STORAGE_KEY = "flyvelers-user-profile";

const initialSignupData = {
  fullName: "",
  birthDate: "",
  country: "",
  city: "",
  email: "",
  phone: "",
  password: "",
  confirmPassword: "",
};

function Login({ onSuccess, onClose }) {
  const navigate = useNavigate();
  const [authMode, setAuthMode] = useState("signin");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [signupData, setSignupData] = useState(initialSignupData);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState("");

  const completeAuth = () => {
    localStorage.setItem(AUTH_STORAGE_KEY, "true");
    window.dispatchEvent(new Event("flyvelers-auth-change"));

    setTimeout(() => {
      if (onSuccess) {
        onSuccess();
        return;
      }

      navigate("/main");
    }, 1400);
  };

  const switchMode = (nextMode) => {
    setAuthMode(nextMode);
    setSuccess(false);
    setError("");
  };

  const handleLogin = (e) => {
    e.preventDefault();

    if (email === "admin@gmail.com" && password === "123") {
      if (!localStorage.getItem(USER_PROFILE_STORAGE_KEY)) {
        localStorage.setItem(
          USER_PROFILE_STORAGE_KEY,
          JSON.stringify({
            fullName: "Admin User",
            birthDate: "Not specified",
            country: "Not specified",
            city: "Not specified",
            email: "admin@gmail.com",
            phone: "Not specified",
          }),
        );
      }

      setSuccess(true);
      setError("");
      completeAuth();
      return;
    }

    setSuccess(false);
    setError("Incorrect email or password");
  };

  const handleSignupChange = (e) => {
    const { name, value } = e.target;

    setSignupData((currentData) => ({
      ...currentData,
      [name]: value,
    }));
  };

  const handleSignup = (e) => {
    e.preventDefault();

    if (!signupData.email.toLowerCase().endsWith("@gmail.com")) {
      setSuccess(false);
      setError("Please use a valid Gmail address");
      return;
    }

    if (signupData.password.length < 6) {
      setSuccess(false);
      setError("Password must be at least 6 characters");
      return;
    }

    if (signupData.password !== signupData.confirmPassword) {
      setSuccess(false);
      setError("Passwords do not match");
      return;
    }

    const userProfile = {
      fullName: signupData.fullName,
      birthDate: signupData.birthDate,
      country: signupData.country,
      city: signupData.city,
      email: signupData.email,
      phone: signupData.phone,
    };

    localStorage.setItem(USER_PROFILE_STORAGE_KEY, JSON.stringify(userProfile));
    setSuccess(true);
    setError("");
    completeAuth();
  };

  const isSignup = authMode === "signup";

  return (
    <div
      className="login-container"
      style={{
        backgroundImage: `url(${Fotofondo})`,
      }}
    >
      <div className="background-overlay"></div>

      <div className={`login-card ${isSignup ? "signup-card" : ""}`}>
        <button
          type="button"
          className="close-login"
          onClick={onClose || (() => navigate("/main"))}
        >
          x
        </button>

        <img src={logo} alt="Logo" className="login-logo" />

        <p className="welcome-text">{isSignup ? "Create your traveler profile" : "Welcome back"}</p>

        <h1 className="login-title">{isSignup ? "Sign up" : "Sign in"}</h1>

        {isSignup ? (
          <form className="login-form signup-form" onSubmit={handleSignup}>
            <div className="signup-grid">
              <div className="input-group">
                <label>Full name</label>
                <input
                  type="text"
                  name="fullName"
                  placeholder="Your full name"
                  value={signupData.fullName}
                  onChange={handleSignupChange}
                  required
                />
              </div>

              <div className="input-group">
                <label>Birth date</label>
                <input
                  type="date"
                  name="birthDate"
                  value={signupData.birthDate}
                  onChange={handleSignupChange}
                  required
                />
              </div>

              <div className="input-group">
                <label>Country</label>
                <input
                  type="text"
                  name="country"
                  placeholder="Country"
                  value={signupData.country}
                  onChange={handleSignupChange}
                  required
                />
              </div>

              <div className="input-group">
                <label>City</label>
                <input
                  type="text"
                  name="city"
                  placeholder="City"
                  value={signupData.city}
                  onChange={handleSignupChange}
                  required
                />
              </div>
            </div>

            <div className="input-group">
              <label>Gmail</label>
              <input
                type="email"
                name="email"
                placeholder="example@gmail.com"
                value={signupData.email}
                onChange={handleSignupChange}
                required
              />
            </div>

            <div className="input-group">
              <label>Phone number</label>
              <input
                type="tel"
                name="phone"
                placeholder="+505 0000 0000"
                value={signupData.phone}
                onChange={handleSignupChange}
                required
              />
            </div>

            <div className="signup-grid">
              <div className="input-group">
                <label>Password</label>
                <input
                  type="password"
                  name="password"
                  placeholder="At least 6 characters"
                  value={signupData.password}
                  onChange={handleSignupChange}
                  required
                />
              </div>

              <div className="input-group">
                <label>Confirm password</label>
                <input
                  type="password"
                  name="confirmPassword"
                  placeholder="Repeat password"
                  value={signupData.confirmPassword}
                  onChange={handleSignupChange}
                  required
                />
              </div>
            </div>

            <button type="submit" className="login-btn">
              CREATE ACCOUNT
            </button>
          </form>
        ) : (
          <form className="login-form" onSubmit={handleLogin}>
            <div className="input-group">
              <label>Email</label>

              <input
                type="email"
                placeholder="example@gmail.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>

            <div className="input-group">
              <div className="password-header">
                <label>Password</label>
                <span>Forgot Password ?</span>
              </div>

              <input
                type="password"
                placeholder="**************"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </div>

            <button type="submit" className="login-btn">
              SIGN IN
            </button>
          </form>
        )}

        {(success || error) && (
          <div className="popup-overlay">
            <div className={`popup-card ${success ? "success" : "error"}`}>
              <div className="popup-icon">{success ? "✓" : "x"}</div>

              <h2>
                {success
                  ? isSignup
                    ? "Account Created"
                    : "Login Successful"
                  : isSignup
                    ? "Sign Up Failed"
                    : "Login Failed"}
              </h2>

              <p>
                {success
                  ? isSignup
                    ? "Welcome to FlyVelers"
                    : "Welcome back User"
                  : error}
              </p>

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

        <p className="signup-text">
          {isSignup ? "Already have an account ?" : "Don't have an account ?"}
          <button
            type="button"
            onClick={() => switchMode(isSignup ? "signin" : "signup")}
          >
            {isSignup ? "Sign in" : "Sign up"}
          </button>
        </p>
      </div>
    </div>
  );
}

export default Login;
