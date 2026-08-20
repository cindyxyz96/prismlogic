import React from 'react';
import { motion } from 'framer-motion';
import { Star } from 'lucide-react';
import './Testimonials.css';

const Testimonials = () => {
  const reviews = [
    {
      id: 1,
      name: "Sarah Jenkins",
      role: "Operations Director",
      company: "TechFlow Solutions",
      feedback: "PrismLogic completely transformed our back-office. The custom automation workflows they built saved our team over 40 hours a week in manual data entry. Absolutely brilliant execution.",
      rating: 5
    },
    {
      id: 2,
      name: "Marcus Chen",
      role: "CEO",
      company: "Elevate E-Commerce",
      feedback: "The web scraping and CRM sync tools they developed for us are flawless. What used to take a dedicated team of three now happens instantly in the background. Best investment we've made.",
      rating: 5
    },
    {
      id: 3,
      name: "Elena Rodriguez",
      role: "Financial Analyst",
      company: "Apex Capital",
      feedback: "Their Excel and VBA automations are next level. They took our complex, bloated financial spreadsheets and turned them into streamlined, automated dashboards that update in real-time.",
      rating: 5
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2 }
    }
  };

  const cardVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: { 
      y: 0, 
      opacity: 1,
      transition: { type: "spring", stiffness: 100 }
    }
  };

  return (
    <section className="testimonials-section" id="reviews">
      <div className="testimonials-container">
        <motion.div 
          className="testimonials-header"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="section-title">Client Success Stories</h2>
          <p className="section-subtitle">Don't just take our word for it. See how our intelligent automations are driving growth for our clients.</p>
        </motion.div>

        <motion.div 
          className="testimonials-grid"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
        >
          {reviews.map((review) => (
            <motion.div 
              key={review.id} 
              className="review-card glass"
              variants={cardVariants}
            >
              <div className="review-rating">
                {[...Array(review.rating)].map((_, i) => (
                  <Star key={i} size={20} className="star-icon" fill="currentColor" />
                ))}
              </div>
              <p className="review-text">"{review.feedback}"</p>
              <div className="review-author">
                <div className="author-info">
                  <h4>{review.name}</h4>
                  <span>{review.role}, {review.company}</span>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Testimonials;
