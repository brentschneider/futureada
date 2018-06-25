import React from 'react';

import theLogo from '../images/Future_Ada_logo.png';

const Footer = () => (

<footer className="footer u-m-t-30">

<div className="columns is-multiline is-mobile">

    <div className="column is-half has-text-right">
        <img src={theLogo} alt="Future Adaa" width="340" height="65" className="logo" />
    </div>

    <div className="column is-half has-text-left">
        
        <h3>Address: </h3>
        <p>PO Box 294, Liberty Lake, WA 99019</p>

        <h3>General Inquires</h3>
        <p>email: <a href="mailto:hello@futureada.org">hello@futureada.org</a></p>
    </div>    

</div>

    <div className="content has-text-centered">

    <p>Copyright Future Ada, a 501(c)3 organization EIN: 82-4398280</p>


    <div className="control level-item">
            <a href="https://github.com/futureada">
                <div className="tags has-addons">
                    <span className="tag is-dark">Future Ada</span>
                    <span className="tag is-info">github</span>
                </div>
            </a>
        </div>
  </div>

  
    <script src="../js/bulma.js"></script>
  </footer>
);

export default Footer;