import React from 'react';

import FeatureNASA from '../images/NASA.png';

const Hangout = (props) => (

  <section className="container u-m-t-100">
    <div className="columns is-mobile is-centered is-vcentered">
      
      <div className="column">
        <h1>{props.title}</h1>
        <p>Connect with like minded groups below, don't see one your interested in, let us know – we can help connect you or set something up.</p>
      </div>
      <div className="column">
        <figure className="image">
          <img src={FeatureNASA} alt="" />
          <figcaption className="has-text-centered">2018 Women in Science Day. <br />Image credit: NASA/JPL-Caltech</figcaption>
        </figure>
      </div>
    </div>


    <section className="resource u-m-t-20 u-p-b-20">
    <h1>Connect on Facebook</h1>
    
    <p>We are a non-profit organization based in Spokane, Washington.  Our mission is in securing space for women and non-binary individuals in the science, technology, engineering, arts and mathematics (STEAM) fields.</p>
    <a href="https://business.facebook.com/futureada/" className="button u-m-t-20">FACEBOOK PAGE</a>
    </section>

    <section className="resource u-m-t-20 u-p-b-20">
    <h1>Follow on Twitter</h1>
    
    <p>It is our belief that the fields of science, technology, engineering, arts and mathematics are stronger when they are both diverse and inclusive.</p>
    <a href="https://www.facebook.com/futureada/" className="button u-m-t-20">TWITTER</a>
    </section>

    <section className="resource u-p-b-20">
    <h1>Linkedin</h1>
    
    <p>We want to do our part to help ensure that these fields are open, available, and safe for women and non-binary individuals to be a part of.</p>
    <a href="https://www.linkedin.com/company/futureada/" className="button u-m-t-20">LINKEDIN</a>
    </section>



  </section>
  
);

export default Hangout;