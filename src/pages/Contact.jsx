import React from 'react'

const Contact = () => {
    const contactset = [
        {
            id: 1,
            logo: <i class="ri-mail-line"></i>,
            text: "Email",
            description: "vibhuti@karia.dev"
        },
        {
            id: 2,
            logo: <i class="ri-github-line"></i>,
            text: "GitHub",
            description: "github.com/vibhutikariya2006"
        },
        {
            id: 3,
            logo: <i class="ri-linkedin-line"></i>,
            text: "LinkedIn",
            description: "linkedin.com/in/vibhutikariya"
        },
        {
            id: 4,
            logo: <i class="ri-map-pin-line"></i>,
            text: "Location",
            description: "Rajkot, India"
        }

    ]
    return (
        <div className="contact-section">
            <div className="contact-top  about-top">
                <h2>Let's build something <br /><span>great.</span></h2>
            </div>
            <div className="contact-bottom">
                <div className="contact-right">
                    <div className="contact-info">
                        {contactset.map((contact) => (
                            <div key={contact.id} className="contact-item">
                                <div className="contact-icon logo-circle">
                                    {contact.logo}
                                </div>
                                <div className="contact-details">
                                    <h3>{contact.text}</h3>
                                    <p>{contact.description}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
                <div className="contact-left">
                    <form>
                        <div>
                            <label htmlFor="name">Name</label>
                            <input type="text" id="name" placeholder="Your Full Name" />
                        </div>
                        <div>
                            <label htmlFor="email">Email</label>
                            <input type="email" id="email" placeholder="you@company.com" />
                        </div>
                        <div>
                            <label htmlFor="message">Message</label>
                            <textarea id="message" placeholder="Your message here..."></textarea>
                        </div>
                        <button type="submit">
                            Send Message <i className="ri-send-plane-line"></i>
                        </button>     
                         </form>

                </div>
            </div>
        </div>
    )
}

export default Contact