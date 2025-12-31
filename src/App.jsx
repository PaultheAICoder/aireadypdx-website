import { useState, useEffect } from 'react'
import './App.css'
import ChatWidget from './components/ChatWidget/ChatWidget'
import NewsletterPopup from './components/NewsletterPopup'

// Icons as simple SVG components
const Icons = {
  Award: () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="8" r="6"/>
      <path d="M15.477 12.89 17 22l-5-3-5 3 1.523-9.11"/>
    </svg>
  ),
  MapPin: () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"/>
      <circle cx="12" cy="10" r="3"/>
    </svg>
  ),
  Shield: () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
    </svg>
  ),
  Briefcase: () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <rect width="20" height="14" x="2" y="7" rx="2" ry="2"/>
      <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"/>
    </svg>
  ),
  CheckCircle: () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/>
      <polyline points="22 4 12 14.01 9 11.01"/>
    </svg>
  ),
  Check: () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
      <polyline points="20 6 9 17 4 12"/>
    </svg>
  ),
  MessageSquare: () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/>
    </svg>
  ),
  Menu: () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <line x1="4" x2="20" y1="12" y2="12"/>
      <line x1="4" x2="20" y1="6" y2="6"/>
      <line x1="4" x2="20" y1="18" y2="18"/>
    </svg>
  ),
  X: () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M18 6 6 18"/>
      <path d="m6 6 12 12"/>
    </svg>
  ),
  Search: () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="11" cy="11" r="8"/>
      <line x1="21" y1="21" x2="16.65" y2="16.65"/>
    </svg>
  ),
  Settings: () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 1 1.72v.51a2 2 0 0 1-1 1.74l-.15.09a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.39a2 2 0 0 0-.73-2.73l-.15-.08a2 2 0 0 1-1-1.74v-.5a2 2 0 0 1 1-1.74l.15-.09a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z"/>
      <circle cx="12" cy="12" r="3"/>
    </svg>
  ),
  Users: () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/>
      <circle cx="9" cy="7" r="4"/>
      <path d="M22 21v-2a4 4 0 0 0-3-3.87"/>
      <path d="M16 3.13a4 4 0 0 1 0 7.75"/>
    </svg>
  ),
  // Industry Icons
  Home: () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/>
      <polyline points="9 22 9 12 15 12 15 22"/>
    </svg>
  ),
  Coffee: () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M17 8h1a4 4 0 1 1 0 8h-1"/>
      <path d="M3 8h14v9a4 4 0 0 1-4 4H7a4 4 0 0 1-4-4Z"/>
      <line x1="6" x2="6" y1="2" y2="4"/>
      <line x1="10" x2="10" y1="2" y2="4"/>
      <line x1="14" x2="14" y1="2" y2="4"/>
    </svg>
  ),
  Clipboard: () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <rect width="8" height="4" x="8" y="2" rx="1" ry="1"/>
      <path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2"/>
      <path d="M12 11h4"/>
      <path d="M12 16h4"/>
      <path d="M8 11h.01"/>
      <path d="M8 16h.01"/>
    </svg>
  ),
  Building: () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <rect width="16" height="20" x="4" y="2" rx="2" ry="2"/>
      <path d="M9 22v-4h6v4"/>
      <path d="M8 6h.01"/>
      <path d="M16 6h.01"/>
      <path d="M12 6h.01"/>
      <path d="M12 10h.01"/>
      <path d="M12 14h.01"/>
      <path d="M16 10h.01"/>
      <path d="M16 14h.01"/>
      <path d="M8 10h.01"/>
      <path d="M8 14h.01"/>
    </svg>
  ),
  Heart: () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z"/>
    </svg>
  ),
  Factory: () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M2 20a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8l-7 5V8l-7 5V4a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2Z"/>
      <path d="M17 18h1"/>
      <path d="M12 18h1"/>
      <path d="M7 18h1"/>
    </svg>
  ),
  GraduationCap: () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M22 10v6M2 10l10-5 10 5-10 5z"/>
      <path d="M6 12v5c3 3 9 3 12 0v-5"/>
    </svg>
  ),
  // Service Category Icons
  Megaphone: () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="m3 11 18-5v12L3 13v-2z"/>
      <path d="M11.6 16.8a3 3 0 1 1-5.8-1.6"/>
    </svg>
  ),
  Cog: () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M12 20a8 8 0 1 0 0-16 8 8 0 0 0 0 16Z"/>
      <path d="M12 14a2 2 0 1 0 0-4 2 2 0 0 0 0 4Z"/>
      <path d="M12 2v2"/>
      <path d="M12 22v-2"/>
      <path d="m17 20.66-1-1.73"/>
      <path d="M11 10.27 7 3.34"/>
      <path d="m20.66 17-1.73-1"/>
      <path d="m3.34 7 1.73 1"/>
      <path d="M14 12h8"/>
      <path d="M2 12h2"/>
      <path d="m20.66 7-1.73 1"/>
      <path d="m3.34 17 1.73-1"/>
      <path d="m17 3.34-1 1.73"/>
      <path d="m11 13.73-4 6.93"/>
    </svg>
  ),
  BarChart: () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <line x1="12" x2="12" y1="20" y2="10"/>
      <line x1="18" x2="18" y1="20" y2="4"/>
      <line x1="6" x2="6" y1="20" y2="16"/>
    </svg>
  ),
  Lock: () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <rect width="18" height="11" x="3" y="11" rx="2" ry="2"/>
      <path d="M7 11V7a5 5 0 0 1 10 0v4"/>
    </svg>
  ),
}

