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
    <h1>Lorem ipsum dolor sit amet</h1>
    <h2>Consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua</h2>
    <p>Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
    <a href="#" className="button u-m-t-20">lorem ipsum</a>
    </section>

    <section className="resource u-m-t-20 u-p-b-20">
    <h1>Lorem ipsum dolor sit amet</h1>
    <h2>Consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua</h2>
    <p>Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
    <a href="#" className="button u-m-t-20">lorem ipsum</a>
    </section>

    <section className="resource u-p-b-20">
    <h1>Lorem ipsum dolor sit amet</h1>
    <h2>Consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua</h2>
    <p>Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
    <a href="#" className="button u-m-t-20">lorem ipsum</a>
    </section>



  </section>


);

export default Resources;