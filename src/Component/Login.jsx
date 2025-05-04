import React from "react";
import "./Login.css";
import loginbanner from "../assets/images/login/loginbanner.png";
import TextField from "@mui/material/TextField";
import Checkbox from "@mui/material/Checkbox";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import { Link } from "react-router-dom";
import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function Login() {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post("http://localhost:3001/login", {
        email,
        password,
      })
      .then((result) => {
        console.log(result);
        if (result.data === "Success") navigate("/home");
      })
      .catch((err) => console.log(err));
  };

  const label = { inputProps: { "aria-label": "Checkbox demo" } };
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
        <form className="signup-form" onSubmit={handleSubmit}>
          <TextField
            className="inout-email"
            id="login-type-email"
            label="Email"
            variant="outlined"
            placeholder="Enter Your email address here"
            onChange={(e) => setEmail(e.target.value)}
          />
          <TextField
            className="password-input"
            id="login-type-password"
            label="Password"
            type="password"
            autoComplete="current-password"
            placeholder="Enter Your password here"
            onChange={(e) => setPassword(e.target.value)}
          />
          <div className="forget-remember">
            <div className="remember-me">
              <Checkbox {...label} />
              Save Password for later?
            </div>
            <div className="forget-pass">Forgot Password?</div>
          </div>
          <Button className="btn-login" type="submit" variant="contained">
            Login
          </Button>
        </form>
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
}

export default Login;
