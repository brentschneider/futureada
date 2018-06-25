import React from 'react';
import { Timeline } from 'react-twitter-widgets';
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
      <blockquote className="quote ">
         The Analytical Engine weaves algebraic patterns, just as the Jacquard loom weaves flowers and leaves. <span className="is-small">– Ada Lovelace (<a href="https://en.wikipedia.org/wiki/Ada_Lovelace" target="_blank" rel="noopener noreferrer">Wikipedia </a> </span>
      </blockquote> 
      </div>
    </article>


  <section className="section has-text-centered">

    <h2 className="has-text-centerd u-p-30">WHO WE ARE</h2>

      <div className="container">
          <div className="columns">

              <div className="column">
                  <div className="notification">
                      <h4>Who we are</h4>
                      <p className="has-text-left">
                      Our mission is in securing space for women and non-binary individuals in the science, technology, engineering, arts and mathematics (STEAM) fields.</p>
                      <a href="" className="clicky">WHAT WE STAND FOR</a>
                      
                  </div>
              </div>

              <div className="column">
                  <div className="notification">
                    <h4>Board of Directors</h4>
                    <p className="has-text-left">We want to do our part to help ensure that these fields are open, available, and safe for women and non-binary individuals to be a part of.</p>
                    <a href="" className="clicky">ABOUT US</a>
                      
                  </div>
              </div>

              <div className="column">
                  <div className="notification">
                    <h4>Code of Conduct</h4>
                      <p className="has-text-left">
                      Future Ada is dedicated to providing an inclusive, safe, welcoming, harassment free space where community members feel comfortable participating and being themselves.</p>
                      <a href="" className="clicky">CODE OF CONDUCT</a>
                    
                  </div>
              </div>

          </div>
      </div>
  </section>

  <div className="card">
    <div className="card-content">
      <div className="media">


<Timeline
    dataSource={{
      sourceType: 'profile',
      screenName: 'futureada'
    }}
    options={{
      username: 'futureada',
      height: '520',
      width: 900
    }}
    //  Removed after testing
    //  onLoad={() => console.log('Timeline is loaded!')}
  />
      </div>
    </div>
</div>

</section>
);

export default Home;