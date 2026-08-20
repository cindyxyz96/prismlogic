import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Bot, Globe, FileText, TrendingUp } from 'lucide-react';
import AIWorkflowGenerator from './tools/AIWorkflowGenerator';
import WebScraperDemo from './tools/WebScraperDemo';
import InvoiceScannerDemo from './tools/InvoiceScannerDemo';
import AdvancedROICalculator from './tools/AdvancedROICalculator';
import './ToolsShowcase.css';

const ToolsShowcase = ({ onOpenContact }) => {
  const [activeTab, setActiveTab] = useState('workflow');

  const tabs = [
    { id: 'workflow', label: 'AI Workflow Generator', icon: <Bot size={18} /> },
    { id: 'scraper', label: 'Live Data Scraper', icon: <Globe size={18} /> },
    { id: 'ocr', label: 'Magic OCR Scanner', icon: <FileText size={18} /> },
    { id: 'roi', label: 'ROI Calculator', icon: <TrendingUp size={18} /> }
  ];

  return (
    <section className="tools-showcase-section" id="demos">
      <div className="section-header">
        <h2 className="section-title">Interactive <span className="text-gradient">Automation Demos</span></h2>
        <p className="section-subtitle">Test out our technology live. See exactly how we transform manual bottlenecks into automated systems.</p>
      </div>

      <div className="showcase-container glass">
        <div className="showcase-sidebar">
          {tabs.map((tab) => (
            <button 
              key={tab.id}
              className={`tab-btn ${activeTab === tab.id ? 'active' : ''}`}
              onClick={() => setActiveTab(tab.id)}
            >
              <div className="tab-icon">{tab.icon}</div>
              <span className="tab-label">{tab.label}</span>
              {activeTab === tab.id && (
                <motion.div className="active-indicator" layoutId="activeTabIndicator" />
              )}
            </button>
          ))}
        </div>

        <div className="showcase-content">
          <AnimatePresence mode="wait">
            <motion.div 
              key={activeTab}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.3 }}
              className="tool-wrapper"
            >
              {activeTab === 'workflow' && <AIWorkflowGenerator onOpenContact={onOpenContact} />}
              {activeTab === 'scraper' && <WebScraperDemo onOpenContact={onOpenContact} />}
              {activeTab === 'ocr' && <InvoiceScannerDemo onOpenContact={onOpenContact} />}
              {activeTab === 'roi' && <AdvancedROICalculator onOpenContact={onOpenContact} />}
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
};

export default ToolsShowcase;
