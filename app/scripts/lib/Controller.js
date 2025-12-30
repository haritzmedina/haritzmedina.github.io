/**
 * Created by Haritz Medina on 09/28/2014. Last update 12/30/2025.
 */

'use strict'

const Model = require('./Model')
const View = require('./View')

class Controller {
  constructor (props) {
    this.model = null
    this.view = null
  }

  initialize () {
    // Initialize model and view
    this.view = new View()
    this.model = new Model({ view: this.view })

    // Use event delegation for better performance and memory management
    this.setupEventListeners()

    // Load the view of the url
    const selectedPage = this.getSelectedPageFromHash()
    this.setPageById(selectedPage)
  }

  setupEventListeners () {
    // Nav-bar items content control
    document.querySelectorAll('a.barItem').forEach((elem) => {
      elem.addEventListener('click', (event) => {
        event.preventDefault()
        this.setPageById(event.target.id)
      })
    })

    // Nav-bar language items content control
    document.querySelectorAll('a.langItem').forEach((elem) => {
      elem.addEventListener('click', (event) => {
        event.preventDefault()
        if (this.model.languages[event.target.id]) {
          // Set cookies and reload web
          this.model.setUserLanguage(event.target.id)
          window.location.reload()
        }
      })
    })

    // Add event for cookies icon
    const cookiesMoreInfoElement = document.querySelector('.cc_more_info')
    if (cookiesMoreInfoElement instanceof HTMLElement) {
      cookiesMoreInfoElement.addEventListener('click', (event) => {
        event.preventDefault()
        this.model.setPage(this.model.getPageURI('cookies'))
      })
    }

    // Listen for hash changes (back/forward button support)
    window.addEventListener('hashchange', () => {
      const selectedPage = this.getSelectedPageFromHash()
      if (this.model.pages[selectedPage]) {
        const pageURI = this.model.getPageURI(selectedPage)
        this.model.setPage(pageURI)
      }
    })
  }

  getSelectedPageFromHash () {
    const hash = window.location.hash.substring(1) // Remove # prefix
    if (hash && typeof hash === 'string' && hash.length > 0) {
      return hash
    }
    return 'home'
  }

  async setPageById (id) {
    if (!this.model.pages[id]) {
      console.error(`Page "${id}" not found in model.pages`)
      this.redirectToHome()
      return
    }

    const pageURI = this.model.getPageURI(id)
    if (pageURI) {
      try {
        await this.model.setPage(pageURI)
        // Update url hash
        window.location.hash = `#${id}`
      } catch (error) {
        console.error('Error setting page:', error)
        this.showErrorMessage('Unable to load the requested page.')
      }
    } else {
      console.error(`Could not get URI for page "${id}"`)
      this.showErrorMessage('Unable to load website page, make sure the URL is correct.')
    }
  }

  showErrorMessage (message) {
    const container = document.querySelector(`#${View.container}`)
    if (container) {
      container.innerHTML = `<div class="alert alert-warning" role="alert"><strong>Notice:</strong> ${message}</div>`
    }
  }

  redirectToHome () {
    window.location.hash = '#home'
  }
}

module.exports = Controller
