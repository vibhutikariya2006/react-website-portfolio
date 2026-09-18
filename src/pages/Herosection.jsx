import React from "react";
import image from "../../public/image-1.png"
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
          Full Stack Developement Learner • HTML • CSS • Javascript • React.
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

          <img src={image} />

          <div className="tag top-left">
            React
            <br />
            <strong>90% Coverage</strong>
          </div>

          <div className="tag bottom-right">
            Javascript
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