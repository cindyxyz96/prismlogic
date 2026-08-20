import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Calculator } from 'lucide-react';
import './ToolStyles.css';
import '../ROICalculator.css'; // Re-use the slider styles

const AdvancedROICalculator = ({ onOpenContact }) => {
  const [hours, setHours] = useState(100);
  const [wage, setWage] = useState(35);

  const manualMonthlyCost = Math.round(hours * wage * 4.33);
  const automatedMonthlyCost = Math.round(manualMonthlyCost * 0.15); // Assume 85% savings
  const monthlySavings = manualMonthlyCost - automatedMonthlyCost;

  return (
    <div className="tool-container">
      <div className="tool-header">
        <h3 className="tool-title">ROI & Salary Calculator</h3>
        <p className="tool-desc">See exactly how much capital you are wasting on manual tasks and how much an automation bot can save you.</p>
      </div>

      <div className="tool-body" style={{ display: 'flex', flexDirection: 'column', gap: '30px', justifyContent: 'center' }}>
        <div className="roi-controls" style={{ padding: '20px', background: 'rgba(0,0,0,0.4)', borderRadius: '16px' }}>
          <div className="slider-group">
            <div className="slider-header" style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '15px' }}>
              <label style={{ color: 'var(--text-secondary)' }}>Manual Hours Spent (Per Week)</label>
              <span className="slider-value" style={{ fontWeight: 'bold' }}>{hours} hrs</span>
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

          <div className="slider-group" style={{ marginTop: '30px' }}>
            <div className="slider-header" style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '15px' }}>
              <label style={{ color: 'var(--text-secondary)' }}>Average Hourly Wage ($)</label>
              <span className="slider-value" style={{ fontWeight: 'bold' }}>${wage}/hr</span>
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

        <div className="roi-results" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px' }}>
          <div className="result-card" style={{ padding: '25px', background: 'rgba(255,255,255,0.02)', borderRadius: '16px', textAlign: 'center', border: '1px solid rgba(255,255,255,0.05)' }}>
            <span className="result-label" style={{ display: 'block', color: 'var(--text-secondary)', marginBottom: '10px' }}>Current Monthly Cost</span>
            <span className="result-value" style={{ fontSize: '2.5rem', fontWeight: 'bold' }}>${manualMonthlyCost.toLocaleString()}</span>
          </div>
          <div className="result-card primary" style={{ padding: '25px', background: 'linear-gradient(135deg, rgba(138,43,226,0.1), rgba(0,255,255,0.1))', borderRadius: '16px', textAlign: 'center', border: '1px solid rgba(138,43,226,0.3)' }}>
            <span className="result-label" style={{ display: 'block', color: 'var(--accent-secondary)', marginBottom: '10px' }}>Your Monthly Savings</span>
            <span className="result-value text-gradient" style={{ fontSize: '2.5rem', fontWeight: 'bold' }}>${monthlySavings.toLocaleString()}</span>
          </div>
        </div>
        
        <div style={{ textAlign: 'center', marginTop: '10px' }}>
          <button className="btn btn-primary" onClick={onOpenContact}>Claim Your Free ROI Audit</button>
        </div>
      </div>
    </div>
  );
};

export default AdvancedROICalculator;
