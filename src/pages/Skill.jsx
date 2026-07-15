import React from 'react'


const Skill = () => {
  const skillset = [
    {id: 1,
      logo: <i class="ri-code-s-slash-line"></i>,
     name: "Frontend",
     skills: ["HTML", "CSS", "JavaScript", "Tailwind CSS" , "TypeScript", "React", "Next.js", "Bootstrap"]
    },
    {id: 2,
      logo: <i class="ri-server-line"></i>,
     name: "Backend",
     skills: ["Node.js", "Express.js", "Firebase", "SQL", "MongoDB"]
    },
    {id: 3,
      logo: <i class="ri-palette-line"></i>,
      name: "Tools",
      skills: ["Git", "GitHub", "VS Code", "Postman", "Figma"]
    }
  ]
  return (
    <section className="skill-section">
        <div className="skill-top  about-top">
        <h2>Stack that <br /><span>ships.</span></h2>
      </div>
      <div className="skills-container">
      {skillset.map((item) => (
        <div className="skillcard" key={item.id}>
          <div className="skilllogo">{item.logo}</div>

          <h2>{item.name}</h2>

          <div className="skill-list">
            {item.skills.map((skill, index) => (
              <span className="skilltech" key={index}>
                {skill}
              </span>
            ))}
          </div>
        </div>
      ))}
    </div>
    </section>
  )
}

export default Skill