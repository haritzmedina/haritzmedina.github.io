/**
 * View - Presentation and UI management
 * Preserves random background per resolution + adds smooth transitions & accessibility
 */

export class View {
  constructor() {
    this.calculateBackgroundSize()
    this.currentDir = window.location.pathname.substring(
      0,
      window.location.pathname.lastIndexOf('/')
    )
    // Prepare body for transitions
    document.body.classList.add('bg-transition')
    this.randomizeBackground()
    this.updateLanguageLabel()

    // Handle window resize for responsive backgrounds
    window.addEventListener('resize', () => this.handleResize())
  }

  calculateBackgroundSize() {
    const maxSize = Math.max(
      window.screen.availHeight,
      window.screen.availWidth,
      window.innerWidth,
      window.innerHeight
    )
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
    const randomBackground =
      View.backgrounds[Math.floor(Math.random() * View.backgrounds.length)]
    const backgroundUrl = `/images/${this.size}/${randomBackground}`

    // Preload then apply to avoid flash
    const img = new window.Image()
    img.onload = () => {
      document.body.style.backgroundImage = `url('${backgroundUrl}')`
    }
    img.onerror = () => {
      // fallback directly
      document.body.style.backgroundImage = `url('${backgroundUrl}')`
    }
    img.src = backgroundUrl

    // Also set immediately as fallback for slow load (will be replaced smoothly)
    if (!document.body.style.backgroundImage) {
      document.body.style.backgroundImage = `url('${backgroundUrl}')`
    }
  }

  updateLanguageLabel() {
    const lang = this.getCookie('lang')
    const labelMap = { es_ES: 'ES', en_GB: 'EN', eu_ES: 'EU' }
    const el = document.getElementById('currentLanguageLabel')
    if (el && lang && labelMap[lang]) {
      el.textContent = labelMap[lang]
    }
    // highlight active in dropdown
    document.querySelectorAll('.langItem').forEach((a) => {
      a.classList.toggle('active', a.id === lang)
      if (a.id === lang) a.setAttribute('aria-current', 'true')
      else a.removeAttribute('aria-current')
    })
  }

  getCookie(name) {
    const nameEQ = `${name}=`
    const ca = document.cookie.split(';')
    for (let i = 0; i < ca.length; i++) {
      const c = ca[i].trim()
      if (c.indexOf(nameEQ) === 0) return c.substring(nameEQ.length)
    }
    return null
  }

  showContent(htmlContent, htmlContainer) {
    const container = document.querySelector(`#${htmlContainer}`)
    if (container instanceof HTMLElement) {
      // Accessible busy state + smooth transition
      container.setAttribute('aria-busy', 'true')
      container.classList.add('is-switching')

      const doSwap = () => {
        const tempDiv = document.createElement('div')
        tempDiv.innerHTML = htmlContent
        container.innerHTML = ''
        while (tempDiv.firstChild) {
          container.appendChild(tempDiv.firstChild)
        }
        // Trigger reflow for animation
        void container.offsetWidth
        container.classList.remove('is-switching')
        container.setAttribute('aria-busy', 'false')
        // Ensure focus management: focus first heading for screen readers
        const heading = container.querySelector('h2')
        if (heading) {
          heading.setAttribute('tabindex', '-1')
          // don't steal focus aggressively, just make it programmatically focusable
        }
      }

      // Small delay for fade out perception (150ms), keeps simplicity
      if (container.innerHTML.trim() === '') {
        doSwap()
      } else {
        setTimeout(doSwap, 140)
      }
    } else {
      console.error(`Container #${htmlContainer} not found`)
    }
  }

  setActiveNav(id) {
    document.querySelectorAll('a.barItem').forEach((el) => {
      const isActive = el.id === id
      el.classList.toggle('active', isActive)
      el.setAttribute('aria-current', isActive ? 'page' : 'false')
    })
  }
}

View.container = 'main-container'
View.backgrounds = ['bg0.jpg', 'bg1.jpg', 'bg2.jpg', 'bg3.jpg', 'bg4.jpg']
