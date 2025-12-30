/**
 * View - Presentation and UI management
 */

export class View {
  constructor() {
    this.calculateBackgroundSize()
    this.currentDir = window.location.pathname.substring(0, window.location.pathname.lastIndexOf('/'))
    this.randomizeBackground()
    
    // Handle window resize for responsive backgrounds
    window.addEventListener('resize', () => this.handleResize())
  }

  calculateBackgroundSize() {
    const maxSize = Math.max(window.screen.availHeight, window.screen.availWidth)
    if (maxSize <= 720) {
      this.size = 'small'
    } else if (maxSize <= 1080) {
      this.size = 'medium'
    } else {
      this.size = 'big'
    }
  }

  handleResize() {
    const oldSize = this.size
    this.calculateBackgroundSize()
    if (oldSize !== this.size) {
      this.randomizeBackground()
    }
  }

  randomizeBackground() {
    const randomBackground = View.backgrounds[Math.floor(Math.random() * View.backgrounds.length)]
    const backgroundUrl = `/images/${this.size}/${randomBackground}`
    document.body.style.backgroundImage = `url('${backgroundUrl}')`
  }

  showContent(htmlContent, htmlContainer) {
    const container = document.querySelector(`#${htmlContainer}`)
    if (container instanceof HTMLElement) {
      const tempDiv = document.createElement('div')
      tempDiv.innerHTML = htmlContent
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
