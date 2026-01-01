import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { Icons } from '../../components/Icons/Icons'
import './AIConsulting.css'

function WorkflowAutomation() {
  const navigate = useNavigate()

  // Set page title and meta description
  useEffect(() => {
    document.title = 'AI Workflow Automation Portland | Chatbots & Process Automation | AI Ready PDX'

    // Update meta description
    let metaDesc = document.querySelector('meta[name="description"]')
    if (!metaDesc) {
      metaDesc = document.createElement('meta')
      metaDesc.name = 'description'
      document.head.appendChild(metaDesc)
    }
    metaDesc.content = 'AI workflow automation for Portland businesses. Chatbots, voice agents, scheduling automation, and process optimization from AI Ready PDX. Save 10+ hours per week.'

    return () => {
      // Reset to default on unmount
      document.title = 'AI Ready PDX | AI Consulting for Portland Businesses'
    }
  }, [])

  const scrollToContact = (e) => {
    e.preventDefault()
    navigate('/#contact')
  }

  const scrollToPricing = (e) => {
    e.preventDefault()
    navigate('/#pricing')
  }

  return (
    <>
      {/* Hero Section */}
      <section className="service-hero workflow-automation-hero">
        <div className="container">
          <div className="service-hero-content">
            <h1>AI-Powered Workflow Automation for Portland Businesses</h1>
            <p className="service-hero-subtitle">
              Streamline operations with intelligent chatbots, voice agents, and process automation. AI Ready PDX helps Portland-area businesses save 10+ hours per week on routine tasks.
            </p>
            <div className="service-hero-buttons">
              <a href="/#contact" onClick={scrollToContact} className="btn btn-primary btn-large">
                Book Your AI Readiness Session - $50
              </a>
              <a href="/#pricing" onClick={scrollToPricing} className="btn btn-secondary">
                View All Packages
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Service Details Section */}
      <section className="service-details">
        <div className="container">
          <div className="section-header">
            <h2>Our Workflow Automation Services</h2>
            <p>We help Portland businesses automate repetitive tasks, freeing your team to focus on high-value work that grows your business.</p>
          </div>
          <div className="service-cards grid-3">
            <div className="card service-card">
              <div className="service-icon">
                <Icons.MessageSquare />
              </div>
              <h3>Chatbots and Voice Agents</h3>
              <p>AI-powered conversational interfaces for customer support, appointment booking, and FAQ handling that work around the clock.</p>
              <ul className="service-features">
                <li>24/7 customer response</li>
                <li>Appointment scheduling</li>
                <li>Lead qualification</li>
                <li>Multi-language support</li>
              </ul>
            </div>
            <div className="card service-card">
              <div className="service-icon">
                <Icons.Cog />
              </div>
              <h3>Process Automation</h3>
              <p>Intelligent automation for repetitive business processes, reducing manual work and eliminating human errors.</p>
              <ul className="service-features">
                <li>Scheduling and intake automation</li>
                <li>Invoice processing</li>
                <li>Data entry automation</li>
                <li>Workflow triggers</li>
              </ul>
            </div>
            <div className="card service-card">
              <div className="service-icon">
                <Icons.Megaphone />
              </div>
              <h3>Outreach Automation</h3>
              <p>Automated email, voice, and social media outreach to engage customers and generate leads consistently.</p>
              <ul className="service-features">
                <li>Email campaign automation</li>
                <li>Voice agent follow-ups</li>
                <li>Social media scheduling</li>
                <li>Lead nurturing sequences</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="service-benefits">
        <div className="container">
          <div className="section-header">
            <h2>Why Automate Your Workflows?</h2>
            <p>The right automation delivers measurable results. Here is what Portland businesses gain from AI-powered workflows.</p>
          </div>
          <div className="benefits-grid grid-2">
            <div className="benefit-item">
              <div className="benefit-icon">
                <Icons.CheckCircle />
              </div>
              <div className="benefit-content">
                <h3>Save 10+ Hours Per Week</h3>
                <p>Automate routine tasks like scheduling, follow-ups, and data entry so your team focuses on high-value work that grows your business.</p>
              </div>
            </div>
            <div className="benefit-item">
              <div className="benefit-icon">
                <Icons.MessageSquare />
              </div>
              <div className="benefit-content">
                <h3>24/7 Customer Response</h3>
                <p>AI chatbots and voice agents handle inquiries around the clock, never missing a lead or leaving a customer waiting.</p>
              </div>
            </div>
            <div className="benefit-item">
              <div className="benefit-icon">
                <Icons.Shield />
              </div>
              <div className="benefit-content">
                <h3>Reduce Human Error</h3>
                <p>Automated workflows execute consistently, eliminating manual mistakes in scheduling, data handling, and customer communications.</p>
              </div>
            </div>
            <div className="benefit-item">
              <div className="benefit-icon">
                <Icons.Users />
              </div>
              <div className="benefit-content">
                <h3>Scale Without Hiring</h3>
                <p>Handle more customers and requests without adding staff, growing your business efficiently with intelligent automation.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Use Cases Section */}
      <section className="service-process">
        <div className="container">
          <div className="section-header">
            <h2>Automation for Your Industry</h2>
            <p>We have helped businesses across Portland implement workflow automation. Here are common use cases by industry.</p>
          </div>
          <div className="process-steps">
            <div className="process-step">
              <div className="step-number">1</div>
              <h3>Field Services</h3>
              <p>Automated scheduling, quote follow-ups, and service reminders keep your crews busy and customers informed without manual coordination.</p>
            </div>
            <div className="process-step">
              <div className="step-number">2</div>
              <h3>Professional Practices</h3>
              <p>Patient and client intake, appointment reminders, and document requests handled automatically, reducing administrative burden.</p>
            </div>
            <div className="process-step">
              <div className="step-number">3</div>
              <h3>Retail and Hospitality</h3>
              <p>Order confirmations, reservation management, and feedback collection that runs on autopilot, improving customer experience.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing CTA Section */}
      <section className="service-cta">
        <div className="container">
          <div className="cta-content">
            <h2>Ready to Automate Your Workflows?</h2>
            <p>Begin with our AI Readiness Session - just $50 for a limited time (90% off the regular $500 price). We will identify your highest-impact automation opportunities and create a plan to implement them.</p>
            <div className="cta-pricing">
              <div className="cta-price-card">
                <h3>AI Readiness Session</h3>
                <p className="price"><s>$500</s> <strong>$50</strong></p>
                <p className="price-note">90% off for first 100 clients</p>
                <ul>
                  <li>60-90 minute consultation</li>
                  <li>Automation opportunities identified</li>
                  <li>AI Opportunities Snapshot</li>
                </ul>
                <a href="/#contact" onClick={scrollToContact} className="btn btn-primary">Book Now</a>
              </div>
              <div className="cta-price-card featured">
                <span className="pricing-badge">Most Popular</span>
                <h3>AI Deep Dive</h3>
                <p className="price">$2,500</p>
                <ul>
                  <li>4 hours of deep consultation</li>
                  <li>Written automation roadmap</li>
                  <li>90-minute training session</li>
                  <li>Execute yourself or engage us</li>
                </ul>
                <a href="/#contact" onClick={scrollToContact} className="btn btn-primary">Get Started</a>
              </div>
            </div>
            <p className="cta-subtext">
              Have questions? <a href="/#contact" onClick={scrollToContact}>Contact us</a> for a free initial conversation.
            </p>
          </div>
        </div>
      </section>

      {/* Related Services Section */}
      <section className="related-services">
        <div className="container">
          <div className="section-header">
            <h2>Explore Our Other Services</h2>
          </div>
          <div className="related-cards grid-3">
            <a href="/services/ai-consulting" className="related-card">
              <Icons.Search />
              <h3>AI Consulting</h3>
              <p>Strategic AI assessments and implementation roadmaps.</p>
            </a>
            <a href="/services/employee-training" className="related-card">
              <Icons.Users />
              <h3>Employee Training</h3>
              <p>Empower your team with hands-on AI skills training.</p>
            </a>
            <a href="/services/confidential-ai" className="related-card">
              <Icons.Lock />
              <h3>Confidential AI</h3>
              <p>On-premise and air-gapped AI for sensitive data.</p>
            </a>
          </div>
        </div>
      </section>
    </>
  )
}

export default WorkflowAutomation
