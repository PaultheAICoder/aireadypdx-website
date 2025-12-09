import { useState, useEffect } from 'react'
import { supabase } from '../../lib/supabase'
import './NewsletterPopup.css'

const POPUP_DELAY_MS = 30000 // 30 seconds
const DISMISSED_KEY = 'newsletter_popup_dismissed'

export default function NewsletterPopup() {
  const [isVisible, setIsVisible] = useState(false)
  const [email, setEmail] = useState('')
  const [status, setStatus] = useState('idle') // idle, submitting, success, error
  const [errorMessage, setErrorMessage] = useState('')

  useEffect(() => {
    // Don't show popup if Supabase isn't configured
    if (!supabase) {
      return
    }

    // Check if user has already dismissed the popup
    const dismissed = localStorage.getItem(DISMISSED_KEY)
    if (dismissed) {
      return
    }

    // Show popup after 30 seconds
    const timer = setTimeout(() => {
      setIsVisible(true)
    }, POPUP_DELAY_MS)

    return () => clearTimeout(timer)
  }, [])

  const handleDismiss = () => {
    setIsVisible(false)
    localStorage.setItem(DISMISSED_KEY, 'true')
  }

  const generateSubscriberHash = () => {
    // Generate a random hash for the subscriber
    const array = new Uint8Array(16)
    crypto.getRandomValues(array)
    return Array.from(array, byte => byte.toString(16).padStart(2, '0')).join('')
  }

  const handleSubmit = async (e) => {
    e.preventDefault()

    if (!email || !email.includes('@')) {
      setErrorMessage('Please enter a valid email address')
      setStatus('error')
      return
    }

    setStatus('submitting')
    setErrorMessage('')

    try {
      const subscriberHash = generateSubscriberHash()

      const { error } = await supabase
        .from('subscribers')
        .insert([
          {
            email: email.toLowerCase().trim(),
            subscriber_hash: subscriberHash,
            is_active: false, // Will be set to true after email verification
            source: 'website_popup'
          }
        ])

      if (error) {
        // Check if it's a duplicate email error
        if (error.code === '23505') {
          setErrorMessage('This email is already subscribed!')
        } else {
          throw error
        }
        setStatus('error')
        return
      }

      setStatus('success')
      // Auto-dismiss after showing success message
      setTimeout(() => {
        handleDismiss()
      }, 3000)

    } catch (err) {
      console.error('Newsletter signup error:', err)
      setErrorMessage('Something went wrong. Please try again.')
      setStatus('error')
    }
  }

  if (!isVisible) return null

  return (
    <div className="newsletter-overlay" onClick={handleDismiss}>
      <div className="newsletter-popup" onClick={(e) => e.stopPropagation()}>
        <button className="newsletter-close" onClick={handleDismiss} aria-label="Close">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <line x1="18" y1="6" x2="6" y2="18"></line>
            <line x1="6" y1="6" x2="18" y2="18"></line>
          </svg>
        </button>

        {status === 'success' ? (
          <div className="newsletter-success">
            <div className="newsletter-success-icon">
              <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
                <polyline points="22 4 12 14.01 9 11.01"></polyline>
              </svg>
            </div>
            <h3>You're on the list!</h3>
            <p>Check your inbox for a confirmation email to complete your subscription.</p>
          </div>
        ) : (
          <>
            <div className="newsletter-header">
              <h3>Stay ahead of the AI curve</h3>
              <p>Get practical AI insights for Portland-area businesses delivered to your inbox.</p>
            </div>

            <form onSubmit={handleSubmit} className="newsletter-form">
              <input
                type="email"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                disabled={status === 'submitting'}
                className={errorMessage ? 'error' : ''}
              />
              {errorMessage && <span className="newsletter-error">{errorMessage}</span>}
              <button type="submit" disabled={status === 'submitting'}>
                {status === 'submitting' ? 'Subscribing...' : 'Subscribe'}
              </button>
            </form>

            <p className="newsletter-privacy">
              No spam, ever. Unsubscribe anytime.
            </p>
          </>
        )}
      </div>
    </div>
  )
}
