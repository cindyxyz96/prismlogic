import React, { useState, useEffect, useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import './ImpactCounters.css';

const CountUp = ({ end, duration = 2, suffix = '' }) => {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  useEffect(() => {
    if (!isInView) return;

    let start = 0;
    const increment = end / (duration * 60); // Assuming 60fps
    
    const animate = () => {
      start += increment;
      if (start < end) {
        setCount(Math.ceil(start));
        requestAnimationFrame(animate);
      } else {
        setCount(end);
      }
    };
    
    requestAnimationFrame(animate);
  }, [end, duration, isInView]);

  // Format large numbers with commas or K/M
  const formatNumber = (num) => {
    if (num >= 1000000) return (num / 1000000).toFixed(1).replace(/\.0$/, '') + 'M';
    if (num >= 1000) return (num / 1000).toFixed(1).replace(/\.0$/, '') + 'k';
    return num;
  };

  return <span ref={ref}>{formatNumber(count)}{suffix}</span>;
};

const ImpactCounters = () => {
  const stats = [
    { id: 1, label: 'Tasks Automated', value: 1200000, suffix: '+' },
    { id: 2, label: 'Hours Saved', value: 50000, suffix: '+' },
    { id: 3, label: 'System Uptime', value: 99.9, suffix: '%' }
  ];

  return (
    <section className="impact-counters">
      <div className="impact-container">
        {stats.map((stat, index) => (
          <motion.div 
            key={stat.id}
            className="impact-card glass"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.2, duration: 0.6 }}
          >
            <div className="impact-value text-gradient">
              <CountUp end={stat.value} suffix={stat.suffix} />
            </div>
            <div className="impact-label">{stat.label}</div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default ImpactCounters;
