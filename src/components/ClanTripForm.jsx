import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  ShieldCheck, 
  FileText, 
  Plane, 
  DollarSign, 
  Beer, 
  AlertTriangle, 
  ChevronRight, 
  ChevronLeft, 
  CheckCircle,
  Sparkles
} from 'lucide-react';
import './ClanTripForm.css';

const sections = [
  { id: 1, title: 'Applicant', icon: FileText },
  { id: 2, title: 'Trip Visa', icon: Plane },
  { id: 3, title: 'Financial', icon: DollarSign },
  { id: 4, title: 'Behaviour', icon: Beer },
  { id: 5, title: 'Declaration', icon: AlertTriangle }
];

const ClanTripForm = () => {
  const [currentStep, setCurrentStep] = useState(1);
  const [formData, setFormData] = useState({
    fullName: '',
    tripNickname: '',
    contactNumber: '',
    emergencyContact: '',
    visaStatus: '',
    confirmParticipation: '',
    guestsCount: '',
    financialReady: '',
    paymentMethod: '',
    travelerType: '',
    expectedBehavior: '',
    agreeActivities: '',
    letsGoResponse: '',
    specialRequests: '',
    declarationAccepted: false
  });

  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  const handleSelectOption = (field, value) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const validateStep = (step) => {
    if (step === 1) {
      return formData.fullName.trim() && formData.tripNickname.trim() && formData.contactNumber.trim() && formData.emergencyContact.trim();
    }
    if (step === 2) {
      return formData.visaStatus && formData.confirmParticipation && formData.guestsCount;
    }
    if (step === 3) {
      return formData.financialReady && formData.paymentMethod;
    }
    if (step === 4) {
      return formData.travelerType && formData.expectedBehavior;
    }
    if (step === 5) {
      return formData.agreeActivities && formData.letsGoResponse && formData.declarationAccepted;
    }
    return true;
  };

  const handleNext = () => {
    if (!validateStep(currentStep)) {
      alert("Please answer all required fields before proceeding! 🛂⚠️");
      return;
    }
    setCurrentStep(prev => Math.min(prev + 1, 5));
    window.scrollTo({ top: 120, behavior: 'smooth' });
  };

  const handlePrev = () => {
    setCurrentStep(prev => Math.max(prev - 1, 1));
    window.scrollTo({ top: 120, behavior: 'smooth' });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validateStep(5)) {
      alert("Please accept the terms and complete all declarations! ⚠️");
      return;
    }
    console.log("Trip Visa Application Submitted:", formData);
    setIsSubmitted(true);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  if (isSubmitted) {
    return (
      <div className="visa-app-wrapper">
        <div className="visa-bg-watermark">6.0</div>
        <div className="visa-passport-container">
          <motion.div 
            className="passport-approved-card"
            initial={{ scale: 0.85, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ type: "spring", stiffness: 120, damping: 14 }}
          >
            <div className="embassy-top-row" style={{ justifyContent: 'center' }}>
              <span className="embassy-badge">
                <ShieldCheck className="passport-seal-icon" /> 
                Department of Immigration & Questionable Decisions
              </span>
            </div>

            <h1 style={{ fontSize: '2rem', color: '#ffffff', margin: '14px 0 6px 0' }}>
              🎉 VISA APPLICATION LODGED!
            </h1>
            <p style={{ color: '#8b949e', fontSize: '0.98rem' }}>
              Your application for <strong>ඇහින්දාස් Trip 6.0</strong> has been officially logged into the embassy database.
            </p>

            {/* Red Authentic Stamp */}
            <div className="investigation-stamp-graphic">
              🛂 UNDER INVESTIGATION 😂
            </div>

            <div className="passport-details-ticket">
              <div>
                <div className="ticket-item-label">Applicant Name</div>
                <div className="ticket-item-val">{formData.fullName || "Anonymous Legend"}</div>
              </div>
              <div>
                <div className="ticket-item-label">Callsign / Nickname</div>
                <div className="ticket-item-val">{formData.tripNickname || "N/A"}</div>
              </div>
              <div>
                <div className="ticket-item-label">Visa Confirmation</div>
                <div className="ticket-item-val">{formData.confirmParticipation || "Pending"}</div>
              </div>
              <div>
                <div className="ticket-item-label">Party Size</div>
                <div className="ticket-item-val">{formData.guestsCount || "Just me"}</div>
              </div>
            </div>

            <p style={{ color: '#ff7b72', fontSize: '0.92rem', fontStyle: 'italic', maxWidth: '520px', margin: '0 auto' }}>
              "Congratulations! You have officially taken the first step towards regretting this decision. Please wait for group admin approval." 😂
            </p>

            <button 
              className="nav-next-btn" 
              style={{ margin: '30px auto 0 auto', display: 'inline-flex' }}
              onClick={() => {
                setIsSubmitted(false);
                setCurrentStep(1);
              }}
            >
              Submit Another Application
            </button>
          </motion.div>
        </div>
      </div>
    );
  }

  return (
    <div className="visa-app-wrapper">
      <div className="visa-bg-watermark">VISA</div>
      <div className="visa-passport-container">

        {/* Passport Top Banner */}
        <div className="passport-banner">
          <div className="embassy-top-row">
            <div className="embassy-badge">
              <ShieldCheck className="passport-seal-icon" />
              Official Visa Department 🇱🇰
            </div>
            <div className="serial-number">DOC #AHIN-2026-V6.0</div>
          </div>

          <h1 className="passport-title">
            ඇහින්දාස් Trip 6.0
            <span style={{ fontSize: '1rem', color: '#ffc83b', background: 'rgba(255, 200, 59, 0.12)', padding: '4px 10px', borderRadius: '20px', border: '1px solid rgba(255, 200, 59, 0.3)' }}>
              OFFICIAL VISA APPLICATION 🛂
            </span>
          </h1>

          <p className="passport-subtitle">
            Welcome to the official <strong>ඇහින්දාස් Trip 6.0 Visa Application Centre</strong>. 
            This portal is strictly for people claiming they are joining the trip. Fill all fields with extreme honesty.
          </p>

          <div className="visa-rules-ticker">
            <AlertTriangle style={{ width: 18, height: 18, flexShrink: 0, marginTop: 2 }} />
            <div>
              <strong>Embassy Advisory:</strong> Submitting this form does <u>NOT</u> guarantee your survival on the trip. False information will result in immediate visa cancellation and group deportation. 😭
            </div>
          </div>
        </div>

        {/* Progress Tracker */}
        <div className="visa-progress-tracker">
          {sections.map((sec) => {
            const Icon = sec.icon;
            const isCompleted = currentStep > sec.id;
            const isActive = currentStep === sec.id;

            return (
              <div 
                key={sec.id} 
                className={`progress-step-item ${isActive ? 'active' : ''} ${isCompleted ? 'completed' : ''}`}
                onClick={() => {
                  if (isCompleted || validateStep(currentStep)) {
                    setCurrentStep(sec.id);
                  }
                }}
              >
                <div className="step-indicator-bubble">
                  {isCompleted ? <CheckCircle style={{ width: 15, height: 15 }} /> : <Icon style={{ width: 14, height: 14 }} />}
                </div>
                <div className="step-label">{sec.title}</div>
              </div>
            );
          })}
        </div>

        {/* Multi-Step Animated Form Panel */}
        <form onSubmit={handleSubmit}>
          <AnimatePresence mode="wait">

            {/* STEP 1: Applicant Details */}
            {currentStep === 1 && (
              <motion.div
                key="step1"
                className="visa-section-panel"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.25 }}
              >
                <div className="visa-panel-header">
                  <div className="panel-header-icon"><FileText /></div>
                  <div>
                    <h3>Section 01 — Applicant Information</h3>
                    <div style={{ fontSize: '0.82rem', color: '#8b949e' }}>Verify your official identity for the embassy manifest</div>
                  </div>
                </div>

                <div className="visa-field-group">
                  <label className="visa-field-label">1. Full Legal Name *</label>
                  <div className="visa-field-hint">Enter your actual name. “අයියේ මම” will not be accepted. 😂</div>
                  <input 
                    type="text" 
                    name="fullName" 
                    className="visa-text-input" 
                    placeholder="e.g. Kasun Fernando"
                    value={formData.fullName}
                    onChange={handleChange}
                    required
                  />
                </div>

                <div className="visa-field-group">
                  <label className="visa-field-label">2. Trip Alias / Callsign *</label>
                  <div className="visa-field-hint">Nickname / embarrassing childhood name accepted.</div>
                  <input 
                    type="text" 
                    name="tripNickname" 
                    className="visa-text-input" 
                    placeholder="e.g. Chutta, Podda, Hacker"
                    value={formData.tripNickname}
                    onChange={handleChange}
                    required
                  />
                </div>

                <div className="visa-field-group">
                  <label className="visa-field-label">3. Primary Contact Number *</label>
                  <input 
                    type="tel" 
                    name="contactNumber" 
                    className="visa-text-input" 
                    placeholder="+94 7X XXX XXXX"
                    value={formData.contactNumber}
                    onChange={handleChange}
                    required
                  />
                </div>

                <div className="visa-field-group">
                  <label className="visa-field-label">4. Emergency Contact (Name & Number) *</label>
                  <div className="visa-field-hint">Hopefully we won’t need this. 😂</div>
                  <input 
                    type="text" 
                    name="emergencyContact" 
                    className="visa-text-input" 
                    placeholder="e.g. Amma / Friend (+94 77 XXX XXXX)"
                    value={formData.emergencyContact}
                    onChange={handleChange}
                    required
                  />
                </div>
              </motion.div>
            )}

            {/* STEP 2: Trip Visa Application */}
            {currentStep === 2 && (
              <motion.div
                key="step2"
                className="visa-section-panel"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.25 }}
              >
                <div className="visa-panel-header">
                  <div className="panel-header-icon"><Plane /></div>
                  <div>
                    <h3>Section 02 — Trip Visa Application</h3>
                    <div style={{ fontSize: '0.82rem', color: '#8b949e' }}>State your official immigration intentions</div>
                  </div>
                </div>

                <div className="visa-field-group">
                  <label className="visa-field-label">5. Are you officially applying for the “ඇහින්දාස් Trip 6.0” Visa? *</label>
                  <div className="visa-option-grid">
                    {[
                      "🇱🇰 Yes, I’m coming!",
                      "🤔 Still thinking… but 90% coming",
                      "🫣 I want to come but need permission",
                      "❌ No, I’m unfortunately a responsible adult"
                    ].map(opt => (
                      <div 
                        key={opt} 
                        className={`visa-option-card ${formData.visaStatus === opt ? 'selected' : ''}`}
                        onClick={() => handleSelectOption('visaStatus', opt)}
                      >
                        <div className="visa-option-indicator">
                          {formData.visaStatus === opt && <div className="indicator-dot" />}
                        </div>
                        <span className="visa-option-text">{opt}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="visa-field-group">
                  <label className="visa-field-label">6. Are you CONFIRMING your participation? *</label>
                  <div className="visa-option-grid">
                    {[
                      "✅ YES — 100% CONFIRMED",
                      "🔥 YES — Book me in!",
                      "🤔 Maybe — Don’t remove me yet",
                      "❌ NO — My journey ends here"
                    ].map(opt => (
                      <div 
                        key={opt} 
                        className={`visa-option-card ${formData.confirmParticipation === opt ? 'selected' : ''}`}
                        onClick={() => handleSelectOption('confirmParticipation', opt)}
                      >
                        <div className="visa-option-indicator">
                          {formData.confirmParticipation === opt && <div className="indicator-dot" />}
                        </div>
                        <span className="visa-option-text">{opt}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="visa-field-group">
                  <label className="visa-field-label">7. Companion Quota (How many coming with you?) *</label>
                  <div className="visa-option-grid">
                    {[
                      "Just me 😎",
                      "Me + 1",
                      "Me + 2",
                      "Me + 3",
                      "I’m bringing the whole village 💀"
                    ].map(opt => (
                      <div 
                        key={opt} 
                        className={`visa-option-card ${formData.guestsCount === opt ? 'selected' : ''}`}
                        onClick={() => handleSelectOption('guestsCount', opt)}
                      >
                        <div className="visa-option-indicator">
                          {formData.guestsCount === opt && <div className="indicator-dot" />}
                        </div>
                        <span className="visa-option-text">{opt}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>
            )}

            {/* STEP 3: Financial Eligibility */}
            {currentStep === 3 && (
              <motion.div
                key="step3"
                className="visa-section-panel"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.25 }}
              >
                <div className="visa-panel-header">
                  <div className="panel-header-icon"><DollarSign /></div>
                  <div>
                    <h3>Section 03 — Financial Eligibility 😂</h3>
                    <div style={{ fontSize: '0.82rem', color: '#8b949e' }}>Proof of funds and treasury settlement capability</div>
                  </div>
                </div>

                <div className="visa-field-group">
                  <label className="visa-field-label">8. Are you financially prepared for the consequences of saying “YES”? *</label>
                  <div className="visa-option-grid">
                    {[
                      "💰 Yes, I’m rich",
                      "💳 Card is ready",
                      "🥲 Somehow I’ll manage",
                      "💀 I have absolutely no idea"
                    ].map(opt => (
                      <div 
                        key={opt} 
                        className={`visa-option-card ${formData.financialReady === opt ? 'selected' : ''}`}
                        onClick={() => handleSelectOption('financialReady', opt)}
                      >
                        <div className="visa-option-indicator">
                          {formData.financialReady === opt && <div className="indicator-dot" />}
                        </div>
                        <span className="visa-option-text">{opt}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="visa-field-group">
                  <label className="visa-field-label">9. Preferred payment method *</label>
                  <div className="visa-option-grid">
                    {[
                      "Cash 💵",
                      "Bank transfer 🏦",
                      "Card 💳",
                      "“අයියේ පස්සේ දෙන්නම්” 😭"
                    ].map(opt => (
                      <div 
                        key={opt} 
                        className={`visa-option-card ${formData.paymentMethod === opt ? 'selected' : ''}`}
                        onClick={() => handleSelectOption('paymentMethod', opt)}
                      >
                        <div className="visa-option-indicator">
                          {formData.paymentMethod === opt && <div className="indicator-dot" />}
                        </div>
                        <span className="visa-option-text">{opt}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>
            )}

            {/* STEP 4: Behaviour Assessment */}
            {currentStep === 4 && (
              <motion.div
                key="step4"
                className="visa-section-panel"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.25 }}
              >
                <div className="visa-panel-header">
                  <div className="panel-header-icon"><Beer /></div>
                  <div>
                    <h3>Section 04 — Applicant Behaviour Assessment</h3>
                    <div style={{ fontSize: '0.82rem', color: '#8b949e' }}>Psychological & party readiness profile</div>
                  </div>
                </div>

                <div className="visa-field-group">
                  <label className="visa-field-label">10. What type of traveller are you? *</label>
                  <div className="visa-option-grid">
                    {[
                      "😇 Early sleeper",
                      "😎 Chill traveller",
                      "🔥 Party starter",
                      "📸 Photographer",
                      "🍔 Food hunter",
                      "🗣️ Talks the entire journey",
                      "😴 Sleeps from departure to arrival",
                      "💀 The problem"
                    ].map(opt => (
                      <div 
                        key={opt} 
                        className={`visa-option-card ${formData.travelerType === opt ? 'selected' : ''}`}
                        onClick={() => handleSelectOption('travelerType', opt)}
                      >
                        <div className="visa-option-indicator">
                          {formData.travelerType === opt && <div className="indicator-dot" />}
                        </div>
                        <span className="visa-option-text">{opt}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="visa-field-group">
                  <label className="visa-field-label">11. What is your expected behaviour during the trip? *</label>
                  <div className="visa-option-grid">
                    {[
                      "😇 Very responsible",
                      "😎 Mostly responsible",
                      "🤔 Depends on the situation",
                      "🍻 We don’t talk about that",
                      "💀 No comment"
                    ].map(opt => (
                      <div 
                        key={opt} 
                        className={`visa-option-card ${formData.expectedBehavior === opt ? 'selected' : ''}`}
                        onClick={() => handleSelectOption('expectedBehavior', opt)}
                      >
                        <div className="visa-option-indicator">
                          {formData.expectedBehavior === opt && <div className="indicator-dot" />}
                        </div>
                        <span className="visa-option-text">{opt}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>
            )}

            {/* STEP 5: Final Declaration */}
            {currentStep === 5 && (
              <motion.div
                key="step5"
                className="visa-section-panel"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.25 }}
              >
                <div className="visa-panel-header">
                  <div className="panel-header-icon"><AlertTriangle /></div>
                  <div>
                    <h3>Section 05 — Final Treaty & Visa Oath</h3>
                    <div style={{ fontSize: '0.82rem', color: '#8b949e' }}>Binding legal commitment to the clan</div>
                  </div>
                </div>

                <div className="visa-field-group">
                  <label className="visa-field-label">12. Do you agree to participate in random activities, unexpected plans, excessive laughing, unnecessary photos, and questionable decisions? *</label>
                  <div className="visa-option-grid">
                    {[
                      "✅ I AGREE",
                      "😂 I was born ready",
                      "🫡 I accept my fate"
                    ].map(opt => (
                      <div 
                        key={opt} 
                        className={`visa-option-card ${formData.agreeActivities === opt ? 'selected' : ''}`}
                        onClick={() => handleSelectOption('agreeActivities', opt)}
                      >
                        <div className="visa-option-indicator">
                          {formData.agreeActivities === opt && <div className="indicator-dot" />}
                        </div>
                        <span className="visa-option-text">{opt}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="visa-field-group">
                  <label className="visa-field-label">13. If the group says “Let’s go”, what will you say? *</label>
                  <div className="visa-option-grid">
                    {[
                      "LET’S GOOOOO 🔥",
                      "Where?",
                      "How much? 😭",
                      "I’m coming!",
                      "Who is paying? 😂"
                    ].map(opt => (
                      <div 
                        key={opt} 
                        className={`visa-option-card ${formData.letsGoResponse === opt ? 'selected' : ''}`}
                        onClick={() => handleSelectOption('letsGoResponse', opt)}
                      >
                        <div className="visa-option-indicator">
                          {formData.letsGoResponse === opt && <div className="indicator-dot" />}
                        </div>
                        <span className="visa-option-text">{opt}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="visa-field-group">
                  <label className="visa-field-label">14. Any special requests, complaints, demands or conditions?</label>
                  <div className="visa-field-hint">This is your final opportunity to complain before the trip. 😂</div>
                  <textarea 
                    name="specialRequests" 
                    className="visa-text-input visa-textarea" 
                    placeholder="Write your demands here..."
                    value={formData.specialRequests}
                    onChange={handleChange}
                  />
                </div>

                {/* Formal Oath Document */}
                <div className="official-declaration-doc">
                  <div className="doc-stamp">LEGAL OATH</div>
                  <p className="declaration-text">
                    “I hereby confirm that the information provided above is true and correct. I understand that by submitting this application, I am voluntarily entering into the dangerous and highly questionable journey known as <strong>ඇහින්දාස් Trip 6.0</strong>.<br /><br />
                    I agree to follow the group decisions, tolerate the jokes, appear in unwanted photos, and accept that plans may change at any moment.<br /><br />
                    I also understand that once I say YES, there is no going back. 😂”
                  </p>
                </div>

                <label className="checkbox-confirm-row">
                  <input 
                    type="checkbox" 
                    name="declarationAccepted" 
                    checked={formData.declarationAccepted}
                    onChange={handleChange}
                    required
                  />
                  <span style={{ fontSize: '0.94rem', fontWeight: 600 }}>
                    I HAVE READ AND ACCEPTED THE ABOVE TERMS *
                  </span>
                </label>
              </motion.div>
            )}

          </AnimatePresence>

          {/* Navigation Controls */}
          <div className="form-navigation-actions">
            {currentStep > 1 && (
              <button type="button" className="nav-prev-btn" onClick={handlePrev}>
                <ChevronLeft style={{ width: 18, height: 18 }} /> Back
              </button>
            )}

            {currentStep < 5 ? (
              <button type="button" className="nav-next-btn" onClick={handleNext}>
                Proceed to Section 0{currentStep + 1} <ChevronRight style={{ width: 18, height: 18 }} />
              </button>
            ) : (
              <button type="submit" className="nav-submit-btn">
                <Sparkles style={{ width: 18, height: 18 }} /> 👉 APPLY FOR TRIP VISA 🛂😂
              </button>
            )}
          </div>
        </form>

      </div>
    </div>
  );
};

export default ClanTripForm;
