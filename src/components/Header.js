import React from 'react';
import  { NavLink } from 'react-router-dom';

import mainLogo from '../images/FutureAda.png';

const Header = () => (
  
<div className="hero-head">
  <nav className="navbar is-fixed-top">
    <div className="container">

      <div className="navbar-start u-m-t-10">
        <p className="navbar-item">
        <NavLink exact to="/about" className="navbar-item">ABOUT US</NavLink></p>
        <p className="navbar-item">
        <NavLink to="/resources" className="navbar-item">RESOURCES</NavLink></p>
        <p className="navbar-item">
        <NavLink to="/ways-to-give" className="navbar-item">WAYS TO GIVE</NavLink></p>
        <p className="navbar-item">
        <NavLink to="/hangout" className="navbar-item">HANG OUT</NavLink></p>
      </div>

      <div className="navbar-end">
        <a className="" href="https://brentschneider.github.io/futureada/">
        <img src={mainLogo} alt="Future Adaa" width="340" height="65" className="logo" /></a>
      </div>

    </div>
  </nav>
</div>
);

export default Header;