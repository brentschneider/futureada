import React from 'react';
import FeatureAbout from '../images/Science.png';

const About = (props) => (

  <section className="container u-m-t-100">
    <div className="columns is-mobile is-centered is-vcentered">
      
      <div className="column">
        <h1>{props.title}</h1>
        <p>It is our belief that the fields of science, technology, engineering, art and mathematics are stronger when they are both diverse and inclusive.</p>

        <p>We want to do our part to help ensure that these fields are open, available, and safe for women and non-binary individuals to be a part of.</p>
      </div>
      <div className="column">
        <figure className="image">
          <img src={FeatureAbout} alt="" />
          <figcaption className="has-text-centered">We draw our inspiration from <br />Ada Lovelace and Rosie the Riveter</figcaption>
        </figure>
      </div>
    </div>
  </section>
);

export default About;