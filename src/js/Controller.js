/**
 * Controller - Main application controller
 * Handles navigation and view management
 */

import { Model } from './Model.js'
import { View } from './View.js'

export class Controller {
  constructor() {
    this.model = null
    this.view = null
  }

  initialize() {
    // Initialize model and view
    this.view = new View()
    this.model = new Model({ view: this.view })

    // Setup all event listeners
    this.setupEventListeners()

    // Load initial page from URL hash
    const selectedPage = this.getSelectedPageFromHash()
    this.setPageById(selectedPage)
  }

  setupEventListeners() {
    // Navigation bar items
    document.querySelectorAll('a.barItem').forEach((elem) => {
      elem.addEventListener('click', (event) => {
        event.preventDefault()
        this.setPageById(event.target.id)
      })
    })

    // Language selector
    document.querySelectorAll('a.langItem').forEach((elem) => {
      elem.addEventListener('click', (event) => {
        event.preventDefault()
        const lang = event.target.id
        if (this.model.languages[lang]) {
          this.model.setUserLanguage(lang)
          window.location.reload()
        }
      })
    })

    // Cookie consent more info button
    const cookiesMoreInfoElement = document.querySelector('.cc_more_info')
    if (cookiesMoreInfoElement instanceof HTMLElement) {
      cookiesMoreInfoElement.addEventListener('click', (event) => {
        event.preventDefault()
        this.model.setPage(this.model.getPageURI('cookies'))
      })
    }

    // Handle browser back/forward buttons
    window.addEventListener('hashchange', () => {
      const selectedPage = this.getSelectedPageFromHash()
      if (this.model.pages[selectedPage]) {
        const pageURI = this.model.getPageURI(selectedPage)
        this.model.setPage(pageURI)
      }
    })
  }

  getSelectedPageFromHash() {
    const hash = window.location.hash.substring(1)
    const pages = {
      home: 'home.html',
      aboutme: 'aboutme.html',
      projects: 'projects.html',
      contributions: 'contributions.html',
      cookies: 'cookies.html'
    }
    return hash && pages[hash] ? hash : 'home'
  }

  async setPageById(id) {
    if (!this.model.pages[id]) {
      console.error(`Page "${id}" not found`)
      this.redirectToHome()
      return
    }

    const pageURI = this.model.getPageURI(id)
    try {
      await this.model.setPage(pageURI)
      window.location.hash = `#${id}`
    } catch (error) {
      console.error('Error loading page:', error)
      this.showError('Unable to load the requested page.')
    }
  }

  showError(message) {
    const container = document.querySelector(`#${View.container}`)
    if (container) {
      container.innerHTML = `<div class="alert alert-warning" role="alert"><strong>Notice:</strong> ${message}</div>`
    }
  }

  redirectToHome() {
    window.location.hash = '#home'
  }
}
