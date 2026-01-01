import { useState, useEffect } from 'react'
import { Outlet, useLocation, useNavigate } from 'react-router-dom'
import Navigation from '../Navigation/Navigation'
import Footer from '../Footer/Footer'
import ChatWidget from '../ChatWidget/ChatWidget'
import NewsletterPopup from '../NewsletterPopup'
import './Layout.css'

function Layout() {
  const [showMobileCTA, setShowMobileCTA] = useState(false)
  const location = useLocation()
  const navigate = useNavigate()

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

  const handleCTAClick = (e) => {
    e.preventDefault()
    if (location.pathname === '/') {
      // Same-page scroll
      const element = document.getElementById('contact')
      if (element) {
        const offset = 80
        const elementPosition = element.getBoundingClientRect().top
        const offsetPosition = elementPosition + window.pageYOffset - offset
        window.scrollTo({ top: offsetPosition, behavior: 'smooth' })
      }
    } else {
      navigate('/#contact')
    }
  }

  return (
    <div className="app">
      <Navigation />
      <div className={`mobile-sticky-cta ${showMobileCTA ? 'visible' : ''}`}>
        <a href="#contact" onClick={handleCTAClick} className="btn btn-primary">
          Book a 15-Min Strategy Call
        </a>
      </div>
      <Outlet />
      <Footer />
      <ChatWidget />
      <NewsletterPopup />
    </div>
  )
}

export default Layout
