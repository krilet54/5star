/**
 * GA4 Event Tracking Utilities
 *
 * These events should be marked as "key events" in the GA4 admin panel
 * (Admin → Events → toggle "Mark as key event") to track conversions.
 *
 * Events fired:
 * - generate_lead        → form submissions (EnquiryForm, LeadCapturePopup)
 * - whatsapp_click       → WhatsApp button/link clicks
 * - phone_click          → phone number link clicks
 * - contact_page_view    → contact page visits
 */

declare global {
  interface Window {
    gtag?: (...args: unknown[]) => void
  }
}

function fireEvent(eventName: string, params?: Record<string, string | number | boolean>) {
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('event', eventName, params)
  }
}

/** Fire when a form is successfully submitted (EnquiryForm or LeadCapturePopup). */
export function trackFormSubmission(formName: string, service?: string) {
  fireEvent('generate_lead', {
    form_name: formName,
    ...(service ? { service_interest: service } : {}),
  })
}

/** Fire when a WhatsApp link/button is clicked. */
export function trackWhatsAppClick(location: string) {
  fireEvent('whatsapp_click', {
    click_location: location,
  })
}

/** Fire when a phone number link is clicked. */
export function trackPhoneClick(location: string) {
  fireEvent('phone_click', {
    click_location: location,
  })
}

/** Fire when the contact page is viewed. */
export function trackContactPageView() {
  fireEvent('contact_page_view')
}
