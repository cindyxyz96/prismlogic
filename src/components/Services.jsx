import React from 'react';
import { Workflow, Globe, Monitor, Bot, FileSpreadsheet } from 'lucide-react';
import { motion } from 'framer-motion';
import './Services.css';

const Services = () => {
  const services = [
    {
      id: 1,
      title: 'Workflow Automations',
      description: 'Streamline your daily operations by integrating advanced logic and multi-step processes across platforms.',
      icon: <Workflow size={48} color="#00ffff" strokeWidth={1.5} />,
    },
    {
      id: 2,
      title: 'Web Automations',
      description: 'Automate web scraping, form filling, and browser interactions to save time on manual internet tasks.',
      icon: <Globe size={48} color="#8a2be2" strokeWidth={1.5} />,
    },
    {
      id: 3,
      title: 'Desktop Automations',
      description: 'Take control of local applications with robotic process automation (RPA) tailored for desktop environments.',
      icon: <Monitor size={48} color="#00ffff" strokeWidth={1.5} />,
    },
    {
      id: 4,
      title: 'Agentic Automations',
      description: 'Deploy intelligent autonomous agents that can plan, reason, and execute complex business goals dynamically.',
      icon: <Bot size={48} color="#8a2be2" strokeWidth={1.5} />,
    },
    {
      id: 5,
      title: 'Excel Automations',
      description: 'Supercharge your spreadsheets with macros, scripts, and data processing workflows for any industry.',
      icon: <FileSpreadsheet size={48} color="#00ffff" strokeWidth={1.5} />,
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
    hidden: { y: 50, opacity: 0 },
    visible: { 
      y: 0, 
      opacity: 1,
      transition: { type: "spring", stiffness: 100 }
    }
  };

  return (
    <section className="services" id="services">
      <div className="services-container">
        <motion.div 
          className="services-header"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="section-title">Automate Everything</h2>
          <p className="section-subtitle">Discover our comprehensive suite of automation solutions tailored for modern enterprises.</p>
        </motion.div>
        
        <motion.div 
          className="services-grid"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {services.map((service) => (
            <motion.div 
              key={service.id} 
              className="service-card glass"
              variants={cardVariants}
              whileHover={{ scale: 1.05 }}
            >
              <div className="service-icon">{service.icon}</div>
              <h3 className="service-title">{service.title}</h3>
              <p className="service-desc">{service.description}</p>
              <div className="service-hover-effect"></div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Services;
