import React from 'react';


const Review = () => {
  const reviewset = [
    {
      id: 1,
      star: <i class="ri-star-fill"></i>,
      name: "Sarah Chen",
      logo: "SC",
      position: "Product Lead, Northwind",
      review: "Alex has an unusual eye for craft. Our dashboard shipped faster and felt better than anything we've built in-house."
    },
    {
      id: 2,
      star: <i class="ri-star-fill"></i>,
      name: "Marcus Weber",
      logo: "MW",
      position: "Founder, Studio Nova",
      review: "The best kind of engineer — moves like a designer, ships like a machine. Every project got measurably faster."
    },
    {
      id: 3,
      star: <i class="ri-star-fill"></i>,
      name: "Priya Kapoor",
      logo: "PK",
      position: "CTO, Kite AI",
      review: "From API design to interaction details, Alex owned the full stack and elevated the product across the board."
    }
  ]
  return (
    <section className="review-section">
      <div className="review-top  about-top">
        <h2>What Client <br /><span>says.</span></h2>
      </div>
      <div className="review-container">
        {reviewset.map((review) => (
          <div key={review.id}>
            <div className="stars">
              {Array(5)
                .fill()
                .map((_, index) => (
                  <i key={index} className="ri-star-fill"></i>
                ))}
            </div>
            <div className='project-cardcontent'>
              <p>{review.review}</p>
            </div>
            
            <div className="review-user">
              <div className="review-logo logo-circle">
                {review.logo}
              </div>
              <div>
                <h3>{review.name}</h3>
                <p>{review.position}</p>
              </div>
            </div>

          </div>
        ))}
      </div>
    </section>
  )
}

export default Review