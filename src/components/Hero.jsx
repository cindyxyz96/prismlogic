import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import SpiderWebBackground from './SpiderWebBackground';
import './Hero.css';

const Hero = ({ onOpenContact }) => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const bgSlides = [
    "Cybersecurity",
    "AI Workflows",
    "Data Scraping",
    "Voice Agents",
    "Custom RPA"
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % bgSlides.length);
    }, 4000);
    return () => clearInterval(interval);
  }, [bgSlides.length]);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: { staggerChildren: 0.2 }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: { 
      y: 0, 
      opacity: 1,
      transition: { type: "spring", stiffness: 100 }
    }
  };

  return (
    <section className="hero" id="home">
      <div className="hero-background">
        <div className="glow glow-1"></div>
        <div className="glow glow-2"></div>
        <SpiderWebBackground />
        
        <AnimatePresence mode="wait">
          <motion.div
            key={currentSlide}
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 0.05, scale: 1 }}
            exit={{ opacity: 0, scale: 1.05 }}
            transition={{ duration: 1.5, ease: "easeInOut" }}
            className="hero-background-text"
          >
            {bgSlides[currentSlide]}
          </motion.div>
        </AnimatePresence>
      </div>
      
      <motion.div 
        className="hero-content"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.h1 variants={itemVariants} className="hero-title">
          Next-Generation <br />
          <span className="text-gradient">Intelligent Automations</span>
        </motion.h1>
        <motion.p variants={itemVariants} className="hero-subtitle">
          PrismLogic transforms complex workflows into seamless, automated systems. Elevate your business with data-driven insights and AI-powered integration.
        </motion.p>
        <motion.div variants={itemVariants} className="hero-actions">
          <button className="btn btn-primary" onClick={onOpenContact}>Start Automating</button>
          <a href="#services" className="btn btn-outline" style={{ display: 'inline-block', textDecoration: 'none' }}>Explore Solutions</a>
        </motion.div>
      </motion.div>
      
      <motion.div 
        className="hero-visual"
        initial={{ y: 50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.6, type: "spring", stiffness: 100 }}
      >
        <div className="visual-card glass">
          <div className="card-header">
            <span className="dot dot-red"></span>
            <span className="dot dot-yellow"></span>
            <span className="dot dot-green"></span>
          </div>
          <div className="card-body">
            <div className="code-line w-80"></div>
            <div className="code-line w-60"></div>
            <div className="code-line w-90"></div>
            <div className="code-line highlight w-50"></div>
            <div className="code-line w-70"></div>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;
