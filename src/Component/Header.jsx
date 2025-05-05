// import React from "react";
// import "./Header.css";
// import logo from "../assets/images/Logo.png";
// import { Link } from "react-router-dom";

// const Header = () => {
//   return (
//     <>
//       <div className="Header">
//         <div className="logo">
//           <img src={logo} alt="" />
//         </div>
//         <div className="box">
//           <Link to="/home">
//             <button>Home</button>
//           </Link>
//           <Link to="/reviewproperty">
//             <button>Review a property</button>
//           </Link>
//           <Link to="/readreview">
//             <button>Read Review</button>
//           </Link>
//           <Link to="/articles">
//             <button>Articles</button>
//           </Link>
//         </div>
//         <div className="login">
//           <Link to="/login">
//             <button>Log in</button>
//           </Link>
//         </div>
//       </div>
//     </>
//   );
// };

// export default Header;

import React, { useState } from "react";
import "./Header.css";
import logo from "../assets/images/Logo.png";
import { Link } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";

const Header = () => {
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <div className="Header">
      <div className="logo">
        <img src={logo} alt="Logo" />
      </div>

      <div className={`nav-links ${isMobileMenuOpen ? "open" : ""}`}>
        <Link to="/home" onClick={toggleMenu}>
          <button>Home</button>
        </Link>
        <Link to="/reviewproperty" onClick={toggleMenu}>
          <button>Review a property</button>
        </Link>
        <Link to="/readreview" onClick={toggleMenu}>
          <button>Read Review</button>
        </Link>
        <Link to="/articles" onClick={toggleMenu}>
          <button>Articles</button>
        </Link>
        <Link to="/login" onClick={toggleMenu}>
          <button className="login-btn">Log in</button>
        </Link>
      </div>

      <div className="menu-icon" onClick={toggleMenu}>
        {isMobileMenuOpen ? <FaTimes /> : <FaBars />}
      </div>
    </div>
  );
};

export default Header;
