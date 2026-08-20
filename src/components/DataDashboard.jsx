import React from 'react';
import { motion } from 'framer-motion';
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import './DataDashboard.css';

const data = [
  { day: 'Day 1', manual: 120, automated: 0 },
  { day: 'Day 5', manual: 110, automated: 20 },
  { day: 'Day 10', manual: 90, automated: 50 },
  { day: 'Day 15', manual: 70, automated: 80 },
  { day: 'Day 20', manual: 40, automated: 120 },
  { day: 'Day 25', manual: 20, automated: 170 },
  { day: 'Day 30', manual: 5, automated: 250 },
];

const CustomTooltip = ({ active, payload, label }) => {
  if (active && payload && payload.length) {
    return (
      <div className="custom-tooltip glass">
        <p className="label">{`${label}`}</p>
        <p className="desc manual">Manual Tasks: {payload[0].value}</p>
        <p className="desc automated">Automated Output: {payload[1].value}</p>
      </div>
    );
  }
  return null;
};

const DataDashboard = () => {
  return (
    <section className="dashboard-section">
      <div className="dashboard-container">
        <motion.div 
          className="dashboard-header"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="section-title">Visualized Data Analytics</h2>
          <p className="section-subtitle">We don't just automate; we provide real-time dashboards to give you profound insights into your operational scaling.</p>
        </motion.div>

        <motion.div 
          className="chart-card glass"
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <div className="chart-header">
            <h3>30-Day Operational Scaling</h3>
            <div className="legend">
              <span className="legend-item"><span className="dot manual-dot"></span> Manual Bottlenecks</span>
              <span className="legend-item"><span className="dot auto-dot"></span> Automated Output</span>
            </div>
          </div>
          <div className="chart-wrapper">
            <ResponsiveContainer width="100%" height="100%">
              <AreaChart
                data={data}
                margin={{ top: 10, right: 30, left: 0, bottom: 0 }}
              >
                <defs>
                  <linearGradient id="colorManual" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#ff5f56" stopOpacity={0.8}/>
                    <stop offset="95%" stopColor="#ff5f56" stopOpacity={0}/>
                  </linearGradient>
                  <linearGradient id="colorAuto" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#00ffff" stopOpacity={0.8}/>
                    <stop offset="95%" stopColor="#00ffff" stopOpacity={0}/>
                  </linearGradient>
                </defs>
                <CartesianGrid strokeDasharray="3 3" stroke="rgba(255,255,255,0.05)" vertical={false} />
                <XAxis dataKey="day" stroke="rgba(255,255,255,0.4)" tick={{fill: 'rgba(255,255,255,0.4)'}} />
                <YAxis stroke="rgba(255,255,255,0.4)" tick={{fill: 'rgba(255,255,255,0.4)'}} />
                <Tooltip content={<CustomTooltip />} />
                <Area type="monotone" dataKey="manual" stroke="#ff5f56" strokeWidth={3} fillOpacity={1} fill="url(#colorManual)" />
                <Area type="monotone" dataKey="automated" stroke="#00ffff" strokeWidth={3} fillOpacity={1} fill="url(#colorAuto)" />
              </AreaChart>
            </ResponsiveContainer>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default DataDashboard;
