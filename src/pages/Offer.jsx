import React from 'react'

const Offer = () => {
      const offerset = [
    {id: 1,
      logo: <i class="ri-code-s-slash-line"></i>,
     name: "Frontend Development",
     description:"Pixel-perfect, accessible interfaces in React and Next.js."
    },
    {id: 2,
      logo: <i class="ri-server-line"></i>,
     name: "Full Stack Development ",
     description:"End-to-end web apps with clean APIs and scalable data."
    },
    {id: 3,
      logo: <i class="ri-palette-line"></i>,
      name: "UI/UX Design",
      description:"Interfaces designed with taste, motion, and clarity."
    },
    {id: 4,
      logo: <i class="ri-plug-line"></i>,
      name: "API Integration",
      description: "Third-party APIs, auth, payments, AI — wired the right way."
    },
        {id: 5,
      logo: <i class="ri-speed-up-line"></i>,
      name: "Website Optimization",
      description: "Core Web Vitals, SEO, and DX polish for existing sites."
    }
  ]
  return (
       <section className="skill-section">
        <div className="skill-top  about-top">
        <h2>What I <span>Offer.</span></h2>
      </div>
      <div className="offer-container skills-container">
      {offerset.map((item) => (
        <div className="skillcard" key={item.id}>
          <div className="offerlogo skilllogo">{item.logo}</div>

          <h2>{item.name}</h2>

          <div className="offer-list">
            <span>{item.description}</span>
          </div>
        </div>
      ))}
    </div>
    </section>
  )
}

export default Offer

