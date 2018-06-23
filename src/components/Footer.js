import React from 'react';
import  { NavLink } from 'react-router-dom';

const Footer = () => (

<footer className="footer u-m-t-30">
    <div className="container">
      <div className="content has-text-centered">


<h3><strong>Category</strong></h3>
    <ul className="has-centered-text">
        <li className="navbar-item"><NavLink exact to="/about" >ABOUT US</NavLink></li>
        <li className="navbar-item"><NavLink to="/resources">RESOURCES</NavLink></li>
        <li className="navbar-item"><NavLink to="/ways-to-give">WAYS TO GIVE</NavLink></li>
        <li className="navbar-item"><NavLink to="/hangout">HANG OUT</NavLink></li>
    </ul>



    <div className="content has-text-centered">
        <div className="control level-item">
            <a href="https://github.com/futureada">
                <div className="tags has-addons">
                    <span className="tag is-dark">Future Ada</span>
                    <span className="tag is-info">github</span>
                </div>
            </a>
        </div>
    </div>
        
        

       
      </div>
    </div>
    <script src="../js/bulma.js"></script>
  </footer>
);

export default Footer;