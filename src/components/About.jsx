// src/components/About.jsx
import React from "react";
import "./css/About.css";

const About = () => {
  return (
    <section id="about" className="about-section">
      {/* Left Side Image */}
      <div className="about-image">
         <img
              src="https://images.unsplash.com/photo-1504384308090-c894fdcc538d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
              alt="Innovation Journey"
              className="rounded-2xl shadow-lg w-full max-w-md"
            />
      </div>

      {/* Right Side Content */}
      <div className="about-content">
        {/* Heading */}
        <div className="about-header">
          <h2>Our Journey of Innovation</h2>
          <p>
            From a small startup to a global leader, our story is one of passion,
            innovation, and dedication. Every milestone reflects our commitment to
            building technology that transforms lives.
          </p>
        </div>

        {/* Stats Section */}
        <div className="about-stats">
          <div className="stat">
            <h3>10+</h3>
            <p>Years of Excellence</p>
          </div>
          <div className="stat">
            <h3>200+</h3>
            <p>Projects Delivered</p>
          </div>
          <div className="stat">
            <h3>150+</h3>
            <p>Satisfied Clients</p>
          </div>
          <div className="stat">
            <h3>50+</h3>
            <p>Awards & Recognitions</p>
          </div>
        </div>

        {/* Timeline */}
        <div className="timeline">
          <div className="timeline-item">
            <h3>2015 - Foundation</h3>
            <p>TechCore Innovations founded with 5 employees and a vision for innovation</p>
          </div>
          <div className="timeline-item">
            <h3>2017 - First Major Client</h3>
            <p>Secured our first enterprise client, marking our entry into the big leagues</p>
          </div>
          <div className="timeline-item">
            <h3>2019 - Global Expansion</h3>
            <p>Expanded operations to Europe and Asia, establishing our global presence</p>
          </div>
          <div className="timeline-item">
            <h3>2022 - Innovation Awards</h3>
            <p>Received multiple industry awards for innovation and excellence</p>
          </div>
          <div className="timeline-item">
            <h3>2024 - Current</h3>
            <p>200+ employees, 50+ successful projects, and growing stronger every day</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
