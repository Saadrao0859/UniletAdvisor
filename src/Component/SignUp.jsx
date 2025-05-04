import React from "react";
import "./SignUp.css";
import signupbanner from "../assets/images/Signup/banner-signup.jpg";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { Link } from "react-router-dom";
import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const SignUp = () => {
  const [name, setName] = useState();
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [conformPassword, setConfromPassword] = useState();
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post("http://localhost:3001/signup", {
        name,
        email,
        password,
        conformPassword,
      })
      .then((result) => {
        console.log(result);
        navigate("/login");
      })
      .catch((err) => console.log(err));
  };

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
        <form className="signup-form" onSubmit={handleSubmit}>
          <TextField
            className="inout-email"
            id="name-input"
            label="Name"
            variant="outlined"
            placeholder="Enter Your name here"
            onChange={(e) => setName(e.target.value)}
          />
          <TextField
            className="inout-email"
            id="email-input"
            label="Email"
            variant="outlined"
            placeholder="Enter Your email address here"
            onChange={(e) => setEmail(e.target.value)}
          />
          <TextField
            className="password-input"
            id="password-input"
            label="Password"
            type="password"
            autoComplete="current-password"
            placeholder="Enter Your password here"
            onChange={(e) => setPassword(e.target.value)}
          />
          <TextField
            className="password-input"
            id="confirm-password-input"
            label="Conform password"
            type="password"
            autoComplete="current-password"
            placeholder="Conform password"
            onChange={(e) => setConfromPassword(e.target.value)}
          />
          <Button className="btn-submit" type="submit" variant="contained">
            Submit
          </Button>
        </form>
        <hr className="bottem-border" />
      </div>
      <div className="signup-button-p-tag">
        <p className="singupBtn">Don't Have an account?</p>
        <Link to="/login">
          <button className="signupbutton">Sign in</button>
        </Link>
      </div>
    </div>
  );
};

export default SignUp;
