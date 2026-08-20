import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Scan, Database, FileText } from 'lucide-react';
import './ToolStyles.css';

const InvoiceScannerDemo = ({ onOpenContact }) => {
  const [status, setStatus] = useState('idle'); // idle, scanning, done

  const handleScan = () => {
    setStatus('scanning');
    setTimeout(() => {
      setStatus('done');
    }, 2500);
  };

  return (
    <div className="tool-container">
      <div className="tool-header">
        <h3 className="tool-title">Magic OCR Scanner</h3>
        <p className="tool-desc">Watch our AI extract structured data from unstructured documents like invoices and receipts instantly.</p>
      </div>

      <div className="tool-body" style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
        <div style={{ display: 'flex', justifyContent: 'center' }}>
          <button 
            className="btn btn-primary btn-icon" 
            onClick={handleScan}
            disabled={status !== 'idle'}
            style={{ minWidth: '200px' }}
          >
            <Scan size={18} /> {status === 'idle' ? 'Run OCR Scan' : status === 'scanning' ? 'Scanning...' : 'Scan Complete'}
          </button>
        </div>

        <div className="split-view">
          <div className="split-left" style={{ position: 'relative', background: '#fff', color: '#000', padding: '20px' }}>
            {status === 'scanning' && (
              <motion.div 
                initial={{ top: 0 }}
                animate={{ top: '100%' }}
                transition={{ duration: 2.5, ease: 'linear' }}
                style={{
                  position: 'absolute',
                  left: 0,
                  width: '100%',
                  height: '4px',
                  background: 'var(--accent-secondary)',
                  boxShadow: '0 0 15px var(--accent-secondary)',
                  zIndex: 10
                }}
              />
            )}
            
            <div style={{ borderBottom: '2px solid #ccc', paddingBottom: '10px', marginBottom: '20px', display: 'flex', justifyContent: 'space-between' }}>
              <h2 style={{ margin: 0, color: '#333' }}>INVOICE</h2>
              <span style={{ color: '#666', fontWeight: 'bold' }}>#INV-2026-892</span>
            </div>
            
            <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '30px', fontSize: '0.9rem' }}>
              <div>
                <strong style={{ color: '#333' }}>Billed To:</strong><br />
                Acme Corp<br />
                123 Tech Blvd<br />
                San Francisco, CA
              </div>
              <div style={{ textAlign: 'right' }}>
                <strong style={{ color: '#333' }}>Date:</strong> Aug 20, 2026<br />
                <strong style={{ color: '#333' }}>Due:</strong> Sep 20, 2026
              </div>
            </div>

            <table style={{ width: '100%', fontSize: '0.9rem', borderCollapse: 'collapse' }}>
              <thead>
                <tr style={{ borderBottom: '1px solid #ccc' }}>
                  <th style={{ textAlign: 'left', padding: '5px 0' }}>Description</th>
                  <th style={{ textAlign: 'right', padding: '5px 0' }}>Amount</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td style={{ padding: '10px 0' }}>Enterprise Server License</td>
                  <td style={{ textAlign: 'right', padding: '10px 0' }}>$1,250.00</td>
                </tr>
                <tr>
                  <td style={{ padding: '10px 0' }}>Cloud Storage (2TB)</td>
                  <td style={{ textAlign: 'right', padding: '10px 0' }}>$150.00</td>
                </tr>
              </tbody>
            </table>

            <div style={{ marginTop: 'auto', textAlign: 'right', borderTop: '2px solid #ccc', paddingTop: '10px' }}>
              <strong style={{ fontSize: '1.2rem', color: '#333' }}>Total: $1,400.00</strong>
            </div>
          </div>
          
          <div className="split-right">
            <div className="panel-header"><Database size={14} style={{ display: 'inline', marginRight: '5px' }} /> Target CRM Form</div>
            <div className="panel-body" style={{ display: 'flex', flexDirection: 'column', gap: '15px' }}>
              
              <div>
                <label style={{ display: 'block', fontSize: '0.8rem', color: 'var(--text-secondary)', marginBottom: '5px' }}>Invoice Number</label>
                <div style={{ background: 'rgba(0,0,0,0.5)', padding: '10px', borderRadius: '8px', border: '1px solid rgba(255,255,255,0.1)', minHeight: '40px' }}>
                  {status === 'done' && <motion.span initial={{ opacity: 0 }} animate={{ opacity: 1 }} style={{ color: '#00ffcc' }}>INV-2026-892</motion.span>}
                </div>
              </div>

              <div>
                <label style={{ display: 'block', fontSize: '0.8rem', color: 'var(--text-secondary)', marginBottom: '5px' }}>Client Name</label>
                <div style={{ background: 'rgba(0,0,0,0.5)', padding: '10px', borderRadius: '8px', border: '1px solid rgba(255,255,255,0.1)', minHeight: '40px' }}>
                  {status === 'done' && <motion.span initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.2 }} style={{ color: '#00ffcc' }}>Acme Corp</motion.span>}
                </div>
              </div>

              <div style={{ display: 'flex', gap: '10px' }}>
                <div style={{ flex: 1 }}>
                  <label style={{ display: 'block', fontSize: '0.8rem', color: 'var(--text-secondary)', marginBottom: '5px' }}>Invoice Date</label>
                  <div style={{ background: 'rgba(0,0,0,0.5)', padding: '10px', borderRadius: '8px', border: '1px solid rgba(255,255,255,0.1)', minHeight: '40px' }}>
                    {status === 'done' && <motion.span initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.4 }} style={{ color: '#00ffcc' }}>2026-08-20</motion.span>}
                  </div>
                </div>
                <div style={{ flex: 1 }}>
                  <label style={{ display: 'block', fontSize: '0.8rem', color: 'var(--text-secondary)', marginBottom: '5px' }}>Total Amount</label>
                  <div style={{ background: 'rgba(0,0,0,0.5)', padding: '10px', borderRadius: '8px', border: '1px solid rgba(255,255,255,0.1)', minHeight: '40px' }}>
                    {status === 'done' && <motion.span initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.6 }} style={{ color: '#00ffcc' }}>$1,400.00</motion.span>}
                  </div>
                </div>
              </div>

            </div>
          </div>
        </div>

        {status === 'done' && (
          <motion.div 
            initial={{ opacity: 0, y: 10 }} 
            animate={{ opacity: 1, y: 0 }}
            style={{ display: 'flex', justifyContent: 'center', gap: '15px', marginTop: '10px' }}
          >
            <button className="btn btn-primary" onClick={onOpenContact}>Automate My Data Entry</button>
            <button className="btn btn-ghost" onClick={() => setStatus('idle')}>Reset</button>
          </motion.div>
        )}
      </div>
    </div>
  );
};

export default InvoiceScannerDemo;
