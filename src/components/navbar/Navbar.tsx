import React from "react";
import "./Navbar.scss";
import { useState } from "react";
import { Link } from "react-router-dom";
const Navbar: React.FC = () => {
  const [open, setOpen] = useState(false);
  const handleOpenMenuClick = () => {
    setOpen((prevState) => !prevState);
  };
  return (
    <nav>
      <div className="left">
        <a className="logo" href="/">
          <img src="logo.png" />
          <span>AN</span>
        </a>
        <Link to="/">Home</Link>
        <Link href="/about">About</Link>
        <Link href="/contacts">Contact</Link>
      </div>
      <div className="right">
        <a href="">Sign In</a>
        <Link className="register" to="/register">
          Sign Up
        </Link>
        <div className="menuIcon">
          <img src="menu.png" alt="" onClick={handleOpenMenuClick} />
        </div>
        <div className={open ? "menu active" : "menu"}>
          <a href="">Home</a>
          <a href="">About</a>
          <a href="">Contact</a>
          <a href="">Sign In</a>
          <a href="">Sign In</a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
