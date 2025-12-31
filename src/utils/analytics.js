/**
 * Analytics utility functions for Google Tag Manager dataLayer
 *
 * SETUP REQUIRED:
 * 1. Create GTM container at https://tagmanager.google.com
 * 2. Replace GTM-XXXXXXX in index.html with your container ID
 * 3. Create GA4 property at https://analytics.google.com
 * 4. Add GA4 Configuration tag in GTM with your Measurement ID (G-XXXXXXX)
 */

// Ensure dataLayer exists
const getDataLayer = () => {
  if (typeof window !== 'undefined') {
    window.dataLayer = window.dataLayer || [];
    return window.dataLayer;
  }
  return [];
};

/**
 * Track page view (for SPA navigation)
 * @param {string} pagePath - The page path (e.g., '/', '/about')
 * @param {string} pageTitle - The page title
 */
export const trackPageView = (pagePath, pageTitle) => {
  getDataLayer().push({
    event: 'page_view',
    page_path: pagePath,
    page_title: pageTitle
  });
};

/**
 * Track form submission
 * @param {string} formName - Name of the form (e.g., 'contact_form')
 * @param {boolean} requestedSession - Whether user requested AI Readiness Session
 */
export const trackFormSubmission = (formName, requestedSession = false) => {
  getDataLayer().push({
    event: 'form_submission',
    form_name: formName,
    requested_ai_session: requestedSession
  });
};

/**
 * Track click-to-call
 * @param {string} phoneNumber - The phone number clicked
 */
export const trackPhoneClick = (phoneNumber) => {
  getDataLayer().push({
    event: 'phone_click',
    phone_number: phoneNumber
  });
};

/**
 * Track email click
 * @param {string} emailAddress - The email address clicked
 */
export const trackEmailClick = (emailAddress) => {
  getDataLayer().push({
    event: 'email_click',
    email_address: emailAddress
  });
};

/**
 * Track CTA button click
 * @param {string} ctaName - Name/identifier of the CTA
 * @param {string} ctaLocation - Location on page (e.g., 'hero', 'pricing')
 */
export const trackCtaClick = (ctaName, ctaLocation) => {
  getDataLayer().push({
    event: 'cta_click',
    cta_name: ctaName,
    cta_location: ctaLocation
  });
};
