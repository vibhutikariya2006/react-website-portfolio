import React from "react";


const Projects = () => {
  const projectData = [
    {
      id: 1,
      image: "https://freshcart-nextjs.codescandy.com/assets/images/overview/home-page-1.jpg",
      title: "NextMart Ecommerce Store",
      description: "A modern and responsive e-commerce website where users can browse products, search items, add products to the cart, and enjoy a smooth online shopping experience with an intuitive user interface.",
      tech: ["HTML", "CSS", "JavaScript"],
      github: "https://github.com/vibhutikariya2006/projects.git",
    },
    {
      id: 2,
      image: "https://s3-alpha.figma.com/hub/file/3646370545/ec9cac8d-97b7-4b90-9ca7-1e642499c104-cover.png",
      title: "Hotel Booking App",
      description: "A responsive hotel booking website where users can browse hotels, explore room details, and make reservations through a clean and user-friendly interface.",
      tech: ["HTML", "CSS"],
      github: "https://github.com/vibhutikariya2006/hotel-booking.git",
    },
    {
      id: 3,
      image: "https://cyberchimps.com/wp-content/uploads/2022/05/Coffee-Shop.webp",
      title: "Coffee Store Website",
      description: "A modern coffee shop website featuring a responsive design, menu showcase, featured products, and an easy-to-use interface for exploring coffee collections.",
      tech: ["HTML", "CSS"],
      github: "https://github.com/vibhutikariya2006/Coffee-Store-Website.git",
    },
    {
      id: 4,
      image: "https://websitedemos.net/homemade-beauty-products-02/wp-content/uploads/sites/830/2021/08/homemade-beauty-products-social-image.jpg",
      title: "Beauty Store Website",
      description: "A responsive beauty and skincare e-commerce website that showcases products with attractive layouts, category sections, and a seamless shopping experience.",
      tech: ["HTML", "CSS"],
      github: "https://github.com/vibhutikariya2006/Beauty-store-website.git",
    },
    {
      id: 5,
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRK7RmOIBS3s-C1KEF7t4zP4lWPoVhQ5DAaam_nd8WxC8CjMI2Kk5pzJgcY&s=10",
      title: "Weather API",
      description: "A weather application that fetches real-time weather data using the OpenWeather API, displaying temperature, humidity, wind speed, and weather conditions for any city.",
      tech: ["HTML","Tailwind CSS", "JavaScript", "API"],
      github: "https://github.com/vibhutikariya2006/javascript.git",
    },
    {
      id: 6,
      image: "https://cdn.dribbble.com/userupload/43183102/file/original-abab8749a2d37fa64344e8f9eebefe8d.png?format=webp&resize=400x300&vertical=center",
      title: "Product Manager",
      description: "A product management dashboard that allows users to add, edit, delete, and organize products with an intuitive interface for efficient inventory management.",
      tech: ["HTML","Tailwind CSS", "JavaScript", "API"],
      github: "https://github.com/vibhutikariya2006/javascript.git",
    }
  ];

  return (
    <section className="project-section">


      <h1>
        Selected <span>Projects.</span>
      </h1>

      <div className="project-container">
        {projectData.map((project) => (
          <div className="project-card" key={project.id}>
            <img src={project.image} alt={project.title} />

            <div className="project-cardcontent">
              <h2>{project.title}</h2>

              <p>{project.description}</p>

              <div className="projecttech">
                {project.tech.map((item, index) => (
                  <span key={index}>{item}</span>
                ))}
              </div>

              <a
                href={project.github}
                target="_blank"

              >
                View on GitHub
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
         );
};

export default Projects;