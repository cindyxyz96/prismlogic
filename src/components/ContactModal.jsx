import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Calendar, FileText, ArrowRight, CheckCircle } from 'lucide-react';
import './ContactModal.css';

const ContactModal = ({ isOpen, onClose }) => {
  const [view, setView] = useState('selection'); // 'selection', 'questionnaire', 'success'
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({ bottleneck: '', software: '', email: '' });

  const handleNext = () => {
    if (step < 3) setStep(step + 1);
    else submitForm();
  };

  const submitForm = () => {
    // Simulate API call
    setView('success');
  };

  const resetModal = () => {
    setView('selection');
    setStep(1);
    setFormData({ bottleneck: '', software: '', email: '' });
    onClose();
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <motion.div 
            className="modal-backdrop"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={resetModal}
          />
          <motion.div 
            className="modal-container glass"
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
          >
            <button className="modal-close" onClick={resetModal}>
              <X size={24} />
            </button>

            {view === 'selection' && (
              <div className="modal-content selection-view">
                <h2>Let's transform your business</h2>
                <p>Choose how you'd like to get started with PrismLogic.</p>
                
                <div className="options-grid">
                  <div className="option-card">
                    <div className="option-icon bg-purple"><Calendar size={32} /></div>
                    <h3>Book Consultation</h3>
                    <p>Schedule a free 15-minute discovery call directly on our calendar.</p>
                    <a href="https://cal.com/lahiru-sandaruwan-psynfn/15min" target="_blank" rel="noreferrer" className="btn btn-outline w-100" onClick={onClose}>
                      Open Booking Page
                    </a>
                  </div>

                  <div className="option-card">
                    <div className="option-icon bg-cyan"><FileText size={32} /></div>
                    <h3>Get a Custom Quote</h3>
                    <p>Answer 3 quick questions about your bottlenecks to get an estimate.</p>
                    <button className="btn btn-primary w-100" onClick={() => setView('questionnaire')}>
                      Start Questionnaire
                    </button>
                  </div>
                </div>
              </div>
            )}

            {view === 'questionnaire' && (
              <div className="modal-content questionnaire-view">
                <div className="progress-bar">
                  <div className="progress-fill" style={{ width: `${(step / 3) * 100}%` }}></div>
                </div>
                
                <div className="question-container">
                  <AnimatePresence mode="wait">
                    {step === 1 && (
                      <motion.div key="step1" initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -20 }}>
                        <h3>Question 1 of 3</h3>
                        <h2>What is your biggest manual bottleneck?</h2>
                        <textarea 
                          placeholder="e.g., Copy-pasting data between Excel and our CRM takes 10 hours a week..."
                          value={formData.bottleneck}
                          onChange={(e) => setFormData({...formData, bottleneck: e.target.value})}
                          rows="4"
                        />
                      </motion.div>
                    )}
                    {step === 2 && (
                      <motion.div key="step2" initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -20 }}>
                        <h3>Question 2 of 3</h3>
                        <h2>What software tools do you currently use?</h2>
                        <input 
                          type="text"
                          placeholder="e.g., Salesforce, Excel, Outlook, custom legacy app"
                          value={formData.software}
                          onChange={(e) => setFormData({...formData, software: e.target.value})}
                        />
                      </motion.div>
                    )}
                    {step === 3 && (
                      <motion.div key="step3" initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -20 }}>
                        <h3>Question 3 of 3</h3>
                        <h2>Where should we send your custom automation plan?</h2>
                        <input 
                          type="email"
                          placeholder="your@email.com"
                          value={formData.email}
                          onChange={(e) => setFormData({...formData, email: e.target.value})}
                        />
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
                
                <div className="question-actions">
                  {step > 1 && (
                    <button className="btn btn-ghost" onClick={() => setStep(step - 1)}>Back</button>
                  )}
                  <button 
                    className="btn btn-primary" 
                    onClick={handleNext}
                    style={{ marginLeft: 'auto' }}
                  >
                    {step === 3 ? 'Get My Quote' : 'Next'} <ArrowRight size={18} style={{ marginLeft: '8px' }} />
                  </button>
                </div>
              </div>
            )}

            {view === 'success' && (
              <div className="modal-content success-view">
                <div className="success-icon"><CheckCircle size={64} color="#00ffff" /></div>
                <h2>Quote Request Received!</h2>
                <p>We're analyzing your bottlenecks and will send a custom automation plan to <strong>{formData.email}</strong> shortly.</p>
                <button className="btn btn-primary" onClick={resetModal} style={{ marginTop: '20px' }}>Return to Site</button>
              </div>
            )}
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};

export default ContactModal;
