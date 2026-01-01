import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { Icons } from '../../components/Icons/Icons'
import Breadcrumb from '../../components/Breadcrumb/Breadcrumb'
import './AIConsulting.css'

function AIConsulting() {
  const navigate = useNavigate()

  // Set page title and meta description
  useEffect(() => {
    document.title = 'AI Consulting Portland | AI Strategy for Small Business | AI Ready PDX'

    // Update meta description
    let metaDesc = document.querySelector('meta[name="description"]')
    if (!metaDesc) {
      metaDesc = document.createElement('meta')
      metaDesc.name = 'description'
      document.head.appendChild(metaDesc)
    }
    metaDesc.content = 'Expert AI consulting services for Portland businesses. Get AI readiness assessments, strategy roadmaps, and implementation guidance from AI Ready PDX. 30+ years tech leadership.'

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

  const breadcrumbItems = [
    { label: 'Home', path: '/' },
    { label: 'Services', path: '/#services' },
    { label: 'AI Consulting', path: null }
  ]

  return (
    <>
      <Breadcrumb items={breadcrumbItems} />
      {/* Hero Section */}
      <section className="service-hero ai-consulting-hero">
        <div className="container">
          <div className="service-hero-content">
            <h1>AI Consulting and Strategy for Portland Businesses</h1>
            <p className="service-hero-subtitle">
              Transform your business with practical AI solutions. AI Ready PDX helps Portland-area companies assess their AI readiness, develop strategic roadmaps, and identify opportunities for growth.
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

      {/* What We Offer Section */}
      <section className="service-details">
        <div className="container">
          <div className="section-header">
            <h2>Our AI Consulting Services</h2>
            <p>We help Portland businesses navigate the AI landscape with clear assessments, actionable strategies, and hands-on guidance.</p>
          </div>
          <div className="service-cards grid-3">
            <div className="card service-card">
              <div className="service-icon">
                <Icons.Search />
              </div>
              <h3>AI Readiness Assessment</h3>
              <p>Comprehensive evaluation of your current operations, technology stack, and team capabilities to determine where AI can make the biggest impact.</p>
              <ul className="service-features">
                <li>60-90 minute deep-dive consultation</li>
                <li>3-5 specific AI opportunities identified</li>
                <li>ROI estimates for each opportunity</li>
                <li>Written AI Opportunities Snapshot</li>
              </ul>
            </div>
            <div className="card service-card">
              <div className="service-icon">
                <Icons.Clipboard />
              </div>
              <h3>Strategy and Roadmaps</h3>
              <p>Custom AI implementation plans aligned with your business goals, budget, and timeline. Clear milestones with measurable outcomes.</p>
              <ul className="service-features">
                <li>Prioritized implementation plan</li>
                <li>Technology recommendations</li>
                <li>Budget and resource planning</li>
                <li>Risk assessment and mitigation</li>
              </ul>
            </div>
            <div className="card service-card">
              <div className="service-icon">
                <Icons.BarChart />
              </div>
              <h3>Opportunity Identification</h3>
              <p>Discover hidden efficiency gains and competitive advantages in your business processes through AI analysis.</p>
              <ul className="service-features">
                <li>Process efficiency analysis</li>
                <li>Automation potential mapping</li>
                <li>Competitive landscape review</li>
                <li>Quick win identification</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Why AI Consulting Matters Section */}
      <section className="service-benefits">
        <div className="container">
          <div className="section-header">
            <h2>Why AI Consulting Matters for Your Business</h2>
            <p>The businesses that thrive tomorrow are making AI decisions today. Here is why strategic AI consulting is essential.</p>
          </div>
          <div className="benefits-grid grid-2">
            <div className="benefit-item">
              <div className="benefit-icon">
                <Icons.Award />
              </div>
              <div className="benefit-content">
                <h3>30+ Years of Technology Leadership</h3>
                <p>AI Ready PDX is powered by Vital Enterprises, with three decades of enterprise technology experience. We have served 50+ major clients including work with Amazon, Google, and Microsoft through our Novus Labs division.</p>
              </div>
            </div>
            <div className="benefit-item">
              <div className="benefit-icon">
                <Icons.Briefcase />
              </div>
              <div className="benefit-content">
                <h3>Business-First Approach</h3>
                <p>We translate AI into practical process improvements, not buzzwords. AI can reduce administrative overhead by up to 40% for most small businesses. We focus on real ROI, not hype.</p>
              </div>
            </div>
            <div className="benefit-item">
              <div className="benefit-icon">
                <Icons.CheckCircle />
              </div>
              <div className="benefit-content">
                <h3>Proven Track Record</h3>
                <p>We have deployed AI solutions for dozens of Portland-area organizations. According to industry research, 73% of businesses plan to increase AI investment in 2025. We help you invest wisely.</p>
              </div>
            </div>
            <div className="benefit-item">
              <div className="benefit-icon">
                <Icons.MessageSquare />
              </div>
              <div className="benefit-content">
                <h3>Empower, Not Replace</h3>
                <p>Our goal is expanding your team capabilities, not replacing them. Clients typically report saving 10+ hours per week on routine tasks while keeping their team engaged and productive.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Process Section */}
      <section className="service-process">
        <div className="container">
          <div className="section-header">
            <h2>Our AI Consulting Process</h2>
            <p>A structured approach that takes you from AI curiosity to practical implementation in as little as 4-6 weeks.</p>
          </div>
          <div className="process-steps">
            <div className="process-step">
              <div className="step-number">1</div>
              <h3>Assess</h3>
              <p>We start with a comprehensive AI Readiness Assessment to understand your business, identify opportunities, and evaluate your technology stack.</p>
            </div>
            <div className="process-step">
              <div className="step-number">2</div>
              <h3>Strategize</h3>
              <p>Based on our assessment, we develop a custom roadmap with prioritized initiatives, resource requirements, and clear milestones.</p>
            </div>
            <div className="process-step">
              <div className="step-number">3</div>
              <h3>Implement</h3>
              <p>We guide you through implementation with training, ongoing support, and hands-on assistance to ensure successful AI adoption.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing CTA Section */}
      <section className="service-cta">
        <div className="container">
          <div className="cta-content">
            <h2>Ready to Get Started?</h2>
            <p>Begin with our AI Readiness Session - just $50 for a limited time (90% off the regular $500 price). Get a comprehensive assessment and actionable recommendations in a single session.</p>
            <div className="cta-pricing">
              <div className="cta-price-card">
                <h3>AI Readiness Session</h3>
                <p className="price"><s>$500</s> <strong>$50</strong></p>
                <p className="price-note">90% off for first 100 clients</p>
                <ul>
                  <li>60-90 minute consultation</li>
                  <li>Custom recommendations</li>
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
                  <li>Written roadmap deliverable</li>
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
            <a href="/services/workflow-automation" className="related-card">
              <Icons.Cog />
              <h3>Workflow Automation</h3>
              <p>Streamline operations with intelligent automation solutions.</p>
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

export default AIConsulting