function App() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
    freeSession: false
  })
  const [formSubmitted, setFormSubmitted] = useState(false)

  const scrollToSection = (e, sectionId) => {
    e.preventDefault()
    setMobileMenuOpen(false)
    const element = document.getElementById(sectionId)
    if (element) {
      const offset = 80 // Account for fixed navbar
      const elementPosition = element.getBoundingClientRect().top
      const offsetPosition = elementPosition + window.pageYOffset - offset
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      })
    }
  }

  const openNewsletterPopup = (e) => {
    e.preventDefault()
    window.dispatchEvent(new CustomEvent('openNewsletterPopup'))
  }

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }))
  }

  const [formError, setFormError] = useState(null)
  const [formLoading, setFormLoading] = useState(false)
  const [openFaq, setOpenFaq] = useState(null)
  const [showMobileCTA, setShowMobileCTA] = useState(false)

  // Show mobile CTA after scrolling past hero
  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY
      const heroHeight = document.getElementById('home')?.offsetHeight || 500
      setShowMobileCTA(scrollY > heroHeight)
    }
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const toggleFaq = (index) => {
    setOpenFaq(openFaq === index ? null : index)
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setFormError(null)
    setFormLoading(true)

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
      })

      if (response.ok) {
        setFormSubmitted(true)
        setFormData({
          name: '',
          email: '',
          message: '',
          freeSession: false
        })
      } else {
        const data = await response.json()
        setFormError(data.error || 'Something went wrong. Please try again.')
      }
    } catch (error) {
      console.error('Form submission error:', error)
      setFormError('Unable to send message. Please email us directly at hello@aireadypdx.com')
    } finally {
      setFormLoading(false)
    }
  }

  return (
    <div className="app">
      {/* Navigation */}
      <nav className="navbar">
        <div className="container">
          <a href="#home" onClick={(e) => scrollToSection(e, 'home')} className="nav-logo">
            <img src="/images/logos/logo-nav.png" alt="AI Ready PDX" className="nav-logo-img" />
          </a>
          <ul className={`nav-links ${mobileMenuOpen ? 'active' : ''}`}>
            <li><a href="#why-us" onClick={(e) => scrollToSection(e, 'why-us')}>Why Us</a></li>
            <li><a href="#services" onClick={(e) => scrollToSection(e, 'services')}>Services</a></li>
            <li><a href="#confidential-ai" onClick={(e) => scrollToSection(e, 'confidential-ai')}>Confidential AI</a></li>
            <li><a href="#pricing" onClick={(e) => scrollToSection(e, 'pricing')}>Pricing</a></li>
            <li><a href="#approach" onClick={(e) => scrollToSection(e, 'approach')}>Approach</a></li>
            <li><a href="#about" onClick={(e) => { scrollToSection(e, 'about'); setOpenFaq(0); }}>FAQ</a></li>
            <li><a href="#contact" onClick={(e) => scrollToSection(e, 'contact')} className="btn btn-primary nav-cta">Book a 15-Min Strategy Call</a></li>
          </ul>
          <div className="nav-toggle" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
            {mobileMenuOpen ? <Icons.X /> : <Icons.Menu />}
          </div>
        </div>
      </nav>

      {/* Mobile Sticky CTA */}
      <div className={`mobile-sticky-cta ${showMobileCTA ? 'visible' : ''}`}>
        <a href="#contact" onClick={(e) => scrollToSection(e, 'contact')} className="btn btn-primary">
          Book a 15-Min Strategy Call
        </a>
      </div>

      {/* Hero Section */}
      <section id="home" className="hero">
        <div className="container">
          <div className="hero-content">
            <h1>Portland&apos;s AI Consulting Partner for Small Business</h1>
            <p className="hero-subheading">
              AI has moved from bleeding edge to business essential. AI Ready PDX, powered by <a href="https://vital-enterprises.com" target="_blank" rel="noopener noreferrer">Vital Enterprises</a>' 30+ years of technology leadership, helps Portland-area businesses adopt AI confidently, practically, and securely.
            </p>
            <div className="hero-buttons">
              <a href="#contact" onClick={(e) => scrollToSection(e, 'contact')} className="btn btn-primary btn-large">
                Book Your AI Readiness Session — <s>$500</s> $50 <span className="btn-note">(First 100 Clients)*</span>
              </a>
              <p className="limited-time-offer">* Limited Time Offer</p>
            </div>
            <div className="hero-pillars">
              <div className="hero-pillar">
                <div className="pillar-icon">
                  <Icons.Award />
                </div>
                <span>30+ Years Tech Leadership</span>
              </div>
              <div className="hero-pillar">
                <div className="pillar-icon">
                  <Icons.MapPin />
                </div>
                <span>Local Portland Presence</span>
              </div>
              <div className="hero-pillar">
                <div className="pillar-icon">
                  <Icons.Shield />
                </div>
                <span>Privacy-First Options</span>
              </div>
            </div>
            <p className="hero-newsletter">
              <a href="#" onClick={openNewsletterPopup}>Subscribe to our newsletter</a> for practical AI insights.
            </p>
          </div>
        </div>
      </section>

      {/* Why Us Section */}
      <section id="why-us" className="why-us">
        <div className="container">
          <div className="section-header">
            <h2>Why work with AI Ready PDX?</h2>
          </div>
          <div className="grid-4">
            <div className="card why-us-card">
              <div className="icon">
                <Icons.Award />
              </div>
              <h3>Decades of tech leadership</h3>
              <p>
                AI Ready PDX is part of the <a href="https://vital-enterprises.com" target="_blank" rel="noopener noreferrer">Vital Enterprises</a> family. Our companies include <a href="https://vtmgroup.com" target="_blank" rel="noopener noreferrer">VTM</a>, which has led global technology consortiums for over 30 years, and <a href="https://novuslabs.com" target="_blank" rel="noopener noreferrer">Novus Labs</a>, which has spent 17 years working on complex consumer electronics products.
              </p>
            </div>
            <div className="card why-us-card">
              <div className="icon">
                <Icons.Briefcase />
              </div>
              <h3>We know tech and business</h3>
              <p>
                We understand how companies actually run: how work gets scheduled, how revenue flows, and where things get stuck. We translate AI into process improvements, not buzzwords.
              </p>
            </div>
            <div className="card why-us-card">
              <div className="icon">
                <Icons.CheckCircle />
              </div>
              <h3>We're already doing this</h3>
              <p>
                We've been working with AI-enabled products and tools for several years and are already helping organizations in the region design and implement AI strategies.
              </p>
            </div>
            <div className="card why-us-card">
              <div className="icon">
                <Icons.MessageSquare />
              </div>
              <h3>People and culture come first</h3>
              <p>
                We empower your team to do more and create more value with AI, not replace them. Our goal is expanding capabilities while respecting your culture.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Services & Industries Table Section */}
      <section id="services" className="services-table-section">
        <div className="container">
          <div className="section-header">
            <h2>How We Help Your Industry</h2>
            <p>AI Ready PDX delivers practical AI solutions tailored to your industry. From marketing to confidential AI deployments, we match the right solutions to your specific needs.</p>
          </div>
          <div className="services-table-wrapper">
            <table className="services-table">
              <thead>
                <tr>
                  <th className="service-header"></th>
                  <th>
                    <span className="industry-icon"><Icons.Home /></span>
                    <span>Field Services</span>
                    <small>HVAC, Plumbing, Landscaping</small>
                  </th>
                  <th>
                    <span className="industry-icon"><Icons.Coffee /></span>
                    <span>Retail & Hospitality</span>
                    <small>Coffee, Restaurants, Shops</small>
                  </th>
                  <th>
                    <span className="industry-icon"><Icons.Clipboard /></span>
                    <span>Professional</span>
                    <small>Dental, Legal, Accounting</small>
                  </th>
                  <th>
                    <span className="industry-icon"><Icons.GraduationCap /></span>
                    <span>Civic & Education</span>
                    <small>Schools, Churches,<br />Public Safety</small>
                  </th>
                  <th>
                    <span className="industry-icon"><Icons.Factory /></span>
                    <span>Manufacturing</span>
                    <small>Machinery, Fabrication, Assembly</small>
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr className="service-category">
                  <td colSpan="6">
                    <span className="category-icon"><Icons.Megaphone /></span>
                    Marketing & Sales
                  </td>
                </tr>
                <tr>
                  <td className="service-name">Web presence<br />(SEO, AEO, GEO)</td>
                  <td><span className="check"><Icons.Check /></span></td>
                  <td><span className="check"><Icons.Check /></span></td>
                  <td><span className="check"><Icons.Check /></span></td>
                  <td><span className="check"><Icons.Check /></span></td>
                  <td><span className="check"><Icons.Check /></span></td>
                </tr>
                <tr>
                  <td className="service-name">Content & collateral</td>
                  <td><span className="check"><Icons.Check /></span></td>
                  <td><span className="check"><Icons.Check /></span></td>
                  <td><span className="check"><Icons.Check /></span></td>
                  <td><span className="check"><Icons.Check /></span></td>
                  <td><span className="check"><Icons.Check /></span></td>
                </tr>
                <tr>
                  <td className="service-name">Outreach<br />(email, voice, social)</td>
                  <td><span className="check"><Icons.Check /></span></td>
                  <td><span className="check"><Icons.Check /></span></td>
                  <td><span className="check"><Icons.Check /></span></td>
                  <td><span className="check"><Icons.Check /></span></td>
                  <td></td>
                </tr>
                <tr className="service-category">
                  <td colSpan="6">
                    <span className="category-icon"><Icons.Cog /></span>
                    Operations
                  </td>
                </tr>
                <tr>
                  <td className="service-name">Scheduling & intake</td>
                  <td><span className="check"><Icons.Check /></span></td>
                  <td><span className="check"><Icons.Check /></span></td>
                  <td><span className="check"><Icons.Check /></span></td>
                  <td><span className="check"><Icons.Check /></span></td>
                  <td><span className="check"><Icons.Check /></span></td>
                </tr>
                <tr>
                  <td className="service-name">Inventory & supply chain</td>
                  <td><span className="check"><Icons.Check /></span></td>
                  <td><span className="check"><Icons.Check /></span></td>
                  <td></td>
                  <td></td>
                  <td><span className="check"><Icons.Check /></span></td>
                </tr>
                <tr>
                  <td className="service-name">Process automation</td>
                  <td><span className="check"><Icons.Check /></span></td>
                  <td><span className="check"><Icons.Check /></span></td>
                  <td><span className="check"><Icons.Check /></span></td>
                  <td></td>
                  <td><span className="check"><Icons.Check /></span></td>
                </tr>
                <tr className="service-category">
                  <td colSpan="6">
                    <span className="category-icon"><Icons.BarChart /></span>
                    Management
                  </td>
                </tr>
                <tr>
                  <td className="service-name">Dashboards & analytics</td>
                  <td><span className="check"><Icons.Check /></span></td>
                  <td><span className="check"><Icons.Check /></span></td>
                  <td><span className="check"><Icons.Check /></span></td>
                  <td><span className="check"><Icons.Check /></span></td>
                  <td><span className="check"><Icons.Check /></span></td>
                </tr>
                <tr>
                  <td className="service-name">Reporting & insights</td>
                  <td><span className="check"><Icons.Check /></span></td>
                  <td><span className="check"><Icons.Check /></span></td>
                  <td><span className="check"><Icons.Check /></span></td>
                  <td><span className="check"><Icons.Check /></span></td>
                  <td><span className="check"><Icons.Check /></span></td>
                </tr>
                <tr className="service-category confidential-category">
                  <td colSpan="6">
                    <span className="category-icon"><Icons.Lock /></span>
                    Confidential AI
                  </td>
                </tr>
                <tr>
                  <td className="service-name">On-premise deployment</td>
                  <td></td>
                  <td></td>
                  <td><span className="check"><Icons.Check /></span></td>
                  <td><span className="check"><Icons.Check /></span></td>
                  <td><span className="check"><Icons.Check /></span></td>
                </tr>
                <tr>
                  <td className="service-name">Private cloud inference</td>
                  <td></td>
                  <td></td>
                  <td><span className="check"><Icons.Check /></span></td>
                  <td><span className="check"><Icons.Check /></span></td>
                  <td><span className="check"><Icons.Check /></span></td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Confidential AI Section */}
      <section id="confidential-ai" className="confidential-ai">
        <div className="container">
          <div className="confidential-ai-content">
            <div className="confidential-ai-text">
              <h2>Need to Keep Your AI Off the Public Internet?</h2>
              <p>
                For organizations with sensitive data (legal, medical, financial, or proprietary), we offer on-premise and air-gapped solutions where your data never leaves your building. Ask us about Confidential AI options.
              </p>
              <a href="#contact" onClick={(e) => scrollToSection(e, 'contact')} className="btn btn-secondary">
                Learn About Confidential AI
              </a>
            </div>
            <div className="confidential-ai-icon">
              <img
                src="/images/sections/secure-on-premise-ai-server.png"
                alt="Secure on-premise AI server for confidential business data"
                className="confidential-ai-img"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Section - 4 Tiers */}
      <section id="pricing" className="pricing">
        <div className="container">
          <div className="section-header">
            <h2>Pricing</h2>
            <p>Clear, practical pricing with options for every stage of your AI journey.</p>
          </div>
          <div className="pricing-grid">
            <div className="pricing-card">
              <h3>AI Readiness Session</h3>
              <p className="price"><s>$500</s> <strong>$50</strong></p>
              <p className="price-note">90% off for first 100 clients*</p>
              <p className="limited-time-offer">* Limited Time Offer</p>
              <ul>
                <li>60-90 minute consultation</li>
                <li>Custom recommendations</li>
                <li>AI Opportunities Snapshot document</li>
              </ul>
              <a href="#contact" onClick={(e) => scrollToSection(e, 'contact')} className="btn btn-primary">Book Now</a>
            </div>
            <div className="pricing-card">
              <h3>AI Training & Quick Wins</h3>
              <p className="price">$1,500<span>/quarter</span></p>
              <ul>
                <li>90 minute training<br />(1 session or 2x 45-min)</li>
                <li>Website & web presence review</li>
                <li>One &ldquo;quick win&rdquo; deliverable per quarter</li>
                <li>Email support between sessions</li>
              </ul>
              <a href="#contact" onClick={(e) => scrollToSection(e, 'contact')} className="btn btn-secondary">See How Much Time You Can Save</a>
            </div>
            <div className="pricing-card featured">
              <span className="pricing-badge">Most Popular</span>
              <h3>AI Deep Dive</h3>
              <p className="price">$2,500<span> one-time</span></p>
              <ul>
                <li>2 hours: Deep dive into your business</li>
                <li>2 hours: Recommendations presentation</li>
                <li>Written roadmap/deliverable</li>
                <li>Includes 90-minute training session</li>
                <li>Execute yourself or engage us for projects</li>
              </ul>
              <a href="#contact" onClick={(e) => scrollToSection(e, 'contact')} className="btn btn-primary">Get Started</a>
            </div>
            <div className="pricing-card">
              <h3>Execution & Projects</h3>
              <p className="price">Custom</p>
              <p className="price-note">Variable based on scope</p>
              <ul>
                <li><strong>Marketing Services:</strong> content, posting, analytics, and branding</li>
                <li><strong>Custom Solutions:</strong> AI applications and integrations</li>
                <li><strong>AI Kickstart Sprint:</strong> Roadmap + first pilot</li>
                <li><strong>On-Premise AI:</strong> Air-gapped deployment</li>
              </ul>
              <a href="#contact" onClick={(e) => scrollToSection(e, 'contact')} className="btn btn-secondary">Let's Talk</a>
            </div>
          </div>
        </div>
      </section>

      {/* Approach Section - Simplified */}
      <section id="approach" className="approach">
        <div className="container">
          <div className="section-header">
            <h2>Our Approach</h2>
            <p>A clear path from assessment to results.</p>
          </div>
          <div className="approach-phases">
            <div className="approach-phase">
              <div className="phase-icon">
                <Icons.Search />
              </div>
              <h3>Assess</h3>
              <ul>
                <li>AI Readiness Assessment</li>
                <li>Website AI Audit (SEO, AEO, GEO)</li>
                <li>Opportunity identification</li>
                <li>Technology stack review</li>
                <li>Privacy & security evaluation</li>
              </ul>
            </div>
            <div className="approach-phase">
              <div className="phase-icon">
                <Icons.Users />
              </div>
              <h3>Train</h3>
              <ul>
                <li>Executive AI briefings</li>
                <li>Team training sessions</li>
                <li>Agentic coding tools</li>
                <li>Ongoing strategy support</li>
                <li>Quarterly State of AI updates</li>
              </ul>
            </div>
            <div className="approach-phase">
              <div className="phase-icon">
                <Icons.Settings />
              </div>
              <h3>Implement</h3>
              <ul>
                <li>Chatbots & voice agents</li>
                <li>Content automation tools</li>
                <li>Cold outreach systems</li>
                <li>Custom AI applications</li>
                <li>Secure on-premise AI</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section id="about" className="faq">
        <div className="container">
          <div className="section-header">
            <h2>Frequently Asked Questions</h2>
            <img
              src="/images/sections/ai-ready-pdx-team-portland.jpg"
              alt="AI Ready PDX consulting team helping Portland businesses with AI adoption"
              className="section-image about-image"
            />
          </div>
          <div className="faq-list">
            <div className={`faq-item ${openFaq === 0 ? 'open' : ''}`} onClick={() => toggleFaq(0)}>
              <h3>Who is AI Ready PDX?</h3>
              <div className="faq-answer">
                <p>AI Ready PDX is part of <a href="https://vital-enterprises.com" target="_blank" rel="noopener noreferrer">Vital Enterprises</a>, with 30+ years leading global technology consortiums and 17 years building complex products for leading brands. We help Portland-area businesses and nonprofits adopt AI practically—projects that ship in weeks, clear explanations of what AI can do, and a pace that respects your culture.</p>
              </div>
            </div>
            <div className={`faq-item ${openFaq === 1 ? 'open' : ''}`} onClick={() => toggleFaq(1)}>
              <h3>What kinds of businesses do you work with?</h3>
              <div className="faq-answer">
                <p>We work primarily with small to mid-sized businesses and nonprofits in the Portland metro and Pacific Northwest. Our clients include home service companies, coffee roasters, professional practices like dental and legal offices, small manufacturers, and community organizations.</p>
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
                <p>In our 60-90 minute session (just $50 for the first 100 clients*), we review how your organization runs today, identify 3-5 specific AI opportunities with rough ROI estimates, recommend whether on-premise, cloud, or simple SaaS tools make sense for you, and provide a written AI Opportunities Snapshot you can share with your team.</p>
                <p className="limited-time-offer">* Limited Time Offer</p>
              </div>
            </div>
            <div className={`faq-item ${openFaq === 4 ? 'open' : ''}`} onClick={() => toggleFaq(4)}>
              <h3>Is AI safe for sensitive data like legal or medical records?</h3>
              <div className="faq-answer">
                <p>It can be, with the right setup. We offer both on-premise solutions where data never leaves your network, and locked-down cloud environments with private networking. We also train your team on what's safe to use AI for and what should stay in your core systems.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="contact">
        <div className="container">
          <div className="section-header">
            <h2>Let's talk about AI in your business</h2>
            <p>Whether you're curious, cautious, or already experimenting, we'd be happy to talk. Tell us a bit about your organization and we'll follow up with next steps.</p>
            <img
              src="/images/sections/ai-strategy-consultation-portland.png"
              alt="AI strategy consultation session with Portland business owner"
              className="section-image contact-image"
            />
          </div>
          {formSubmitted ? (
            <div className="contact-form" style={{textAlign: 'center'}}>
              <h3 style={{color: 'var(--color-accent)', marginBottom: '1rem'}}>Thank you!</h3>
              <p>Thanks for reaching out. We'll review your message and get back to you within two business days.</p>
            </div>
          ) : (
            <form className="contact-form" onSubmit={handleSubmit}>
              <div className="form-group">
                <label htmlFor="name">Name *</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  required
                />
              </div>
              <div className="form-group">
                <label htmlFor="email">Email *</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  required
                />
              </div>
              <div className="form-group">
                <label htmlFor="message">What would you like AI to help with? *</label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  required
                  placeholder="Tell us about your business and what you're hoping AI can help with..."
                ></textarea>
              </div>
              <div className="form-group checkbox-group">
                <input
                  type="checkbox"
                  id="freeSession"
                  name="freeSession"
                  checked={formData.freeSession}
                  onChange={handleInputChange}
                />
                <label htmlFor="freeSession">I'm interested in a $50 AI Readiness Session (90% off for first 100 clients)*</label>
              </div>
              <p className="limited-time-offer">* Limited Time Offer</p>
              {formError && (
                <div className="form-error">
                  {formError}
                </div>
              )}
              <button type="submit" className="btn btn-primary form-submit" disabled={formLoading}>
                {formLoading ? 'Sending...' : 'Get Your Free AI Audit'}
              </button>
              <p className="form-microcopy">We'll review your message and respond within 2 business days with personalized recommendations.</p>
            </form>
          )}
        </div>
      </section>

      {/* Limited Time Offer Note */}
      <div className="limited-time-offer-section">
        <div className="container">
          <p className="limited-time-offer">* Limited Time Offer</p>
        </div>
      </div>

      {/* Footer */}
      <footer className="footer">
        <div className="container">
          <div className="footer-content">
            <div className="footer-brand">
              <img src="/images/logos/logo-full.png" alt="AI Ready PDX" className="footer-logo-img" />
              <p className="footer-tagline">Powered by <a href="https://vital-enterprises.com" target="_blank" rel="noopener noreferrer">Vital Enterprises</a></p>
            </div>
            <div className="footer-contact">
              <p><a href="mailto:hello@aireadypdx.com">hello@aireadypdx.com</a></p>
              <p>3855 SW 153rd Drive, Beaverton, OR</p>
              <p><a href="tel:+15036190505">(503) 619-0505</a></p>
              <p><a href="#" onClick={openNewsletterPopup} className="footer-newsletter-link">Subscribe to our newsletter</a></p>
            </div>
          </div>
          <div className="footer-bottom">
            <p>&copy; 2025 AI Ready PDX. All rights reserved.</p>
            <p className="build-info">v1.0.0 • Built {__BUILD_TIME__}</p>
          </div>
        </div>
      </footer>

      {/* Chat Widget */}
      <ChatWidget />

      {/* Newsletter Popup */}
      <NewsletterPopup />
    </div>
  )
}

export default App
