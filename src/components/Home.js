import React, { Component } from 'react';

import FeatureHome from '../images/FutureAdaOrg.png';

const Home = (props) => (


  <section className="container u-m-t-100">
    <div className="columns is-mobile is-centered is-vcentered">
      
      <div className="column">
      <h1>{props.title}</h1>
        <p>Hi, We are future Ada, our mission is to secure space for women and non-binary individuals in the STEAM (science, technology, engineering, art, and mathematics) fields.</p>

        <p>We stand by the following values, through collaboration we aim to create a diverse and inclusive environment within all of the STEAM fields.</p>
      </div>
      <div className="column">
        <figure className="image">
          <img src={FeatureHome} alt="" />
          <figcaption className="has-text-centered">We draw our inspiration from <br />Ada Lovelace and Rosie the Riveter</figcaption>
        </figure>
      </div>
    </div>
  </section>
);

export default Home;