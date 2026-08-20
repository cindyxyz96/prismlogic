import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Sparkles, Download, ArrowRight, Activity } from 'lucide-react';
import './ToolStyles.css';

const AIWorkflowGenerator = ({ onOpenContact }) => {
  const [prompt, setPrompt] = useState('');
  const [status, setStatus] = useState('idle'); // idle, generating, done
  const [nodes, setNodes] = useState([]);

  const analyzePrompt = (text) => {
    const lower = text.toLowerCase();
    if (lower.includes('email') || lower.includes('gmail') || lower.includes('outlook')) {
      return ['Email Inbox', 'AI Data Parser', 'CRM System'];
    }
    if (lower.includes('shopify') || lower.includes('store') || lower.includes('order')) {
      return ['Shopify Webhook', 'Inventory Sync', 'Slack Notification'];
    }
    if (lower.includes('invoice') || lower.includes('receipt') || lower.includes('pdf')) {
      return ['Cloud Storage', 'OCR Extractor', 'Accounting API'];
    }
    if (lower.includes('social') || lower.includes('twitter') || lower.includes('linkedin')) {
      return ['Content Database', 'AI Copywriter', 'Social Scheduler'];
    }
    if (lower.includes('lead') || lower.includes('sales') || lower.includes('crm')) {
      return ['Lead Capture', 'Data Enrichment', 'Salesforce / HubSpot'];
    }
    // Default fallback
    return ['Custom Trigger', 'Logic Processor', 'Target Database'];
  };

  const handleGenerate = (e) => {
    e.preventDefault();
    if (!prompt.trim()) return;
    
    setStatus('generating');
    
    // Simulate API delay and set dynamic nodes
    setTimeout(() => {
      const generatedNodes = analyzePrompt(prompt);
      setNodes(generatedNodes);
      setStatus('done');
    }, 2500);
  };

  return (
    <div className="tool-container">
      <div className="tool-header">
        <h3 className="tool-title">AI Workflow Generator</h3>
        <p className="tool-desc">Describe a manual task you hate doing, and our AI will instantly generate an automated architecture blueprint.</p>
      </div>

      <div className="tool-body">
        {status === 'idle' && (
          <form className="generator-form" onSubmit={handleGenerate}>
            <div className="input-group">
              <input 
                type="text" 
                placeholder="e.g., I hate manually copying lead data from my emails into our CRM..."
                value={prompt}
                onChange={(e) => setPrompt(e.target.value)}
                autoFocus
              />
              <button type="submit" className="btn btn-primary btn-icon" disabled={!prompt.trim()}>
                <Sparkles size={18} /> Generate
              </button>
            </div>
            
            <div className="prompt-suggestions">
              <span>Try:</span>
              <button type="button" onClick={() => setPrompt('Send a Slack message when a high-value Shopify order comes in.')}>"Shopify to Slack alerts"</button>
              <button type="button" onClick={() => setPrompt('Extract data from PDF invoices and put them in Google Sheets.')}>"PDF Invoice extraction"</button>
            </div>
          </form>
        )}

        {status === 'generating' && (
          <div className="generating-state">
            <Activity className="spinner-icon" size={40} />
            <h4>Analyzing your process...</h4>
            <div className="scan-lines">
              <div className="scan-line-active"></div>
            </div>
            <p>Identifying optimal API endpoints and data mapping structures.</p>
          </div>
        )}

        {status === 'done' && (
          <div className="result-state">
            <div className="workflow-diagram-mock">
              {nodes.map((node, index) => (
                <React.Fragment key={index}>
                  <motion.div 
                    initial={{ scale: 0 }} 
                    animate={{ scale: 1 }} 
                    transition={{ delay: index * 0.3 }}
                    className="node"
                  >
                    {node}
                  </motion.div>
                  {index < nodes.length - 1 && (
                    <ArrowRight size={20} className="node-arrow" />
                  )}
                </React.Fragment>
              ))}
            </div>
            
            <div className="result-actions">
              <h4>Architecture Generated Successfully</h4>
              <p>We've mapped a {nodes.length}-step automation sequence for this workflow.</p>
              <button className="btn btn-primary" onClick={onOpenContact}>
                <Download size={18} style={{ marginRight: '8px' }} /> Download Full Technical Blueprint
              </button>
              <button className="btn btn-ghost" onClick={() => setStatus('idle')} style={{ marginTop: '10px' }}>
                Try Another
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default AIWorkflowGenerator;
