import React, { useState } from "react";
import "../SigninSignup/signinsignup.css";

function SigninSignup() {
  const [activeTab, setActiveTab] = useState("login");

  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };

  return (
    <main id="mainpage">
      <h1>Admin Sign Up and Sign In</h1>
      <div className="tabs_container">
        <button
          className={`switch-btn ${activeTab === "login" ? "active" : ""}`}
          id="flex-item-1"
          onClick={() => handleTabClick("login")}
        >
          Login
        </button>
        <button
          className={`switch-btn ${activeTab === "signup" ? "active" : ""}`}
          id="flex-item-2"
          onClick={() => handleTabClick("signup")}
        >
          Sign up
        </button>
      </div>
      <div className="page_tabs">
        <div
          className="tab"
          id="login_div"
          style={{ zIndex: activeTab === "login" ? 1 : 0 }}
        >
          <form>
            <label htmlFor="username" className="label">
              Username:
            </label>
            <br />
            <input type="text" id="username" className="inputs" required />
            <br />
            <label htmlFor="password" className="label">
              Password:
            </label>
            <br />
            <input type="password" id="password" className="inputs" required />
            <br />
            <button className="tabs_btn">Login</button>
          </form>
        </div>
        <div
          className="tab"
          id="signup_div"
          style={{ zIndex: activeTab === "signup" ? 1 : 0 }}
        >
          <form>
            <label htmlFor="username" className="label">
              Username:
            </label>
            <br />
            <input type="text" id="username" className="inputs" required />
            <br />
            <label htmlFor="password" className="label">
              Password:
            </label>
            <br />
            <input type="password" id="password" className="inputs" required />
            <br />
            <label htmlFor="confirmPassword" className="label">
              Confirm Password:
            </label>
            <br />
            <input
              type="password"
              id="confirmPassword"
              className="inputs"
              required
            />
            <br />
            <button className="tabs_btn">Sign up</button>
          </form>
        </div>
      </div>
    </main>
  );
}

export default SigninSignup;
