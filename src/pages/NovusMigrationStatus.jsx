import { useState, useEffect } from 'react';
import { novusStatus } from '../novus-status.js';
import './NovusMigrationStatus.css';

export default function NovusMigrationStatus() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    alternateEmail: '',
    location: '',
    urgency: '',
    problemDescription: ''
  });
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [formLoading, setFormLoading] = useState(false);
  const [formError, setFormError] = useState(null);

  // Set page title and meta tags
  useEffect(() => {
    document.title = 'Novus Labs - Migration Status';

    // Add noindex meta tag
    let metaRobots = document.querySelector('meta[name="robots"]');
    if (!metaRobots) {
      metaRobots = document.createElement('meta');
      metaRobots.name = 'robots';
      document.head.appendChild(metaRobots);
    }
    metaRobots.content = 'noindex, nofollow';

    return () => {
      // Cleanup on unmount
      document.title = 'AI Ready PDX | AI Consulting for Portland Businesses';
      if (metaRobots) {
        metaRobots.content = 'index, follow';
      }
    };
  }, []);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setFormLoading(true);
    setFormError(null);

    try {
      const response = await fetch('/api/novus-migration', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData)
      });

      if (!response.ok) {
        throw new Error('Failed to submit form');
      }

      setFormSubmitted(true);
    } catch (error) {
      console.error('Form submission error:', error);
      setFormError('Unable to submit form. Please try calling IT directly.');
    } finally {
      setFormLoading(false);
    }
  };

  const getStatusClass = () => {
    switch (novusStatus.currentStatus) {
      case 'operational': return 'status-operational';
      case 'partial-outage': return 'status-partial';
      case 'major-outage': return 'status-major';
      default: return 'status-partial';
    }
  };

  const getStatusText = () => {
    switch (novusStatus.currentStatus) {
      case 'operational': return 'All Systems Operational';
      case 'partial-outage': return 'Partial Service Disruption';
      case 'major-outage': return 'Major Service Disruption';
      default: return 'Status Unknown';
    }
  };

  return (
    <div className="novus-page">
      {/* Header */}
      <header className="novus-header">
        <div className="novus-header-content">
          <img
            src="/novus-logo.png"
            alt="Novus Labs"
            className="novus-logo"
          />
          <span className="novus-header-divider">|</span>
          <span className="novus-header-title">Migration Status</span>
        </div>
      </header>

      <main className="novus-main">
        {/* Status Section */}
        <section className="novus-status-section">
          <div className="novus-container">
            {/* Status Badge */}
            <div className={`novus-status-badge ${getStatusClass()}`}>
              <span className="status-dot"></span>
              <span className="status-text">{getStatusText()}</span>
            </div>

            {/* Last Updated */}
            <p className="novus-last-updated">
              Last updated: <strong>{novusStatus.lastUpdated}</strong>
            </p>

            {/* Summary */}
            <div className="novus-summary">
              <p>{novusStatus.summary}</p>
            </div>

            {/* Status Details */}
            <div className="novus-details">
              <h2>Current Status</h2>
              <ul className="novus-status-list">
                {novusStatus.details.map((detail, index) => (
                  <li key={index}>{detail}</li>
                ))}
              </ul>
            </div>

            {/* Workarounds */}
            {novusStatus.workarounds && novusStatus.workarounds.length > 0 && (
              <div className="novus-workarounds">
                <h2>Workarounds &amp; Tips</h2>
                <div className="novus-workarounds-grid">
                  {novusStatus.workarounds.map((item, index) => (
                    <div key={index} className="novus-workaround-card">
                      <h3>{item.title}</h3>
                      <p>{item.description}</p>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* IT Contacts */}
            {novusStatus.itContacts && novusStatus.itContacts.length > 0 && (
              <div className="novus-contacts">
                <h2>IT Support Contacts</h2>
                <div className="novus-contacts-grid">
                  {novusStatus.itContacts.map((contact, index) => (
                    <div key={index} className="novus-contact-card">
                      <span className="contact-name">{contact.name}</span>
                      <a href={`tel:${contact.phone.replace(/[^\d+]/g, '')}`} className="contact-phone">
                        {contact.phone}
                      </a>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* More Info Link */}
            {novusStatus.moreInfoLink && (
              <p className="novus-more-info">
                <a href={novusStatus.moreInfoLink} target="_blank" rel="noopener noreferrer">
                  View detailed documentation &rarr;
                </a>
              </p>
            )}
          </div>
        </section>

        {/* Divider */}
        <div className="novus-divider">
          <span>Report an Issue</span>
        </div>

        {/* Contact Form Section */}
        <section className="novus-form-section">
          <div className="novus-container">
            <h2>Having Problems? Let Us Know</h2>
            <p className="novus-form-intro">
              Please use the form below to contact IT if you are having any issues related to the migration and our IT team will contact you.
            </p>

            {formSubmitted ? (
              <div className="novus-form-success">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
                  <polyline points="22 4 12 14.01 9 11.01" />
                </svg>
                <h3>Thank You!</h3>
                <p>Your message has been sent to the IT team. Someone will contact you shortly.</p>
              </div>
            ) : (
              <form className="novus-form" onSubmit={handleSubmit}>
                <div className="novus-form-row">
                  <div className="novus-form-group">
                    <label htmlFor="name">Name *</label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                      placeholder="Your full name"
                    />
                  </div>
                  <div className="novus-form-group">
                    <label htmlFor="phone">Phone Number *</label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      required
                      placeholder="(555) 555-5555"
                    />
                  </div>
                </div>

                <div className="novus-form-row">
                  <div className="novus-form-group">
                    <label htmlFor="alternateEmail">Alternate Email</label>
                    <input
                      type="email"
                      id="alternateEmail"
                      name="alternateEmail"
                      value={formData.alternateEmail}
                      onChange={handleInputChange}
                      placeholder="Personal email (if work email is down)"
                    />
                  </div>
                  <div className="novus-form-group">
                    <label htmlFor="location">Location *</label>
                    <select
                      id="location"
                      name="location"
                      value={formData.location}
                      onChange={handleInputChange}
                      required
                    >
                      <option value="">Select your location...</option>
                      <option value="on-site">On-site at Novus office</option>
                      <option value="home">Working from home</option>
                      <option value="remote">Remote Novus team member</option>
                    </select>
                  </div>
                </div>

                <div className="novus-form-group">
                  <label htmlFor="urgency">Urgency Level *</label>
                  <select
                    id="urgency"
                    name="urgency"
                    value={formData.urgency}
                    onChange={handleInputChange}
                    required
                  >
                    <option value="">Select urgency level...</option>
                    <option value="low">Low - Can wait</option>
                    <option value="medium">Medium - Affecting my work</option>
                    <option value="high">High - Cannot work at all</option>
                    <option value="critical">Critical - Business operations impacted</option>
                  </select>
                </div>

                <div className="novus-form-group">
                  <label htmlFor="problemDescription">Describe the Problem *</label>
                  <textarea
                    id="problemDescription"
                    name="problemDescription"
                    value={formData.problemDescription}
                    onChange={handleInputChange}
                    required
                    rows="4"
                    placeholder="Please describe what's happening, any error messages you see, any access issues you're having..."
                  />
                </div>

                {formError && (
                  <div className="novus-form-error">
                    {formError}
                  </div>
                )}

                <button
                  type="submit"
                  className="novus-submit-btn"
                  disabled={formLoading}
                >
                  {formLoading ? 'Submitting...' : 'Submit Report'}
                </button>
              </form>
            )}
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="novus-footer">
        <p>Novus Labs IT Support | Migration Assistance</p>
        <p className="novus-footer-small">
          Quick link: <strong>tinyurl.com/novus25</strong>
        </p>
        <p className="novus-footer-version">
          v1.0.2 | Built: {__BUILD_TIME__}
        </p>
      </footer>
    </div>
  );
}
