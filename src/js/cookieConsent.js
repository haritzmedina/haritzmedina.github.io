/**
 * Cookie Consent Initialization
 * Wrapper for the external cookieconsent library
 */

export function initCookieConsent() {
  if (typeof window.cookieconsent === 'undefined') {
    console.warn('Cookie consent library not loaded')
    return
  }

  window.cookieconsent.initialise({
    palette: {
      popup: {
        background: '#101010'
      },
      button: {
        background: 'transparent',
        text: '#ffffff',
        border: '1px solid #ffffff'
      }
    },
    content: {
      href: 'https://haritzmedina.com#cookies'
    }
  })
}
