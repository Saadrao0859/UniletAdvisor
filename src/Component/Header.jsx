import React from "react";
import "./Header.css";
import logo from "../assets/images/Logo.png";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <>
    <div className="Header">
      <div className="logo">
        <img src={logo} alt="" />
      </div>
      <div className="box">
        <Link to="/home">
          <button>Home</button>
        </Link>
        <Link to="/reviewproperty">
          <button>Review a property</button>
        </Link>
        <Link to="/readreview">
          <button>Read Review</button>
        </Link>
        <Link to="/articles">
          <button>Articles</button>
        </Link>
      </div>
      <div className="login">
        <Link to="/login">
          <button>Log in</button>
        </Link>
      </div>
    </div>
    </>
  );
};

export default Header;
