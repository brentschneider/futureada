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
  </section>
  
);

export default Hangout;