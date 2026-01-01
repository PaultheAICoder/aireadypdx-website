import { useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import { Icons } from '../Icons/Icons'
import './Navigation.css'

function Navigation() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const location = useLocation()
  const navigate = useNavigate()

  const scrollToSection = (e, sectionId) => {
    e.preventDefault()
    setMobileMenuOpen(false)

    if (location.pathname === '/') {
      // Same-page smooth scroll
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
    } else {
      // Cross-page navigation
      navigate(`/#${sectionId}`)
    }
  }

  // Special handler for FAQ link that also opens the first FAQ item
  const handleFaqClick = (e) => {
    e.preventDefault()
    setMobileMenuOpen(false)

    if (location.pathname === '/') {
      // Same-page smooth scroll and dispatch event to open FAQ
      const element = document.getElementById('about')
      if (element) {
        const offset = 80
        const elementPosition = element.getBoundingClientRect().top
        const offsetPosition = elementPosition + window.pageYOffset - offset
        window.scrollTo({
          top: offsetPosition,
          behavior: 'smooth'
        })
        // Dispatch event to open first FAQ item
        window.dispatchEvent(new CustomEvent('openFaq', { detail: { index: 0 } }))
      }
    } else {
      // Cross-page navigation with hash
      navigate('/#about')
    }
  }

  return (
    <nav className="navbar">
      <div className="container">
        <a href="#home" onClick={(e) => scrollToSection(e, 'home')} className="nav-logo">
          <picture>
            <source srcSet="/images/logos/logo-nav.webp" type="image/webp" />
            <img
              src="/images/logos/logo-nav.png"
              alt="AI Ready PDX"
              className="nav-logo-img"
              width="200"
              height="109"
            />
          </picture>
        </a>
        <ul className={`nav-links ${mobileMenuOpen ? 'active' : ''}`}>
          <li><a href="#why-us" onClick={(e) => scrollToSection(e, 'why-us')}>Why Us</a></li>
          <li><a href="#services" onClick={(e) => scrollToSection(e, 'services')}>Services</a></li>
          <li><a href="#confidential-ai" onClick={(e) => scrollToSection(e, 'confidential-ai')}>Confidential AI</a></li>
          <li><a href="#pricing" onClick={(e) => scrollToSection(e, 'pricing')}>Pricing</a></li>
          <li><a href="#approach" onClick={(e) => scrollToSection(e, 'approach')}>Approach</a></li>
          <li><a href="#about" onClick={handleFaqClick}>FAQ</a></li>
          <li><a href="#contact" onClick={(e) => scrollToSection(e, 'contact')} className="btn btn-primary nav-cta">Book a 15-Min Strategy Call</a></li>
        </ul>
        <div className="nav-toggle" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
          {mobileMenuOpen ? <Icons.X /> : <Icons.Menu />}
        </div>
      </div>
    </nav>
  )
}

export default Navigation
