import React from "react";
import { Link, NavLink } from "react-router-dom";
import "./Navbar.css";

const Navbar = () => {
  return (
    <div>
      <nav style={{backgroundColor: 'black', }}>
        <div className="nav-wrappers" style={{textAlign: 'center'}}>
          <ul id="nav-mobile" className="hide-on-med-and-down" >
            <li style={{':hover': {color: 'green'}}}>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/contact">Contact</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/signup">SignUp</Link>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;