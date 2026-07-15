import React from 'react'

const Footer = () => {
    const footericon = [
        {id: 1,
        logo: <i class="ri-github-line"></i>,
        },
        {id: 2,
        logo: <i class="ri-linkedin-line"></i>,
        },
        {id: 3,
        logo: <i class="ri-mail-line"></i>,
        }
    ]
  return (
  <div className='footer-section'>
    <div className="line"></div>
    <div className="footer-content">
      <div className="footer-left contact-details">
       <div className='logo-circle'>VK </div> 
       <h3>© 2026 Alex Carter. Crafted with care.</h3>
      </div>
        <div className="footer-right">
          {footericon.map((icon) => (
            <div key={icon.id} className="footer-icon">
              {icon.logo}
            </div>
          ))}
        </div>
    </div>
  </div>
  )
}

export default Footer