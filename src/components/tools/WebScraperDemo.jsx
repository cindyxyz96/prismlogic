import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Search, Database, Code, Play } from 'lucide-react';
import './ToolStyles.css';

const WebScraperDemo = ({ onOpenContact }) => {
  const [url, setUrl] = useState('');
  const [status, setStatus] = useState('idle'); // idle, scraping, done

  const handleScrape = (e) => {
    e.preventDefault();
    if (!url.trim()) return;
    
    setStatus('scraping');
    setTimeout(() => {
      setStatus('done');
    }, 3000);
  };

  return (
    <div className="tool-container">
      <div className="tool-header">
        <h3 className="tool-title">Live Data Scraper</h3>
        <p className="tool-desc">See how our bots can extract structured data from any website in seconds.</p>
      </div>

      <div className="tool-body" style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
        
        <form className="generator-form" onSubmit={handleScrape}>
          <div className="input-group" style={{ marginBottom: 0 }}>
            <input 
              type="text" 
              placeholder="https://example.com/product-page"
              value={url}
              onChange={(e) => setUrl(e.target.value)}
              disabled={status !== 'idle'}
            />
            <button type="submit" className="btn btn-primary btn-icon" disabled={!url.trim() || status !== 'idle'}>
              <Play size={18} /> {status === 'idle' ? 'Run Scraper' : 'Running...'}
            </button>
          </div>
        </form>

        <div className="split-view">
          <div className="split-left">
            <div className="panel-header"><Code size={14} style={{ display: 'inline', marginRight: '5px' }} /> Terminal Log</div>
            <div className="panel-body" style={{ fontFamily: 'monospace', fontSize: '0.85rem', color: '#00ffcc' }}>
              {status === 'idle' && <span style={{ color: 'var(--text-secondary)' }}>Waiting for target URL...</span>}
              
              {status !== 'idle' && (
                <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
                  <div>&gt; Initializing headless browser...</div>
                  <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.5 }}>&gt; Navigating to {url || 'target'}...</motion.div>
                  <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1.0 }}>&gt; Bypassing captchas...</motion.div>
                  <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1.5 }}>&gt; Locating DOM elements...</motion.div>
                  <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 2.0 }}>&gt; Extracting innerHTML...</motion.div>
                  <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 2.5 }}>&gt; Parsing to JSON...</motion.div>
                  {status === 'done' && <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} style={{ color: '#fff' }}>&gt; Process completed in 1.4s</motion.div>}
                </motion.div>
              )}
            </div>
          </div>
          
          <div className="split-right">
            <div className="panel-header"><Database size={14} style={{ display: 'inline', marginRight: '5px' }} /> Extracted Data (JSON)</div>
            <div className="panel-body" style={{ fontFamily: 'monospace', fontSize: '0.85rem' }}>
              {status === 'idle' && <span style={{ color: 'var(--text-secondary)' }}>No data extracted yet.</span>}
              
              {status === 'scraping' && (
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', height: '100%', color: 'var(--text-secondary)' }}>
                  Extracting...
                </div>
              )}
              
              {status === 'done' && (
                <motion.pre 
                  initial={{ opacity: 0 }} 
                  animate={{ opacity: 1 }}
                  style={{ margin: 0, whiteSpace: 'pre-wrap', wordBreak: 'break-word', color: '#ffbd2e' }}
                >
{`{
  "status": "success",
  "source": "${url || 'example.com'}",
  "timestamp": "${new Date().toISOString()}",
  "data": {
    "title": "Enterprise Automation Suite",
    "price": "$499.00",
    "stock_status": "In Stock",
    "reviews_count": 142,
    "key_features": [
      "API Integration",
      "Custom Webhooks",
      "24/7 Monitoring"
    ]
  }
}`}
                </motion.pre>
              )}
            </div>
          </div>
        </div>

        {status === 'done' && (
          <motion.div 
            initial={{ opacity: 0, y: 10 }} 
            animate={{ opacity: 1, y: 0 }}
            style={{ display: 'flex', justifyContent: 'center', gap: '15px', marginTop: '10px' }}
          >
            <button className="btn btn-primary" onClick={onOpenContact}>Request Custom Scraper</button>
            <button className="btn btn-ghost" onClick={() => {setUrl(''); setStatus('idle');}}>Reset</button>
          </motion.div>
        )}
      </div>
    </div>
  );
};

export default WebScraperDemo;
