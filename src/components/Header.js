import React from 'react';
import  { NavLink } from 'react-router-dom';

import mainLogo from '../images/FutureAda.png';

const Header = () => (
  
<div class="hero-head">
  <nav class="navbar is-fixed-top">
    <div class="container">

      <div class="navbar-start u-m-t-10">
        <p classNme="navbar-item">
        <NavLink exact to="/about" className="navbar-item">ABOUT US</NavLink></p>
        <p classNme="navbar-item">
        <NavLink to="/resources" className="navbar-item">RESOURCES</NavLink></p>
        <p classNme="navbar-item">
        <NavLink to="/ways-to-give" className="navbar-item">WAYS TO GIVE</NavLink></p>
        <p classNme="navbar-item">
        <NavLink to="/hangout" className="navbar-item">HANG OUT</NavLink></p>
      </div>

      <div className="navbar-end">
        <a class="" href="https://www.futureada.org">
        <img src={mainLogo} alt="Future Adaa" width="340" height="65" className="logo" /></a>
      </div>

    </div>
  </nav>
</div>
);

export default Header;