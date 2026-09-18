import React from 'react'

const About = () => {
  const boxtext = [
    { id: 1, number: "5+", text: "Years Learning" },
    { id: 2, number: "50+", text: "Projects Shipped" },
    { id: 3, number: "20+", text: "Happy Clients" },
    { id: 4, number: "100% ", text: "Dedication" }
  ]
  return (
    <div className="about-section">
      <div className="about-top">
        <h2>The developer behind the <br /><span>pixels.</span></h2>
      </div>
      <div className="about-bottom">
        <div className="about-left">
          <div className="image-card">
          
                    <img src="https://i.pinimg.com/736x/28/1c/d5/281cd5cc2499c1e9d94e9576e8dc1c36.jpg" alt="Developer" />
          
                  </div>
        </div>
        <div className="about-right">
          <span> Hello! I'm Vibhuti Kariya, an aspiring Full Stack Developer currently pursuing my BCA while continuously expanding my knowledge of modern web development. I have a passion for building responsive, interactive, and visually appealing websites that provide a great user experience. I enjoy learning new technologies, solving real-world problems through code, and challenging myself with projects that help me grow both technically and creatively. Every project I build is an opportunity to improve my skills and move one step closer to becoming a professional software developer.</span>
          <div className="about-boxes">
            {boxtext.map((item) => (
              <div className="box" key={item.id}>
                <h3>{item.number}</h3>
                <p>{item.text}</p>
              </div>
            ))} 
          </div>
        </div>
      </div>
    </div>
  )
}

export default About