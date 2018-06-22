import React, { Component } from 'react';

import FeatureHome from '../images/FutureAdaOrg.png';

const Home = (props) => (


  <section className="container u-m-t-100">
    <div className="columns is-mobile is-centered is-vcentered">
      
      <div className="column">
      <h1>{props.title}</h1>
        <p>Hi, our mission is to secure space for women and non-binary individuals in the STEAM (science, technology, engineering, art, and mathematics) fields.
        </p>
        
        <p>We stand by the following values, through collaboration we aim to create a diverse and inclusive environment within all of the STEAM fields.</p>
      </div>
      <div className="column">
        <figure className="image">
          <img src={FeatureHome} alt="" />
          <figcaption className="has-text-centered">We draw our inspiration from <br />Ada Lovelace and Rosie the Riveter</figcaption>
        </figure>
      </div>
    </div>

    <article className="message">
      <div className="message-body has-text-centered cta u-p-t-50 u-p-b-50">
      <blockqoute className="quote ">The Analytical Engine weaves algebraic patterns, just as the Jacquard loom weaves flowers and leaves. <span className="is-small">– Ada Lovelace (<a href="https://en.wikipedia.org/wiki/Ada_Lovelace" target="_blank">Wikipedia </a>)</span></blockqoute> 
      </div>
    </article>


    <section className="section has-text-centered">

    <h2 className="has-text-centerd u-p-30">WHO WE ARE</h2>

      <div className="container">
          <div className="columns">
              <div className="column">
                  <div className="notification">
                      <h4>Who we are</h4>
                      <p className="has-text-left">Bulma is a modern CSS framework from @jgthms, based on Flexbox.
                      </p>
                      <a href="" className="clicky">WHAT WE STAND FOR</a>
                  </div>
              </div>
              <div className="column">
                  <div className="notification">
                    <h4>Board of Directors</h4>
                    <p className="has-text-left"> Flexbox is a CSS spec that makes sectioning and aligning more natural.
                    <a href="" className="clicky">CLICK ME IM OPEN!</a>
                      </p>
                  </div>
              </div>
              <div className="column">
                  <div className="notification">
                    <h4>Code of Conduct</h4>
                      <p className="has-text-left">
                          Instead of writing our CSS per-element, we can use predefined classes.
                          <a href="" className="clicky">CLICK ME IM OPEN!</a>
                      </p>
                  </div>
              </div>
          </div>
      </div>
  </section>

  <div className="card">
    
    <div className="card-content">
      <div className="media">
        <div className="media-left">
          <figure className="image is-48x48">
            <img src="https://bulma.io/images/placeholders/96x96.png" alt="Placeholder image" />
          </figure>
        </div>
        <div className="media-content">
          <p className="title is-4">John Smith</p>
          <p className="subtitle is-6">@johnsmith</p>
        </div>
      </div>

      <div className="content">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        Phasellus nec iaculis mauris. <a>@bulmaio</a>.
        <a href="#">#css</a> <a href="#">#responsive</a>
        
      </div>
    </div>
</div>



  </section>
);

export default Home;