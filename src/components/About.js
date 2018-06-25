import React from 'react';
import FeatureAbout from '../images/Science.png';

import Board from './Board';
import boardmember from '../data/board.json';

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


  <article className="message">
    <div className=" has-text-left cta u-p-50">

      <h2>Our Vision</h2>
      <p>To create a diverse and inclusive environment within all of the STEAM fields.</p>

      <h2>Our Mission</h2>
      <p>To secure space for women and non-binary individuals in the STEAM (science, technology, engineering, art, and mathematics) fields.</p>

      <h2>Why it matters</h2>
      <p>STEAM, which involves a collaborative mix of Science, Technology, Engineering, Art, and Mathematics, is vital to our future. Diversity expands worldliness, expands social development, promotes creative thinking and prepairs us for the global society.</p>

    </div>
  </article>

  <section>

    <h2>Board of Directors</h2>
    <p>Future Ada is led by a volunteer Board of Directors who determine policies, guide financial decisions, and oversee the success of the organization.</p>

    <section className="section has-text-centered">

<h2 className="has-text-centered u-p-30">WHO WE ARE</h2>

  <div className="container">
      <div className="columns is-multiline">

        {boardmember.map((boardmember, idx) => {
          return <Board key={idx} boardmember={boardmember} />
        })}

      </div>
  </div>
</section>

    

  </section>

</section>
);

export default About;