/**
 * Controller - Main application controller
 * Handles navigation and view management with active state & transitions
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
    this.view.setActiveNav(selectedPage)
    this.view.updateLanguageLabel()
  }

  setupEventListeners() {
    // Navigation bar items
    document.querySelectorAll('a.barItem').forEach((elem) => {
      elem.addEventListener('click', (event) => {
        event.preventDefault()
        const id = event.currentTarget.id || event.target.id
        this.setPageById(id)
        // Close mobile menu after navigation (bootstrap handles via data-bs-toggle, but ensure focus)
        const toggler = document.querySelector('.navbar-toggler')
        if (toggler && window.getComputedStyle(toggler).display !== 'none') {
          const collapse = document.getElementById('navbarSupportedContent')
          if (collapse && collapse.classList.contains('show')) {
            // let bootstrap collapse do its thing; delay active update slightly if needed
          }
        }
      })
    })

    // Language selector
    document.querySelectorAll('a.langItem').forEach((elem) => {
      elem.addEventListener('click', (event) => {
        event.preventDefault()
        const lang = event.currentTarget.id || event.target.id
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
        this.view.setActiveNav('cookies')
      })
    }

    // Handle browser back/forward buttons
    window.addEventListener('hashchange', () => {
      const selectedPage = this.getSelectedPageFromHash()
      if (this.model.pages[selectedPage]) {
        const pageURI = this.model.getPageURI(selectedPage)
        this.model.setPage(pageURI)
        this.view.setActiveNav(selectedPage)
      }
    })

    // Keyboard navigation: left/right between sections
    window.addEventListener('keydown', (e) => {
      if (e.altKey || e.ctrlKey || e.metaKey) return
      const order = ['home', 'aboutme', 'projects', 'contributions']
      const current = this.getSelectedPageFromHash()
      const idx = order.indexOf(current)
      if (e.key === 'ArrowRight' && idx !== -1 && idx < order.length - 1) {
        e.preventDefault()
        this.setPageById(order[idx + 1])
      } else if (e.key === 'ArrowLeft' && idx > 0) {
        e.preventDefault()
        this.setPageById(order[idx - 1])
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
    this.view.setActiveNav(id)
    try {
      await this.model.setPage(pageURI)
      if (window.location.hash !== `#${id}`) {
        window.location.hash = `#${id}`
      }
      // Announce navigation for accessibility (optional)
      document.title = this.getTitleForPage(id)
    } catch (error) {
      console.error('Error loading page:', error)
      this.showError('Unable to load the requested page.')
    }
  }

  getTitleForPage(id) {
    const map = {
      home: 'Haritz Medina - Home',
      aboutme: 'Haritz Medina - About me',
      projects: 'Haritz Medina - Projects',
      contributions: 'Haritz Medina - Research & Contributions',
      cookies: 'Haritz Medina - Cookies'
    }
    return map[id] || 'Haritz Medina - Personal Website'
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
