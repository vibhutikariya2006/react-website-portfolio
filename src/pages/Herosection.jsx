import React from "react";

function HeroSection() {

  return (
    <section >
     <section className="hero">
      {/* Left Side */}
      <div className="hero-left">

        <div className="status">
          <span className="dot"></span>
          Available for freelance • Q2 2026
        </div>

        <h1>
          Crafting <br />
          Digital <br />
          <span>Experiences.</span>
        </h1>

        <p>
          Full Stack Developer • React • Node.js • MongoDB • UI Designer.
          <br />
          Building fast, elegant products that feel as good as they look.
        </p>

        <div className="hero-buttons">
          <button className="project-btn">
            View Projects →
          </button>

          <button className="resume-btn">
            Download Resume
          </button>
        </div>

      </div>

      {/* Right Side */}
      <div className="hero-right">

        <div className="image-card">

          <img src="https://img.magnific.com/free-photo/brunette-business-woman-with-wavy-long-hair-blue-eyes-stands-holding-notebook-hands_197531-343.jpg?semt=ais_hybrid&w=740&q=80" alt="Developer" />

          <div className="tag top-left">
            React
            <br />
            <strong>98% Coverage</strong>
          </div>

          <div className="tag bottom-right">
            Node.js
            <br />
            <strong>120ms</strong>
          </div>

        </div>

      </div>
      </section >  
      <div className="marquee-section">
        <marquee behavior="" direction="">
          <p>HTML</p>
          <span><i class="ri-shining-fill"></i></span>
          <p>CSS</p>
          <span><i class="ri-shining-fill"></i></span>
          <p>JavaScript</p>
          <span><i class="ri-shining-fill"></i></span>
          <p>React</p>
          <span><i class="ri-shining-fill"></i></span>
          <p>Node.js</p>
          <span><i class="ri-shining-fill"></i></span>
          <p>Tailwind CSS</p>
          <span><i class="ri-shining-fill"></i></span>
          <p>Bootstrap</p>
          <span><i class="ri-shining-fill"></i></span>
        </marquee>
      </div>
    </section>

 
    
  );
}

export default HeroSection;