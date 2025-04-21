import React from "react";
import "./SignUp.css";
import signupbanner from "../assets/images/Signup/banner-signup.jpg";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { Link } from "react-router-dom";

const SignUp = () => {
  return (
    <div className="signup-container">
      <div className="banner-image-signup">
        <img src={signupbanner} alt="" className="banner-img-signup" />
      </div>
      <div className="txt-signup">
        <h1>Welcome to Uniletadvisor</h1>
        <p>Sign up and begin your journy with us</p>
      </div>

      <div className="signup-box">
        <h1>Sign up Now</h1>
        <TextField
          className="inout-email"
          id="outlined-basic"
          label="Email"
          variant="outlined"
          placeholder="Enter Your email address here"
        />
        <TextField
          className="password-input"
          id="outlined-password-input"
          label="Password"
          type="password"
          autoComplete="current-password"
          placeholder="Enter Your password here"
        />
        <TextField
          className="password-input"
          id="outlined-password-input"
          label="Conform password"
          type="password"
          autoComplete="current-password"
          placeholder="Conform password"
        />
        <Button className="btn-submit" variant="contained">
          Submit
        </Button>
        <hr className="bottem-border" />
      </div>
      <p className="singupBtn">
        Don't Have an account?
        <Link to="/login">
          <button className="signupbutton">Sign in</button>
        </Link>
      </p>
    </div>
  );
};

export default SignUp;
