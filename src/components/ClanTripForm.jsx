import React, { useState } from 'react';
import './ClanTripForm.css';

const ClanTripForm = () => {
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

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Trip Visa Application Submitted:", formData);
    setIsSubmitted(true);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  if (isSubmitted) {
    return (
      <div className="clan-trip-container">
        <div className="clan-trip-form">
          <div className="form-header success-message">
            <h1>🎉 VISA APPLICATION RECEIVED!</h1>
            <p>Your application for <strong>ඇහින්දාස් Trip 6.0</strong> has been successfully submitted.</p>
            
            <div className="success-badge">
              🛂 Status: UNDER INVESTIGATION 😂
            </div>

            <p style={{ marginTop: '12px', color: 'var(--text-secondary)' }}>
              Please wait for the final approval.
            </p>
            <p style={{ marginTop: '8px', color: 'var(--text-primary)', fontStyle: 'italic' }}>
              Congratulations! You have officially taken the first step towards regretting this decision. 😂
            </p>

            <button 
              className="form-submit-btn" 
              style={{ marginTop: '28px' }}
              onClick={() => setIsSubmitted(false)}
            >
              Submit Another Response
            </button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="clan-trip-container">
      <form className="clan-trip-form" onSubmit={handleSubmit}>
        
        {/* Header Section */}
        <div className="form-header">
          <h1>🇱🇰 ඇහින්දාස් Trip 6.0 — OFFICIAL TRIP VISA APPLICATION 🛂😂</h1>
          <p>
            Welcome to the official ඇහින්දාස් Trip 6.0 Visa Application Centre 😂
          </p>
          <p>
            This form is for people who claim they are coming on the trip. Please fill in all details honestly. 
            False information may result in cancellation of your “Visa” and immediate removal from the trip group. 😭
          </p>
          <p className="highlight-warning">
            Important: Submitting this form does NOT guarantee your survival on the trip. 😂
          </p>
          <p>
            Please complete the application before the deadline. Once approved, you will officially become a Trip Member – ඇහින්දාස් Trip 6.0. 🛂✅
          </p>
        </div>

        {/* SECTION 01 */}
        <div className="section-divider-card">
          <h2>📝 Section 01 — Applicant Information</h2>
        </div>

        {/* Q1 */}
        <div className="form-card">
          <div className="form-question">1. Full Name *</div>
          <div className="form-helper">Enter your actual name. “අයියේ මම” will not be accepted. 😂</div>
          <input 
            type="text" 
            name="fullName" 
            className="form-input-text" 
            placeholder="Your answer"
            value={formData.fullName}
            onChange={handleChange}
            required
          />
        </div>

        {/* Q2 */}
        <div className="form-card">
          <div className="form-question">2. What should we call you on the trip? *</div>
          <div className="form-helper">Nickname / alias / embarrassing childhood name accepted.</div>
          <input 
            type="text" 
            name="tripNickname" 
            className="form-input-text" 
            placeholder="Your answer"
            value={formData.tripNickname}
            onChange={handleChange}
            required
          />
        </div>

        {/* Q3 */}
        <div className="form-card">
          <div className="form-question">3. Contact Number *</div>
          <input 
            type="tel" 
            name="contactNumber" 
            className="form-input-text" 
            placeholder="Your answer"
            value={formData.contactNumber}
            onChange={handleChange}
            required
          />
        </div>

        {/* Q4 */}
        <div className="form-card">
          <div className="form-question">4. Emergency Contact Name & Number *</div>
          <div className="form-helper">Hopefully we won’t need this. 😂</div>
          <input 
            type="text" 
            name="emergencyContact" 
            className="form-input-text" 
            placeholder="Your answer"
            value={formData.emergencyContact}
            onChange={handleChange}
            required
          />
        </div>

        {/* SECTION 02 */}
        <div className="section-divider-card">
          <h2>🛂 Section 02 — Trip Visa Application</h2>
        </div>

        {/* Q5 */}
        <div className="form-card">
          <div className="form-question">5. Are you officially applying for the “ඇහින්දාස් Trip 6.0” Visa? *</div>
          <div className="form-radio-group">
            {[
              "🇱🇰 Yes, I’m coming!",
              "🤔 Still thinking… but 90% coming",
              "🫣 I want to come but need permission",
              "❌ No, I’m unfortunately a responsible adult"
            ].map(opt => (
              <label key={opt} className="form-radio-label">
                <input 
                  type="radio" 
                  name="visaStatus" 
                  value={opt} 
                  required 
                  checked={formData.visaStatus === opt}
                  onChange={handleChange} 
                />
                {opt}
              </label>
            ))}
          </div>
        </div>

        {/* Q6 */}
        <div className="form-card">
          <div className="form-question">6. Are you CONFIRMING your participation? *</div>
          <div className="form-radio-group">
            {[
              "✅ YES — 100% CONFIRMED",
              "🔥 YES — Book me in!",
              "🤔 Maybe — Don’t remove me yet",
              "❌ NO — My journey ends here"
            ].map(opt => (
              <label key={opt} className="form-radio-label">
                <input 
                  type="radio" 
                  name="confirmParticipation" 
                  value={opt} 
                  required 
                  checked={formData.confirmParticipation === opt}
                  onChange={handleChange} 
                />
                {opt}
              </label>
            ))}
          </div>
        </div>

        {/* Q7 */}
        <div className="form-card">
          <div className="form-question">7. How many people are coming with you? *</div>
          <div className="form-radio-group">
            {[
              "Just me 😎",
              "Me + 1",
              "Me + 2",
              "Me + 3",
              "I’m bringing the whole village 💀"
            ].map(opt => (
              <label key={opt} className="form-radio-label">
                <input 
                  type="radio" 
                  name="guestsCount" 
                  value={opt} 
                  required 
                  checked={formData.guestsCount === opt}
                  onChange={handleChange} 
                />
                {opt}
              </label>
            ))}
          </div>
        </div>

        {/* SECTION 03 */}
        <div className="section-divider-card">
          <h2>💰 Section 03 — Financial Eligibility 😂</h2>
        </div>

        {/* Q8 */}
        <div className="form-card">
          <div className="form-question">8. Are you financially prepared for the consequences of saying “YES”? *</div>
          <div className="form-radio-group">
            {[
              "💰 Yes, I’m rich",
              "💳 Card is ready",
              "🥲 Somehow I’ll manage",
              "💀 I have absolutely no idea"
            ].map(opt => (
              <label key={opt} className="form-radio-label">
                <input 
                  type="radio" 
                  name="financialReady" 
                  value={opt} 
                  required 
                  checked={formData.financialReady === opt}
                  onChange={handleChange} 
                />
                {opt}
              </label>
            ))}
          </div>
        </div>

        {/* Q9 */}
        <div className="form-card">
          <div className="form-question">9. Preferred payment method *</div>
          <div className="form-radio-group">
            {[
              "Cash 💵",
              "Bank transfer 🏦",
              "Card 💳",
              "“අයියේ පස්සේ දෙන්නම්” 😭"
            ].map(opt => (
              <label key={opt} className="form-radio-label">
                <input 
                  type="radio" 
                  name="paymentMethod" 
                  value={opt} 
                  required 
                  checked={formData.paymentMethod === opt}
                  onChange={handleChange} 
                />
                {opt}
              </label>
            ))}
          </div>
        </div>

        {/* SECTION 04 */}
        <div className="section-divider-card">
          <h2>🍻 Section 04 — Applicant Behaviour Assessment</h2>
        </div>

        {/* Q10 */}
        <div className="form-card">
          <div className="form-question">10. What type of traveller are you? *</div>
          <div className="form-radio-group">
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
              <label key={opt} className="form-radio-label">
                <input 
                  type="radio" 
                  name="travelerType" 
                  value={opt} 
                  required 
                  checked={formData.travelerType === opt}
                  onChange={handleChange} 
                />
                {opt}
              </label>
            ))}
          </div>
        </div>

        {/* Q11 */}
        <div className="form-card">
          <div className="form-question">11. What is your expected behaviour during the trip? *</div>
          <div className="form-radio-group">
            {[
              "😇 Very responsible",
              "😎 Mostly responsible",
              "🤔 Depends on the situation",
              "🍻 We don’t talk about that",
              "💀 No comment"
            ].map(opt => (
              <label key={opt} className="form-radio-label">
                <input 
                  type="radio" 
                  name="expectedBehavior" 
                  value={opt} 
                  required 
                  checked={formData.expectedBehavior === opt}
                  onChange={handleChange} 
                />
                {opt}
              </label>
            ))}
          </div>
        </div>

        {/* SECTION 05 */}
        <div className="section-divider-card">
          <h2>🚨 Section 05 — Final Declaration</h2>
        </div>

        {/* Q12 */}
        <div className="form-card">
          <div className="form-question">12. Do you agree to participate in random activities, unexpected plans, excessive laughing, unnecessary photos, and questionable decisions? *</div>
          <div className="form-radio-group">
            {[
              "✅ I AGREE",
              "😂 I was born ready",
              "🫡 I accept my fate"
            ].map(opt => (
              <label key={opt} className="form-radio-label">
                <input 
                  type="radio" 
                  name="agreeActivities" 
                  value={opt} 
                  required 
                  checked={formData.agreeActivities === opt}
                  onChange={handleChange} 
                />
                {opt}
              </label>
            ))}
          </div>
        </div>

        {/* Q13 */}
        <div className="form-card">
          <div className="form-question">13. If the group says “Let’s go”, what will you say? *</div>
          <div className="form-radio-group">
            {[
              "LET’S GOOOOO 🔥",
              "Where?",
              "How much? 😭",
              "I’m coming!",
              "Who is paying? 😂"
            ].map(opt => (
              <label key={opt} className="form-radio-label">
                <input 
                  type="radio" 
                  name="letsGoResponse" 
                  value={opt} 
                  required 
                  checked={formData.letsGoResponse === opt}
                  onChange={handleChange} 
                />
                {opt}
              </label>
            ))}
          </div>
        </div>

        {/* Q14 */}
        <div className="form-card">
          <div className="form-question">14. Any special requests, complaints, demands or conditions?</div>
          <div className="form-helper">This is your final opportunity to complain before the trip. 😂</div>
          <textarea 
            name="specialRequests" 
            className="form-textarea" 
            placeholder="Your answer"
            rows="3"
            value={formData.specialRequests}
            onChange={handleChange}
          />
        </div>

        {/* Q15: Declaration */}
        <div className="form-card">
          <div className="form-question">🛃 FINAL VISA DECLARATION</div>
          <div className="declaration-box">
            “I hereby confirm that the information provided above is true and correct. I understand that by submitting this application, I am voluntarily entering into the dangerous and highly questionable journey known as <strong>ඇහින්දාස් Trip 6.0</strong>.<br /><br />
            I agree to follow the group decisions, tolerate the jokes, appear in unwanted photos, and accept that plans may change at any moment.<br /><br />
            I also understand that once I say YES, there is no going back. 😂”
          </div>
          <label className="form-radio-label" style={{ fontWeight: 600, color: 'var(--text-primary)' }}>
            <input 
              type="checkbox" 
              name="declarationAccepted" 
              checked={formData.declarationAccepted}
              onChange={handleChange}
              required
            />
            I HAVE READ AND ACCEPTED THE ABOVE TERMS *
          </label>
        </div>

        {/* Submit Button */}
        <div className="form-submit-container">
          <button type="submit" className="form-submit-btn">
            👉 APPLY FOR TRIP VISA 🛂😂
          </button>
        </div>

      </form>
    </div>
  );
};

export default ClanTripForm;
