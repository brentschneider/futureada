import React from 'react';
import FeatureResource from '../images/NASA.png';

const Resources = (props) => (

<section className="container u-m-t-100">
    <div className="columns is-mobile is-centered is-vcentered">
      
      <div className="column">
        <h1>{props.title}</h1>
        <p>Interested in volunteering, partnering, or learning more? Contact us to find out more about what we currently have going on for opportunities!</p>
      </div>
      <div className="column">
        <figure className="image">
          <img src={FeatureResource} alt="" />
          <figcaption className="has-text-centered">We draw our inspiration from <br />Ada Lovelace and Rosie the Riveter</figcaption>
        </figure>
      </div>
    </div>

    <section className="resource u-m-t-20 u-p-b-20">
    <h1>DjangoGirls Workshop</h1>
    <h2>Workshop – Sept 28 & 29, 2018</h2>
    <p>A one-day free workshop for women on programming to learn Python and Django. More details and registration information coming soon! @ Startup Spokane.</p>
    <a href="https://djangogirls.org/events/" className="button u-m-t-20">WORKSHOP INFORMATION</a>
    </section>

    <section className="resource u-m-t-20 u-p-b-20">
    <h1>CODE: Debugging the Gender Gap</h1>
    <h2>Event: TBA Fall, 18</h2>
    <p>CODE documentary exposes the dearth of American female and minority software engineers and explores the reasons for this gender gap.</p>
    <a href="https://www.facebook.com/futureada/" className="button u-m-t-20">UPCOING EVENTS</a>
    </section>

    <section className="resource u-p-b-20">
    <h1>Want to be a developer?</h1>
    <h2>Partner – Ada Developers Academy</h2>
    <p>The Ada program consists of six months of classroom training followed by five months in a paid, learning internship in the greater Seattle area as a software developer.</p>
    <a href="https://www.adadevelopersacademy.org/" className="button u-m-t-20">SEATTLE PARTNER</a>
    </section>



  </section>


);

export default Resources;