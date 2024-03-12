import React from "react";
import "./Navbar.scss";
import { useState } from "react";
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
        <a href="">Home</a>
        <a href="">About</a>
        <a href="">Contact</a>
      </div>
      <div className="right">
        <a href="">Sign In</a>
        <a className="register" href="">
          Sign Up
        </a>
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
