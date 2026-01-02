import React from "react";
import signupBanner from "../Images/infographic.png";
import signupLogo from "../Images/Qarma logo 2 (Traced).png";
import emailLogo from "../Images/Group.png";
import lockLogo from "../Images/Group (1).png";
import googleLogo from "../Images/google-icon.png";
import githubLogo from "../Images/GitHub-Mark.png";
import bitmapLogo from "../Images/Bitmap.png";
import { useNavigate } from "react-router-dom";
import "./Signup.css";

const Singup = () => {
  let navigate = useNavigate();
  return (
    <div className="qa_qarma_singup">
      <div className="qa_qarma_singup_contents">
        <div className="qa_qarma_signup_banner">
          <img src={signupBanner} alt="" className="signup_banner" />
        </div>
        <div className="qa_qarma_signup_logo">
          <img src={signupLogo} alt="" className="signup_logo" />
        </div>
        <div className="qa_qarma_signup_desc">
          Low-code, end-to-end Automation Platform that boots Productivity and
          Test Coverage
        </div>
        <div className="qa-qarma_signup_containers">
          <div className="qa_qarma_signup_heading">Let’s get started</div>
          <div className="qa_qarma_signup_descs">
            We suggest you to use your work email
          </div>
          <div className="qa_qarma_signup_input">
            <div className="qa_qarma_signup_input_email">
              <img src={emailLogo} alt="" className="email_logo" />
              <input
                type="email"
                placeholder="Enter email"
                className="email_input_field"
              />
            </div>
            <div className="qa_qarma_signup_input_password">
              <img src={lockLogo} alt="" className="email_logo" />
              <input
                type="password"
                placeholder="Enter password"
                className="email_input_field"
              />
            </div>
            <div className="qa_qarma_signup_input_cpassword">
              <img src={lockLogo} alt="" className="email_logo" />
              <input
                type="password"
                placeholder="Confirm Password"
                className="email_input_field"
              />
            </div>
          </div>
          <button className="qa_qarma_signup_buttons">
            <div className="signup_button">Create Account</div>
          </button>
          <div className="qa_qarma_signup_others">
            <div className="qa_qarma_signup_horizontal_line_one"></div>
            <div className="qa_qarma_signup_others_descs">or</div>
            <div className="qa_qarma_signup_horizontal_line_one"></div>
          </div>
          <div className="qa_qarma_signup_info">
            Sign up with social accounts
          </div>
          <div className="qa_qarma_signup_icons">
            <button className="qa_qarma_icon_google">
              <img src={googleLogo} alt="" className="google_logo" />
            </button>
            <button className="qa_qarma_icon_github">
              <img src={githubLogo} alt="" className="github_logo" />
            </button>
            <button className="qa_qarma_icon_others">
              <img src={bitmapLogo} alt="" className="google_logo" />
            </button>
          </div>
          <div className="qa_qarma_signup_remember">
            Already member?
            <button className="qa_qarma_signup_remember_nav" onClick ={()=> {navigate("/dashboard")}}>
              Sign In
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Singup;
