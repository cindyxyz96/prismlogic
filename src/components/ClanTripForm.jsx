import React, { useState } from 'react';
import './ClanTripForm.css';

const ClanTripForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    meal: '',
    liquor: '',
    smokeWeedOnly: false
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
    console.log("Form Submitted:", formData);
    setIsSubmitted(true);
  };

  if (isSubmitted) {
    return (
      <div className="clan-trip-container">
        <div className="clan-trip-form">
          <div className="form-header success-message">
            <h1>Registration Received!</h1>
            <p>Your response has been recorded. Get ready for an epic clan trip!</p>
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
          <h1>Gaming Clan Annual Trip 2026</h1>
          <p>Please fill out this form to confirm your participation and preferences for the upcoming annual clan trip.</p>
        </div>

        {/* Name Question */}
        <div className="form-card">
          <div className="form-question">Name / Gamer Tag *</div>
          <input 
            type="text" 
            name="name" 
            className="form-input-text" 
            placeholder="Your answer"
            value={formData.name}
            onChange={handleChange}
            required
          />
        </div>

        {/* Meal Preference */}
        <div className="form-card">
          <div className="form-question">Meal Preference *</div>
          <div className="form-radio-group">
            <label className="form-radio-label">
              <input type="radio" name="meal" value="Chicken" required onChange={handleChange} />
              Chicken
            </label>
            <label className="form-radio-label">
              <input type="radio" name="meal" value="Beef" onChange={handleChange} />
              Beef
            </label>
            <label className="form-radio-label">
              <input type="radio" name="meal" value="Veggie" onChange={handleChange} />
              Veggie
            </label>
          </div>
        </div>

        {/* Liquor Preference */}
        <div className="form-card">
          <div className="form-question">Liquor Preference *</div>
          <div className="form-radio-group">
            <label className="form-radio-label">
              <input type="radio" name="liquor" value="Yes" required onChange={handleChange} />
              Yes, I drink
            </label>
            <label className="form-radio-label">
              <input type="radio" name="liquor" value="No" onChange={handleChange} />
              No liquor
            </label>
          </div>
        </div>

        {/* Smoke Weed Only */}
        <div className="form-card">
          <div className="form-question">Alternative Preferences</div>
          <div className="form-radio-group">
            <label className="form-radio-label">
              <input 
                type="checkbox" 
                name="smokeWeedOnly" 
                checked={formData.smokeWeedOnly}
                onChange={handleChange}
              />
              I only smoke weed
            </label>
          </div>
        </div>

        {/* Submit Button */}
        <div className="form-submit-container">
          <button type="submit" className="form-submit-btn">Submit</button>
        </div>

      </form>
    </div>
  );
};

export default ClanTripForm;
