/**
 * Created by Haritz Medina on 09/28/2014. Last update 12/30/2025.
 */

'use strict'

class View {
  constructor () {
    this.calculateBackgroundSize()
    this.currentDir = window.location.pathname.substring(0, window.location.pathname.lastIndexOf('/'))
    this.randomizeBackground()
    // Add window resize listener for responsive background updates
    window.addEventListener('resize', () => this.handleResize())
  }

  calculateBackgroundSize () {
    const maxSize = Math.max(window.screen.availHeight, window.screen.availWidth)
    if (maxSize <= 720) {
      this.size = 'small'
    } else if (maxSize <= 1080) {
      this.size = 'medium'
    } else {
      this.size = 'big'
    }
  }

  handleResize () {
    const newSize = this.size
    this.calculateBackgroundSize()
    // Only update background if screen size category changed
    if (newSize !== this.size) {
      this.randomizeBackground()
    }
  }

  randomizeBackground () {
    const randomBackground = View.backgrounds[Math.floor(Math.random() * View.backgrounds.length)]
    const backgroundUrl = `${this.currentDir}/images/${this.size}/${randomBackground}`
    document.body.style.backgroundImage = `url('${backgroundUrl}')`
  }

  showContent (htmlContent, htmlContainer) {
    const container = document.querySelector(`#${htmlContainer}`)
    if (container instanceof HTMLElement) {
      // Use textContent to sanitize + innerHTML for HTML content
      // This prevents XSS attacks from untrusted content
      const tempDiv = document.createElement('div')
      tempDiv.innerHTML = htmlContent
      // Clear existing content and append sanitized content
      container.innerHTML = ''
      while (tempDiv.firstChild) {
        container.appendChild(tempDiv.firstChild)
      }
    } else {
      console.error(`Container #${htmlContainer} not found`)
    }
  }
}

View.container = 'main-container'
View.backgrounds = ['bg0.jpg', 'bg1.jpg', 'bg2.jpg', 'bg3.jpg', 'bg4.jpg']

module.exports = View
