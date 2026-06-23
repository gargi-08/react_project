import React from 'react'
import "./home.css";
// import classroom from "./assets/classroom.avif";


const Home = () => {
  return (
    <>
     <section className="hero">
        <div className="overlay">
          <div className="hero-content">
            <h1>Ideas start here</h1>
            <p>
              Discover opportunities and transform your vision into reality.
            </p>

            <div className="hero-buttons">
              <button className="btn-primary">Learn More</button>
              <button className="btn-secondary">Watch Video</button>
            </div>
          </div>
        </div>
      </section>

      <section className="clients">
        <h2>What Our Clients Say</h2>

        <div className="testimonial-container">
          <div className="testimonial">
            <h4>John Doe</h4>
            <p>
              Launch Works helped us create a strong strategy and improve our
              business growth significantly.
            </p>
          </div>

          <div className="testimonial">
            <h4>Jane Smith</h4>
            <p>
              Professional team, creative solutions, and excellent support
              throughout the project.
            </p>
          </div>
        </div>
      </section>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
    </>
  )
}

export default Home