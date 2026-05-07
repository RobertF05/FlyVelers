import "./login.css";
import Fotofondo from "../assets/maldivas.png";
import logo from "../assets/flyvelers-logo.png";

function Login() {
  return (
    <div
      className="login-container"
      style={{ backgroundImage: `url(${Fotofondo})` }}
    >
        <div className="background-bottom"></div>
      <div className="login-card">
        
        <img src={logo} alt="Logo" className="login-logo" />

        <p className="welcome-text">Welcome back !!!</p>

        <h1 className="login-title">Sign in</h1>

        <form className="login-form">
          <div className="input-group">
            <label>Email</label>
            <input
              type="email"
              placeholder="example@gmail.com"
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
            />
          </div>

          <button type="submit" className="login-btn">
            SIGN IN →
          </button>
        </form>

        <p className="signup-text">
          I don't have an account ? <span>Sign up</span>
        </p>

      </div>
    </div>
  );
}

export default Login;