import React from 'react';
import FeatureGive from '../images/NASA.png';

const Give = (props) => (

<section className="container u-m-t-100">
<div className="columns is-mobile is-centered is-vcentered">
  
  <div className="column">
    <h1>{props.title}</h1>
    <p>Your support helps develop STEAM-based solutions for a healthy, safe, and sustainable future.  – please know that every little bit counts.</p>

    <p>Ask your employer if they have a matching program in place, our Federal Taxpayer ID is 82-4398280</p>
  </div>
  <div className="column">
    <figure className="image">
      <img src={FeatureGive} alt="" />
      <figcaption className="has-text-centered">We draw our inspiration from <br />Ada Lovelace and Rosie the Riveter</figcaption>
    </figure>
  </div>
</div>
</section>
);

export default Give;