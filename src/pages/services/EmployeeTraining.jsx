import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { Icons } from '../../components/Icons/Icons'
import './AIConsulting.css'

function EmployeeTraining() {
  const navigate = useNavigate()

  // Set page title and meta description
  useEffect(() => {
    document.title = 'AI Training Portland | Executive AI Briefings & Team Training | AI Ready PDX'

    // Update meta description
    let metaDesc = document.querySelector('meta[name="description"]')
    if (!metaDesc) {
      metaDesc = document.createElement('meta')
      metaDesc.name = 'description'
      document.head.appendChild(metaDesc)
    }
    metaDesc.content = 'AI training for Portland businesses. Executive briefings, team training sessions, and agentic coding tools from AI Ready PDX. Empower your team with practical AI skills.'

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
      <section className="service-hero employee-training-hero">
        <div className="container">
          <div className="service-hero-content">
            <h1>AI Training and Team Enablement for Portland Businesses</h1>
            <p className="service-hero-subtitle">
              Empower your team with practical AI skills. AI Ready PDX offers executive briefings, hands-on training, and ongoing support to help Portland-area organizations adopt AI confidently and safely.
            </p>
            <div className="service-hero-buttons">
              <a href="/#contact" onClick={scrollToContact} className="btn btn-primary btn-large">
                Book Your AI Readiness Session - $50
              </a>
              <a href="/#pricing" onClick={scrollToPricing} className="btn btn-secondary">
                View Training Packages
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Training Services Section */}
      <section className="service-details">
        <div className="container">
          <div className="section-header">
            <h2>Our AI Training Programs</h2>
            <p>We help Portland businesses build AI confidence through hands-on training tailored to your team&apos;s roles and experience levels.</p>
          </div>
          <div className="service-cards grid-3">
            <div className="card service-card">
              <div className="service-icon">
                <Icons.Award />
              </div>
              <h3>Executive AI Briefings</h3>
              <p>Strategic overviews for leadership teams covering AI opportunities, risks, and decision frameworks for your industry.</p>
              <ul className="service-features">
                <li>90-minute executive session</li>
                <li>Industry-specific AI landscape</li>
                <li>Investment and ROI guidance</li>
                <li>Competitive positioning insights</li>
              </ul>
            </div>
            <div className="card service-card">
              <div className="service-icon">
                <Icons.Users />
              </div>
              <h3>Team Training Sessions</h3>
              <p>Practical, hands-on AI training for your staff, covering tools they can use immediately in their daily work.</p>
              <ul className="service-features">
                <li>Role-based curriculum</li>
                <li>Live tool demonstrations</li>
                <li>Practice exercises</li>
                <li>Recorded sessions for reference</li>
              </ul>
            </div>
            <div className="card service-card">
              <div className="service-icon">
                <Icons.Settings />
              </div>
              <h3>Agentic Coding Tools</h3>
              <p>Training for developers and technical staff on using AI-powered coding assistants and automation tools safely.</p>
              <ul className="service-features">
                <li>Claude, Copilot, and Cursor training</li>
                <li>Code review best practices</li>
                <li>Security and privacy guidelines</li>
                <li>Productivity optimization</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Training Philosophy Section */}
      <section className="service-benefits">
        <div className="container">
          <div className="section-header">
            <h2>Our Training Philosophy</h2>
            <p>People and culture come first. We design training that respects your team&apos;s experience and builds real confidence.</p>
          </div>
          <div className="benefits-grid grid-2">
            <div className="benefit-item">
              <div className="benefit-icon">
                <Icons.Users />
              </div>
              <div className="benefit-content">
                <h3>People-First Approach</h3>
                <p>AI augments your team&apos;s capabilities - it does not replace them. Our training focuses on expanding what your people can accomplish, building confidence rather than fear.</p>
              </div>
            </div>
            <div className="benefit-item">
              <div className="benefit-icon">
                <Icons.CheckCircle />
              </div>
              <div className="benefit-content">
                <h3>Practical, Not Theoretical</h3>
                <p>Every session includes hands-on exercises with tools your team will actually use. Participants leave with skills they can apply the same day, not just concepts to think about.</p>
              </div>
            </div>
            <div className="benefit-item">
              <div className="benefit-icon">
                <Icons.Shield />
              </div>
              <div className="benefit-content">
                <h3>Safety and Privacy First</h3>
                <p>We train your team on what is safe to share with AI tools and what should stay in your core systems. Clear guidelines prevent costly mistakes.</p>
              </div>
            </div>
            <div className="benefit-item">
              <div className="benefit-icon">
                <Icons.MessageSquare />
              </div>
              <div className="benefit-content">
                <h3>Ongoing Support</h3>
                <p>Training does not end when the session is over. Quarterly State of AI updates keep your team current, and email support answers questions as they arise.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Delivery Formats Section */}
      <section className="service-process">
        <div className="container">
          <div className="section-header">
            <h2>Flexible Training Delivery</h2>
            <p>We adapt our training to fit your schedule, team size, and learning preferences.</p>
          </div>
          <div className="process-steps">
            <div className="process-step">
              <div className="step-number">1</div>
              <h3>On-Site Training</h3>
              <p>We come to your Portland-area location for hands-on sessions. Best for teams that benefit from in-person interaction and immediate Q&amp;A.</p>
            </div>
            <div className="process-step">
              <div className="step-number">2</div>
              <h3>Remote Sessions</h3>
              <p>Live video training for distributed teams or organizations outside the metro area. Full interactivity with screen sharing and breakout rooms.</p>
            </div>
            <div className="process-step">
              <div className="step-number">3</div>
              <h3>Recorded Library</h3>
              <p>All training sessions are recorded for future reference. New team members can get up to speed, and existing staff can refresh their knowledge anytime.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing CTA Section */}
      <section className="service-cta">
        <div className="container">
          <div className="cta-content">
            <h2>Ready to Train Your Team on AI?</h2>
            <p>Begin with our AI Readiness Session - just $50 for a limited time (90% off the regular $500 price). We will assess your team&apos;s current skills and recommend the right training approach.</p>
            <div className="cta-pricing">
              <div className="cta-price-card">
                <h3>AI Readiness Session</h3>
                <p className="price"><s>$500</s> <strong>$50</strong></p>
                <p className="price-note">90% off for first 100 clients</p>
                <ul>
                  <li>60-90 minute consultation</li>
                  <li>Team skill assessment</li>
                  <li>Training recommendations</li>
                </ul>
                <a href="/#contact" onClick={scrollToContact} className="btn btn-primary">Book Now</a>
              </div>
              <div className="cta-price-card featured">
                <span className="pricing-badge">Best Value</span>
                <h3>AI Training and Quick Wins</h3>
                <p className="price">$1,500<span>/quarter</span></p>
                <ul>
                  <li>90 minutes of training per quarter</li>
                  <li>Website and web presence review</li>
                  <li>One quick win deliverable</li>
                  <li>Email support between sessions</li>
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
            <a href="/services/workflow-automation" className="related-card">
              <Icons.Cog />
              <h3>Workflow Automation</h3>
              <p>Streamline operations with intelligent automation solutions.</p>
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

export default EmployeeTraining
