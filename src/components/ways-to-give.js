import React from 'react';
import FeatureGive from '../images/Django.png';

import Give1 from '../images/give1.png';
import Give2 from '../images/give2.png';
import Give3 from '../images/give3.png';
import Give4 from '../images/give4.png';

const Give = (props) => (

<section className="container u-m-t-100">
<div className="columns is-mobile is-centered is-vcentered">
  
  <div className="column">
    <h1>{props.title}</h1>
    <p>Your support helps develop STEAM-based solutions for a healthy, safe, and sustainable future.  – please know that every little bit counts.</p>

    <p>Ask your employer if they have a matching program in place, our <strong>Federal Taxpayer ID is 82-4398280</strong>. See our listing on the nation's premier nonprofit database <strong><a href="https://www.guidestar.org/profile/82-4398280">GuidStar</a></strong>.</p>
  </div>
  <div className="column">
    <figure className="image">
      <img src={FeatureGive} alt="" />
      <figcaption className="has-text-centered">Board members Rebecca, Carol and Brent at Spokanes’ first Django Girls Workshop, summer 2018</figcaption>
    </figure>
  </div>
</div>

<div className="container has-text-centered">
<h2 className="">MAKE A DONATION</h2>
  <div className="columns is-multiline">

  <div className="column is-half is-multiline">
    <div class="columns is-multiline">
      <div className="column is-half">
        <img src={Give1} alt="" />
      </div>
      <div className="column is-half">
        <img src={Give2} alt="" />
      </div>
      <div className="column is-half">
        <img src={Give3} alt="" />
      </div>
      <div className="column is-half">
        <img src={Give4} alt="" />
      </div>
    </div>
  </div>

  <div className="column is-half has-text-left">
    <div className="column notification u-p-b-30" >
      <h4>Our community is strong because your support makes all the difference.</h4>

      <hr className="hrline" />

        <p>Future Ada relies heavily on the generosity of our donors to be able to provide education to create awareness, excitement, and opportunities among women and non-binaries to pursue successful STEAM-related careers.</p>

        <p>Our secure online donation system is managed through Stripe.  Your donation will show up as “<strong>FutureADA ORG</strong>” on your statement.</p>


        <a href="" className="clicky">MAKE A DONATION</a>
        
    </div>
  </div>

  {/* End the colum */}
 </div>
 


 <article className="message">
      <div className="message-body has-text-centered cta u-p-t-30 u-p-b-30">

      <div class="columns">

<div className="column is-half">
      <blockquote className="quote u-p-t-20">
      Art + Design are poised to transform our economy in the 21st century just as science and technology did in the last century. To do this We need to add Art + Design to the equation — to transform STEM into STEAM.
      </blockquote> 
</div>
      <div className="column is-half">
        <img src={Give1} alt="" />
      </div>
      </div>

      </div>
    </article>
</div> 



</section>
);

export default Give;