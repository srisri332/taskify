import React from "react";
import "./Navbar.css";
import task from "../../static/settings (1).png";
import profile from "../../static/user.png";
import logo from "../../static/find.png";
function Navbar() {
  return (
    <div className='main-nav'>
      <div className='left-nav'>
        <div className='hamburger'>
          <div className='line'></div>
          <div className='line'></div>
          <div className='line'></div>
        </div>
        <div className='setting'>
          <img src={task} />
        </div>
        <div className='profile'>
          <img src={profile} />
        </div>
      </div>
      <div className='right-nav'>
        <div className='logo'>
          <img src={logo} />
        </div>
        <p>Taskify</p>
      </div>
    </div>
  );
}

export default Navbar;
