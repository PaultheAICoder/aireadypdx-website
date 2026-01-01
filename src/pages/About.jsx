import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { Icons } from '../components/Icons/Icons'
import './About.css'

function About() {
  const navigate = useNavigate()
  const [openFaq, setOpenFaq] = useState(null)

  // Set page title and meta description
  useEffect(() => {
    document.title = 'About AI Ready PDX | Portland AI Consulting Firm | Vital Enterprises'

    // Update meta description
    let metaDesc = document.querySelector('meta[name="description"]')
    if (!metaDesc) {
      metaDesc = document.createElement('meta')
      metaDesc.name = 'description'
      document.head.appendChild(metaDesc)
    }
    metaDesc.content = 'Learn about AI Ready PDX, a Portland AI consulting firm backed by Vital Enterprises with 30+ years of technology leadership. We help local businesses adopt AI practically.'

    return () => {
      // Reset to default on unmount
      document.title = 'AI Ready PDX | AI Consulting for Portland Businesses'
    }
  }, [])

  const toggleFaq = (index) => {
    setOpenFaq(openFaq === index ? null : index)
  }

  const scrollToContact = (e) => {
    e.preventDefault()
    navigate('/#contact')
  }

  return (
    <>
      {/* Hero Section */}
      <section className="about-hero">
        <div className="container">
          <div className="about-hero-content">
            <div className="about-hero-text">
              <h1>About AI Ready PDX</h1>
              <p className="about-hero-subtitle">
                We are a Portland-based AI consulting firm helping local businesses and nonprofits adopt artificial intelligence practically. Our approach focuses on clear explanations, projects that ship in weeks, and respect for your organizational culture.
              </p>
            </div>
            <div className="about-hero-image">
              <picture>
                <source srcSet="/images/sections/ai-ready-pdx-team-portland.webp" type="image/webp" />
                <img
                  src="/images/sections/ai-ready-pdx-team-portland.jpg"
                  alt="AI Ready PDX consulting team helping Portland businesses with AI adoption"
                  width="1408"
                  height="768"
                />
              </picture>
            </div>
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="about-story">
        <div className="container">
          <div className="section-header">
            <h2>Our Story</h2>
          </div>
          <div className="story-content">
            <p>
              AI Ready PDX is part of <a href="https://vital-enterprises.com" target="_blank" rel="noopener noreferrer">Vital Enterprises</a>, a company with <strong>30+ years of proven technology leadership</strong>. We have served <strong>50+ enterprise clients</strong> across the technology sector through our family of companies.
            </p>
            <p>
              Our portfolio includes <a href="https://vtmgroup.com" target="_blank" rel="noopener noreferrer">VTM Group</a>, which has led global technology consortiums for over 30 years, and <a href="https://novuslabs.com" target="_blank" rel="noopener noreferrer">Novus Labs</a>, with 17 years of experience building complex consumer electronics products for leading brands including Amazon, Google, and Microsoft.
            </p>
            <p>
              With this foundation of enterprise-level expertise, we created AI Ready PDX to bring the same caliber of technology leadership to Portland-area businesses and nonprofits. We recognized that small and mid-sized organizations deserve access to practical AI guidance without the complexity and cost typically associated with enterprise consulting.
            </p>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="about-values">
        <div className="container">
          <div className="section-header">
            <h2>Our Values</h2>
            <p>The principles that guide how we work with Portland businesses.</p>
          </div>
          <div className="values-grid grid-3">
            <div className="card value-card">
              <div className="value-icon">
                <Icons.Users />
              </div>
              <h3>People-First</h3>
              <p>
                AI augments human work, creating more value from your existing staff. Our goal is expanding your team&apos;s capabilities, not replacing them. Clients typically report saving 10+ hours per week on routine tasks while keeping their team engaged and productive.
              </p>
            </div>
            <div className="card value-card">
              <div className="value-icon">
                <Icons.Briefcase />
              </div>
              <h3>Practical</h3>
              <p>
                We translate AI into practical process improvements, not buzzwords. AI can reduce administrative overhead by up to 40% for most small businesses. We understand how companies actually run: scheduling, revenue flow, and operational bottlenecks.
              </p>
            </div>
            <div className="card value-card">
              <div className="value-icon">
                <Icons.Lock />
              </div>
              <h3>Privacy-Focused</h3>
              <p>
                Your data never leaves your building with our on-premise solutions. For organizations with strict compliance requirements, we deploy local AI appliances on your network. You get the same capabilities as cloud AI without the privacy concerns.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="about-faq">
        <div className="container">
          <div className="section-header">
            <h2>Frequently Asked Questions</h2>
          </div>
          <div className="faq-list">
            <div className={`faq-item ${openFaq === 0 ? 'open' : ''}`} onClick={() => toggleFaq(0)}>
              <h3>Who is AI Ready PDX?</h3>
              <div className="faq-answer">
                <p>AI Ready PDX is part of <a href="https://vital-enterprises.com" target="_blank" rel="noopener noreferrer">Vital Enterprises</a>, with <strong>30+ years leading global technology consortiums</strong> and <strong>17 years building complex products</strong> for leading brands including Amazon, Google, and Microsoft. We&apos;ve served <strong>50+ enterprise clients</strong> and now help Portland-area businesses and nonprofits adopt AI practically - projects that ship in weeks, clear explanations of what AI can do, and a pace that respects your culture.</p>
              </div>
            </div>
            <div className={`faq-item ${openFaq === 1 ? 'open' : ''}`} onClick={() => toggleFaq(1)}>
              <h3>What kinds of businesses do you work with?</h3>
              <div className="faq-answer">
                <p>We work primarily with <strong>small to mid-sized businesses (5-100 employees)</strong> and nonprofits across the Portland metro area, including Beaverton, Lake Oswego, Tigard, Hillsboro, and surrounding communities. Our clients include home service companies, coffee roasters in the Pearl District, professional practices like dental and legal offices in Downtown Portland, and small manufacturers throughout the region. <strong>Over 80% of our clients</strong> are first-time AI adopters.</p>
              </div>
            </div>
            <div className={`faq-item ${openFaq === 2 ? 'open' : ''}`} onClick={() => toggleFaq(2)}>
              <h3>Do you offer on-premise AI solutions?</h3>
              <div className="faq-answer">
                <p>Yes. For organizations with strict data privacy or compliance requirements, we can deploy local AI appliances on your network. Your data never leaves your building, and you get the same capabilities as cloud AI without the privacy concerns.</p>
              </div>
            </div>
            <div className={`faq-item ${openFaq === 3 ? 'open' : ''}`} onClick={() => toggleFaq(3)}>
              <h3>What does an AI Readiness Session cover?</h3>
              <div className="faq-answer">
                <p>In our <strong>60-90 minute session</strong> (just $50 for the first 100 clients*), we review how your organization runs today, identify <strong>3-5 specific AI opportunities</strong> with rough ROI estimates, recommend whether on-premise, cloud, or simple SaaS tools make sense for you, and provide a written AI Opportunities Snapshot you can share with your team. On average, clients identify <strong>$10,000-50,000 in annual savings opportunities</strong> during their first session.</p>
                <p className="limited-time-offer">* Limited Time Offer</p>
              </div>
            </div>
            <div className={`faq-item ${openFaq === 4 ? 'open' : ''}`} onClick={() => toggleFaq(4)}>
              <h3>Is AI safe for sensitive data like legal or medical records?</h3>
              <div className="faq-answer">
                <p>It can be, with the right setup. We offer both on-premise solutions where data never leaves your network, and locked-down cloud environments with private networking. We also train your team on what&apos;s safe to use AI for and what should stay in your core systems.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="about-cta">
        <div className="container">
          <div className="cta-content">
            <h2>Ready to Explore AI for Your Business?</h2>
            <p>Start with our AI Readiness Session - a 60-90 minute consultation where we identify specific AI opportunities for your organization.</p>
            <a href="/#contact" onClick={scrollToContact} className="btn btn-primary btn-large">
              Book Your AI Readiness Session - $50
            </a>
          </div>
        </div>
      </section>
    </>
  )
}

export default About
