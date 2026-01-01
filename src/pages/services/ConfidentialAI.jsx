import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { Icons } from '../../components/Icons/Icons'
import './AIConsulting.css'

function ConfidentialAI() {
  const navigate = useNavigate()

  // Set page title and meta description
  useEffect(() => {
    document.title = 'Confidential AI Portland | On-Premise AI for Sensitive Data | AI Ready PDX'

    // Update meta description
    let metaDesc = document.querySelector('meta[name="description"]')
    if (!metaDesc) {
      metaDesc = document.createElement('meta')
      metaDesc.name = 'description'
      document.head.appendChild(metaDesc)
    }
    metaDesc.content = 'On-premise and air-gapped AI solutions for Portland organizations with sensitive data. HIPAA-ready, legal-compliant AI that never leaves your building. 100% data sovereignty.'

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
      <section className="service-hero confidential-ai-hero">
        <div className="container">
          <div className="service-hero-content">
            <h1>Confidential AI: On-Premise Solutions for Sensitive Data</h1>
            <p className="service-hero-subtitle">
              For organizations with strict data privacy requirements, we deploy AI solutions where your data never leaves your building. Legal, medical, financial, and manufacturing clients trust AI Ready PDX for 100% data sovereignty.
            </p>
            <div className="service-hero-buttons">
              <a href="/#contact" onClick={scrollToContact} className="btn btn-primary btn-large">
                Request a Custom Quote
              </a>
              <a href="/#pricing" onClick={scrollToPricing} className="btn btn-secondary">
                View Pricing Options
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Deployment Options Section */}
      <section className="service-details">
        <div className="container">
          <div className="section-header">
            <h2>Deployment Options</h2>
            <p>We offer flexible deployment models to match your security requirements and infrastructure.</p>
          </div>
          <div className="service-cards grid-3">
            <div className="card service-card">
              <div className="service-icon">
                <Icons.Lock />
              </div>
              <h3>On-Premise AI Appliances</h3>
              <p>Dedicated AI hardware installed in your facility. Your data never leaves your network, with full control over processing and storage.</p>
              <ul className="service-features">
                <li>Hardware installed on-site</li>
                <li>Complete network isolation</li>
                <li>No external data transmission</li>
                <li>Full administrative control</li>
              </ul>
            </div>
            <div className="card service-card">
              <div className="service-icon">
                <Icons.Shield />
              </div>
              <h3>Private Cloud Inference</h3>
              <p>Dedicated cloud instances with private networking. Enterprise-grade security with the flexibility of cloud infrastructure.</p>
              <ul className="service-features">
                <li>Isolated cloud environment</li>
                <li>Private VPN connectivity</li>
                <li>SOC 2 compliant hosting</li>
                <li>Encrypted data at rest</li>
              </ul>
            </div>
            <div className="card service-card">
              <div className="service-icon">
                <Icons.Building />
              </div>
              <h3>Air-Gapped Solutions</h3>
              <p>Completely disconnected systems for maximum security. Ideal for classified or highly regulated environments.</p>
              <ul className="service-features">
                <li>Zero internet connectivity</li>
                <li>Physical security integration</li>
                <li>Offline model updates</li>
                <li>Audit-ready documentation</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Why On-Premise AI Section */}
      <section className="service-benefits">
        <div className="container">
          <div className="section-header">
            <h2>Why Choose On-Premise AI?</h2>
            <p>Over 60% of businesses cite data privacy as their top AI concern. Here is why on-premise deployment makes sense for sensitive operations.</p>
          </div>
          <div className="benefits-grid grid-2">
            <div className="benefit-item">
              <div className="benefit-icon">
                <Icons.Lock />
              </div>
              <div className="benefit-content">
                <h3>Your Data Never Leaves Your Building</h3>
                <p>With on-premise deployment, sensitive client data, proprietary information, and regulated records stay within your physical control. No cloud transmission means no exposure risk.</p>
              </div>
            </div>
            <div className="benefit-item">
              <div className="benefit-icon">
                <Icons.Briefcase />
              </div>
              <div className="benefit-content">
                <h3>Own Your Intelligence, Do Not Rent It</h3>
                <p>Build proprietary AI models trained on your data that become a competitive asset. Unlike cloud subscriptions, your investment creates lasting value you fully control.</p>
              </div>
            </div>
            <div className="benefit-item">
              <div className="benefit-icon">
                <Icons.BarChart />
              </div>
              <div className="benefit-content">
                <h3>Predictable Costs</h3>
                <p>Capital expenditure instead of unpredictable token-based billing. Know your AI costs upfront without surprise bills from heavy usage or scaling needs.</p>
              </div>
            </div>
            <div className="benefit-item">
              <div className="benefit-icon">
                <Icons.CheckCircle />
              </div>
              <div className="benefit-content">
                <h3>Regulatory Compliance Ready</h3>
                <p>Meet HIPAA, legal ethics rules, financial regulations, and industry-specific requirements. Full audit trails and data sovereignty documentation included.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Industries We Serve Section */}
      <section className="service-process">
        <div className="container">
          <div className="section-header">
            <h2>Industries We Serve</h2>
            <p>We help organizations across regulated industries deploy AI safely and compliantly.</p>
          </div>
          <div className="process-steps">
            <div className="process-step">
              <div className="step-number"><Icons.Clipboard /></div>
              <h3>Legal</h3>
              <p>Attorney-client privilege demands absolute data protection. Our solutions meet bar association ethics requirements while enabling document analysis and research automation.</p>
            </div>
            <div className="process-step">
              <div className="step-number"><Icons.Heart /></div>
              <h3>Medical</h3>
              <p>HIPAA compliance is non-negotiable. We deploy patient-safe AI for clinical documentation, scheduling, and administrative tasks with full audit trails.</p>
            </div>
            <div className="process-step">
              <div className="step-number"><Icons.Building /></div>
              <h3>Financial</h3>
              <p>Protect client financial data and meet SEC, FINRA, and banking regulations. On-premise AI for analysis, reporting, and client communications.</p>
            </div>
          </div>
          <div className="process-steps" style={{marginTop: '2rem'}}>
            <div className="process-step">
              <div className="step-number"><Icons.Factory /></div>
              <h3>Manufacturing</h3>
              <p>Protect proprietary processes, designs, and trade secrets. AI for quality control, predictive maintenance, and supply chain optimization without exposing IP.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Security Features Section */}
      <section className="service-details" style={{background: 'var(--color-background)'}}>
        <div className="container">
          <div className="section-header">
            <h2>Enterprise Security Built In</h2>
            <p>Every deployment includes comprehensive security features and documentation.</p>
          </div>
          <div className="benefits-grid grid-2" style={{alignItems: 'center'}}>
            <div>
              <picture>
                <source srcSet="/images/sections/secure-on-premise-ai-server.webp" type="image/webp" />
                <img
                  src="/images/sections/secure-on-premise-ai-server.png"
                  alt="Secure on-premise AI server for confidential business data"
                  style={{width: '100%', borderRadius: '12px', boxShadow: '0 8px 25px rgba(0,0,0,0.1)'}}
                  loading="lazy"
                  width="1408"
                  height="768"
                />
              </picture>
            </div>
            <div>
              <ul className="service-features" style={{fontSize: '1rem', marginTop: 0}}>
                <li>End-to-end encryption for all data</li>
                <li>Role-based access controls</li>
                <li>Complete audit logging</li>
                <li>Regular security updates and patching</li>
                <li>Incident response procedures</li>
                <li>Compliance documentation packages</li>
                <li>Staff training on secure AI usage</li>
                <li>Ongoing security monitoring options</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="service-cta">
        <div className="container">
          <div className="cta-content">
            <h2>Protect Your Data While Leveraging AI</h2>
            <p>Confidential AI solutions are custom-designed for your security requirements. Contact us for a consultation and custom quote tailored to your industry and infrastructure.</p>
            <div className="cta-pricing">
              <div className="cta-price-card featured">
                <span className="pricing-badge">Custom Solutions</span>
                <h3>Execution and Projects</h3>
                <p className="price">Custom Quote</p>
                <ul>
                  <li>On-premise AI appliance deployment</li>
                  <li>Private cloud configuration</li>
                  <li>Air-gapped system setup</li>
                  <li>Compliance documentation</li>
                  <li>Staff training included</li>
                </ul>
                <a href="/#contact" onClick={scrollToContact} className="btn btn-primary">Request Consultation</a>
              </div>
            </div>
            <p className="cta-subtext">
              Have questions? <a href="/#contact" onClick={scrollToContact}>Contact us</a> for a free initial conversation about your security requirements.
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
            <a href="/services/employee-training" className="related-card">
              <Icons.Users />
              <h3>Employee Training</h3>
              <p>Empower your team with hands-on AI skills training.</p>
            </a>
          </div>
        </div>
      </section>
    </>
  )
}

export default ConfidentialAI
