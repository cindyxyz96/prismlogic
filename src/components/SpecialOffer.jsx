import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Sparkles, MessageSquare, Target, Zap, X } from 'lucide-react';
import './SpecialOffer.css';

const SpecialOffer = ({ isOpen, onClose, onOpenContact }) => {
  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <motion.div 
            className="offer-backdrop"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
          />
          <div className="special-offer-modal">
            <motion.div 
              className="offer-container glass"
              initial={{ opacity: 0, scale: 0.9, y: 50 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 50 }}
              transition={{ type: "spring", stiffness: 100 }}
            >
              <button className="offer-close" onClick={onClose}>
                <X size={24} />
              </button>
              
              <div className="offer-content">
                <div className="badge">
                  <Sparkles size={16} />
                  <span>Special Offer for New Clients</span>
                </div>
                <h2 className="offer-title">
                  Free Automation <br/><span className="text-gradient">Audit & Blueprint</span>
                </h2>
                <p className="offer-desc">
                  Have a unique idea or struggling with a manual bottleneck? Share your thoughts with us. We will provide a comprehensive consultation to map out a custom automation plan for your business process—completely free of charge.
                </p>
                
                <div className="offer-benefits">
                  <div className="benefit-item">
                    <MessageSquare size={20} className="benefit-icon" />
                    <span>1-on-1 Discovery Call</span>
                  </div>
                  <div className="benefit-item">
                    <Target size={20} className="benefit-icon" />
                    <span>Custom Workflow Mapping</span>
                  </div>
                  <div className="benefit-item">
                    <Zap size={20} className="benefit-icon" />
                    <span>ROI Projection</span>
                  </div>
                </div>

                <button className="btn btn-primary offer-btn w-100" onClick={onOpenContact}>
                  Claim Your Free Consultation
                </button>
              </div>
              
              <div className="offer-visual">
                <div className="glow-sphere"></div>
                <div className="floating-card card-1">
                  <div className="card-dot"></div>
                  <span>Analyzing bottleneck...</span>
                </div>
                <div className="floating-card card-2">
                  <div className="card-dot success"></div>
                  <span>Automation Blueprint Ready</span>
                </div>
              </div>
            </motion.div>
          </div>
        </>
      )}
    </AnimatePresence>
  );
};

export default SpecialOffer;
