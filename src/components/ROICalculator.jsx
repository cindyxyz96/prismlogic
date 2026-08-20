import React, { useState } from 'react';
import { motion } from 'framer-motion';
import './ROICalculator.css';

const ROICalculator = () => {
  const [hours, setHours] = useState(100);
  const [wage, setWage] = useState(35);

  // Math logic
  const manualMonthlyCost = Math.round(hours * wage * 4.33);
  const automatedMonthlyCost = Math.round(manualMonthlyCost * 0.15); // Assume 85% savings
  const monthlySavings = manualMonthlyCost - automatedMonthlyCost;

  return (
    <section className="roi-section" id="roi">
      <div className="roi-container">
        <motion.div 
          className="roi-header"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="section-title">Calculate Your ROI</h2>
          <p className="section-subtitle">See exactly how much capital you are wasting on manual tasks and how much PrismLogic can save you every month.</p>
        </motion.div>

        <motion.div 
          className="roi-calculator glass"
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <div className="roi-controls">
            <div className="slider-group">
              <div className="slider-header">
                <label>Manual Hours Spent (Per Week)</label>
                <span className="slider-value">{hours} hrs</span>
              </div>
              <input 
                type="range" 
                min="10" 
                max="500" 
                value={hours} 
                onChange={(e) => setHours(Number(e.target.value))}
                className="custom-slider"
              />
            </div>

            <div className="slider-group">
              <div className="slider-header">
                <label>Average Hourly Wage ($)</label>
                <span className="slider-value">${wage}/hr</span>
              </div>
              <input 
                type="range" 
                min="15" 
                max="150" 
                value={wage} 
                onChange={(e) => setWage(Number(e.target.value))}
                className="custom-slider"
              />
            </div>
          </div>

          <div className="roi-results">
            <div className="result-card">
              <span className="result-label">Current Monthly Cost</span>
              <span className="result-value text-muted">${manualMonthlyCost.toLocaleString()}</span>
            </div>
            <div className="result-card primary">
              <span className="result-label">Your Monthly Savings</span>
              <span className="result-value text-gradient">${monthlySavings.toLocaleString()}</span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ROICalculator;
