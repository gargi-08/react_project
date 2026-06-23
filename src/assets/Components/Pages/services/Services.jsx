import React from 'react';
import "./Services.css";

const services = [
  {
    icon: "🎨",
    title: "Product Design",
    desc: "We craft user-centered interfaces that are both beautiful and functional — from early wireframes to polished, developer-ready designs.",
    tags: ["UI/UX", "Figma", "Prototyping"],
  },
  {
    icon: "💻",
    title: "Web Development",
    desc: "Fast, responsive, and accessible websites built with modern technologies that scale with your business needs.",
    tags: ["React", "Node.js", "Tailwind"],
  },
  {
    icon: "📱",
    title: "Mobile Apps",
    desc: "Native and cross-platform mobile applications that deliver smooth experiences on both iOS and Android.",
    tags: ["React Native", "iOS", "Android"],
  },
  
];

const steps = [
  { num: "1", title: "Discovery", desc: "We learn about your goals, users, and challenges." },
  { num: "2", title: "Strategy", desc: "We define a clear plan and scope for your project." },
  { num: "3", title: "Build", desc: "Our team designs and develops your solution." },
  { num: "4", title: "Launch", desc: "We ship, test, and support your product live." },
];

const Services = () => {
  return (
    <>
      <section className="services-header">
        <h1>Our Services</h1>
        <p>
          Everything you need to take your idea from concept to a
          product people love.
        </p>
      </section>

      <section className="services-section">
        <h2>What We Offer</h2>
        <p className="subtitle">
          Tailored solutions for every stage of your business journey.
        </p>

        <div className="services-grid">
          {services.map((service, index) => (
            <div className="service-card" key={index}>
              <span className="service-icon">{service.icon}</span>
              <h3>{service.title}</h3>
              <p>{service.desc}</p>
              <div className="service-tags">
                {service.tags.map((tag) => (
                  <span className="service-tag" key={tag}>{tag}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
    </>
  );
};

export default Services;