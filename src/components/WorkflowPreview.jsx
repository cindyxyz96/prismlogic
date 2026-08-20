import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Globe, Search, UploadCloud, Monitor, MousePointerClick, 
  FileText, Server, FileSpreadsheet, Calculator, BarChart, 
  Send, Bot, Code, Cpu, Cloud, BrainCircuit, Activity, Clock, Image, Layers, Database 
} from 'lucide-react';
import './WorkflowPreview.css';

const WorkflowPreview = () => {
  const [activeTab, setActiveTab] = useState('web');
  const [isRunning, setIsRunning] = useState(true);

  // Automatically loop the animation sequence
  useEffect(() => {
    // Initial start
    setIsRunning(true);

    const loop = setInterval(() => {
      // Turn off to reset CSS animations
      setIsRunning(false);
      
      // Short delay to allow DOM repaint, then restart
      setTimeout(() => {
        setIsRunning(true);
      }, 50);
      
    }, 6000); // 6 second loop gives enough time for the full 7-node sequence to finish

    return () => clearInterval(loop);
  }, [activeTab]);

  const workflows = {
    web: {
      name: "Web Scraping & CRM",
      nodes: [
        { id: 1, icon: <Clock size={24} />, title: "Cron Trigger", app: "AWS EventBridge" },
        { id: 2, icon: <Globe size={24} />, title: "Scrape Site", app: "Playwright" },
        { id: 3, icon: <Code size={24} />, title: "Parse HTML", app: "Python / BeautifulSoup" },
        { id: 4, icon: <BrainCircuit size={24} />, title: "Analyze Intent", app: "OpenAI API" },
        { id: 5, icon: <Database size={24} />, title: "Structure Data", app: "Pandas" },
        { id: 6, icon: <UploadCloud size={24} />, title: "Sync to CRM", app: "Salesforce API" },
        { id: 7, icon: <Send size={24} />, title: "Send Summary", app: "Slack" }
      ]
    },
    desktop: {
      name: "Legacy Desktop RPA",
      nodes: [
        { id: 1, icon: <Activity size={24} />, title: "File Watcher", app: "Python Watchdog" },
        { id: 2, icon: <Monitor size={24} />, title: "Open Legacy App", app: "PyAutoGUI" },
        { id: 3, icon: <Image size={24} />, title: "Identify Buttons", app: "OpenCV" },
        { id: 4, icon: <MousePointerClick size={24} />, title: "Extract Text", app: "Tesseract OCR" },
        { id: 5, icon: <Bot size={24} />, title: "Process Logic", app: "LangChain Agent" },
        { id: 6, icon: <FileText size={24} />, title: "Build Report", app: "PDF Engine" },
        { id: 7, icon: <Cloud size={24} />, title: "Archive", app: "AWS S3" }
      ]
    },
    excel: {
      name: "Financial Data Pipeline",
      nodes: [
        { id: 1, icon: <Server size={24} />, title: "Webhook", app: "API Gateway" },
        { id: 2, icon: <FileSpreadsheet size={24} />, title: "Load Sheets", app: "Python Pandas" },
        { id: 3, icon: <Layers size={24} />, title: "Validate Data", app: "Great Expectations" },
        { id: 4, icon: <Cpu size={24} />, title: "Apply Rules", app: "Custom Scripts" },
        { id: 5, icon: <BrainCircuit size={24} />, title: "Predict Trends", app: "TensorFlow" },
        { id: 6, icon: <BarChart size={24} />, title: "Pivot & Chart", app: "Data Modeler" },
        { id: 7, icon: <Send size={24} />, title: "Distribute", app: "Outlook SMTP" }
      ]
    }
  };

  const currentWorkflow = workflows[activeTab];

  return (
    <section className="workflow-section">
      <div className="workflow-container">
        <div className="workflow-header">
          <h2 className="section-title">Complex Visual Workflows</h2>
          <p className="section-subtitle">Whether it's web scraping, local desktop applications, or heavy Excel macros, we build robust pipelines.</p>
        </div>

        <div className="workflow-tabs">
          {Object.keys(workflows).map(key => (
            <button 
              key={key} 
              className={`tab-btn ${activeTab === key ? 'active' : ''}`}
              onClick={() => setActiveTab(key)}
            >
              {workflows[key].name}
            </button>
          ))}
        </div>

        <div className="workflow-canvas glass">
          <div className="nodes-container">
            <AnimatePresence mode="wait">
              <motion.div 
                key={activeTab}
                className="workflow-track"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 20 }}
                transition={{ duration: 0.3 }}
              >
                {currentWorkflow.nodes.map((node, index) => (
                  <React.Fragment key={node.id}>
                    {/* The Node */}
                    <motion.div 
                      className={`node ${index === 0 ? 'trigger-node' : 'action-node'} ${isRunning ? `active-delay-${index}` : ''}`}
                      initial={{ scale: 0.8, opacity: 0 }}
                      animate={{ scale: 1, opacity: 1 }}
                      transition={{ delay: index * 0.1 }}
                    >
                      <div className="node-icon">{node.icon}</div>
                      <div className="node-details">
                        <span className="node-title">{node.title}</span>
                        <span className="node-app">{node.app}</span>
                      </div>
                    </motion.div>

                    {/* Connection Line (Skip for the last node) */}
                    {index < currentWorkflow.nodes.length - 1 && (
                      <div className={`connection-line ${isRunning ? `active-delay-${index}` : ''}`}></div>
                    )}
                  </React.Fragment>
                ))}
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WorkflowPreview;
