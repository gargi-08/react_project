import React from 'react';
import "./About.css";

const About = () => {
  return (
    <>
      <section className="about-header">
        <h1>About Us</h1>
        <p>
          We're a passionate team of designers, developers, and strategists
          on a mission to help businesses grow through great digital products.
        </p>
      </section>

      <section className="about-story">
        <div className="about-story-text">
          <h2>Our Story</h2>
          <p>
            Launch Works was founded in 2013 with a simple belief: that great
            design and solid engineering should be accessible to every business,
            not just the big ones.
          </p>
          <p>
            Over the years we've grown from a two-person studio into a full-service
            digital team — but our approach has stayed the same. We listen first,
            build smart, and always keep your goals at the center of everything we do.
          </p>
          <p>
            Today we partner with startups, scale-ups, and established brands to
            design and build products people genuinely love to use.
          </p>
        </div>
        <div className="about-story-image">
          🚀
        </div>
      </section>

      <br></br>
      <br></br>
    </>
  );
};

export default About;