/**
 * Haritz Medina - Personal Website
 * Modern ES Module Application (Vite)
 */

import 'bootstrap'
import './styles/main.scss'
import { Controller } from './js/Controller.js'
import { initCookieConsent } from './js/cookieConsent.js'

// Initialize the application
document.addEventListener('DOMContentLoaded', () => {
  const app = new Controller()
  app.initialize()
})

// Initialize cookie consent
window.addEventListener('load', initCookieConsent)
