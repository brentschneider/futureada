import React from 'react';
import  { NavLink } from 'react-router-dom';

const Footer = () => (

<footer class="footer u-m-t-30">
    <div className="container">
      <div className="content has-text-centered">


      <h3><strong>Category</strong></h3>
            <ul>
            <li className="navbar-item"><NavLink exact to="/about" >ABOUT US</NavLink></li>
            <li className="navbar-item"><NavLink to="/resources">RESOURCES</NavLink></li>
            <li className="navbar-item"><NavLink to="/ways-to-give">WAYS TO GIVE</NavLink></li>
            <li className="navbar-item"><NavLink to="/hangout">HANG OUT</NavLink></li>
            </ul>

    <div class="content has-text-centered">
        <div class="control level-item">
            <a href="https://github.com/futureada">
                <div class="tags has-addons">
                    <span class="tag is-dark">Future Ada</span>
                    <span class="tag is-info">github</span>
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