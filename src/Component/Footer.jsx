import React from "react";
import "./Footer.css";
import { Link } from "react-router-dom";
import logobig from "../assets/images/Logobig.png";
import { BiSolidPhoneCall } from "react-icons/bi";
import { TfiEmail } from "react-icons/tfi";
import { CiLocationOn } from "react-icons/ci";
import { FaFacebookF } from "react-icons/fa6";
import { FaTwitter } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa6";

const Footer = () => {
  return (
    <div className="footer-main">
      <div className="main-box-footer">
        <div className="footer">
          <div className="footer-box">
            <img src={logobig} alt="" />
            <br />
            <p>
              We're shutting the door on <br /> second-rate student housing
            </p>
          </div>
          <div className="footer-box">
            <h3>Quick Links</h3>
            <br />
            <Link to="/home" className="link-tag">
              Home
            </Link>
            <br />
            <Link to="/reviewproperty" className="link-tag">
              Review a property
            </Link>
            <br />
            <Link to="/articles" className="link-tag">
              Articles
            </Link>
            <br />
            <p>About us</p>
            <br />
            <p>Contact us</p>
            <br />
            <p>Terms & Conditions</p>
            <br />
            <p>Privacy Policy</p>
          </div>
          <div className="footer-box footer-flex">
            <h3>Stay in touch</h3>
            <br />
            <BiSolidPhoneCall /> <p>012 9638595661</p>
            <br />
            <TfiEmail /> <p>info@uniletadvisor.com</p>
            <br />
            <CiLocationOn />
            <p>10 Archibald St Toowoomba QLD 4350</p>
            <br />
          </div>
          <div className="footer-box footer-flex">
            <h3>Connect with</h3>
            <br />

            <p>
              {" "}
              <FaFacebookF /> Facebook
            </p>
            <br />
            <p>
              <FaTwitter /> Twitter
            </p>
            <br />
            <p>
              {" "}
              <FaInstagram /> Instagram
            </p>
          </div>
        </div>
        <p>Unilet Advisor © 2020. All Rights Reserved.</p>
      </div>
    </div>
  );
};

export default Footer;
