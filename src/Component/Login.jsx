import React from "react";
import "./Login.css";
import loginbanner from "../assets/images/login/loginbanner.png";
import TextField from "@mui/material/TextField";
import Checkbox from "@mui/material/Checkbox";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import { Link } from "react-router-dom";

const label = { inputProps: { "aria-label": "Checkbox demo" } };
const Login = () => {
  return (
    <div className="login-main-container">
      <div className="banner-image">
        <img src={loginbanner} alt="" className="banner-img-login" />
      </div>
      <div className="text-login-banner">
        <h1>Nice to See You Again</h1>
        <p>Welcome To Login</p>
      </div>
      <div className="login-box-input">
        <h1>Log In Please</h1>
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
        <div className="forget-remember">
          <div className="remember-me">
            <Checkbox {...label} />
            Save Password for later?
          </div>
          <div className="forget-pass">Forgot Password?</div>
        </div>
        <Button className="btn-login" variant="contained">
          Login
        </Button>
      </div>
      {/* <div className="bottem-border"></div> */}
      <hr className="bottem-border" />
      <p className="singupBtn">
        Don't Have an account?
        <Link to="/signup">
          <button className="signupbutton">Sign Up</button>
        </Link>
      </p>
    </div>
  );
};

export default Login;
