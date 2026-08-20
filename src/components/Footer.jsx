import React from 'react';
import { motion } from 'framer-motion';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer" id="contact">
      <motion.div 
        className="footer-container"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <div className="footer-brand">
          <div className="logo">
            <img src="/logo.jpg" alt="PrismLogic Logo" style={{ height: '64px', borderRadius: '12px', marginRight: '12px', objectFit: 'contain' }} />
            Prism<span className="logo-highlight">Logic</span>
          </div>
          <p className="footer-desc">
            Pioneering the future of intelligent business automation. We simplify complexity so you can focus on growth.
          </p>
          <div style={{ marginTop: '20px', color: 'var(--text-secondary)' }}>
            <strong style={{ color: 'var(--text-primary)' }}>Need more info? Call us:</strong>
            <br />
            <a href="tel:+94754461633" style={{ color: 'var(--accent-primary)', textDecoration: 'none', fontSize: '1.1rem', display: 'inline-block', marginTop: '5px' }}>
              +94 754 461 633
            </a>
          </div>
        </div>
        
        <div className="footer-links">
          <h4>Company</h4>
          <ul>
            <li><a href="#about">About Us</a></li>
            <li><a href="#careers">Careers</a></li>
            <li><a href="#blog">Blog</a></li>
          </ul>
        </div>
        
        <div className="footer-links">
          <h4>Solutions</h4>
          <ul>
            <li><a href="#workflows">AI Workflows</a></li>
            <li><a href="#integrations">Integrations</a></li>
            <li><a href="#analytics">Data Analytics</a></li>
          </ul>
        </div>

        <div className="footer-newsletter">
          <h4>Stay Updated</h4>
          <p>Get the latest on automation trends.</p>
          <form className="newsletter-form">
            <input type="email" placeholder="Enter your email" />
            <button type="submit" className="btn btn-primary">Subscribe</button>
          </form>
        </div>
      </motion.div>
      
      <motion.div 
        className="footer-bottom"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 0.4, duration: 0.5 }}
      >
        <p>&copy; {new Date().getFullYear()} PrismLogic. All rights reserved.</p>
      </motion.div>
    </footer>
  );
};

export default Footer;
