import { trackEmailClick, trackPhoneClick } from '../../utils/analytics'
import './Footer.css'

function Footer() {
  const openNewsletterPopup = (e) => {
    e.preventDefault()
    window.dispatchEvent(new CustomEvent('openNewsletterPopup'))
  }

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-brand">
            <picture>
              <source srcSet="/images/logos/logo-full.webp" type="image/webp" />
              <img
                src="/images/logos/logo-full.png"
                alt="AI Ready PDX"
                className="footer-logo-img"
                loading="lazy"
                width="300"
                height="163"
              />
            </picture>
            <p className="footer-tagline">Powered by <a href="https://vital-enterprises.com" target="_blank" rel="noopener noreferrer">Vital Enterprises</a></p>
          </div>
          <div className="footer-contact">
            <p><a href="mailto:hello@aireadypdx.com" onClick={() => trackEmailClick('hello@aireadypdx.com')}>hello@aireadypdx.com</a></p>
            <p>3855 SW 153rd Drive, Beaverton, OR</p>
            <p><a href="tel:+15036190505" onClick={() => trackPhoneClick('+15036190505')}>(503) 619-0505</a></p>
            <p><a href="#" onClick={openNewsletterPopup} className="footer-newsletter-link">Subscribe to our newsletter</a></p>
          </div>
        </div>
        <div className="footer-bottom">
          <p>&copy; 2025 AI Ready PDX. All rights reserved.</p>
          <p className="build-info">v1.0.0 • Built {__BUILD_TIME__}</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
