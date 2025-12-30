/**
 * Model - Data and business logic management
 */

import { View } from './View.js'

export class Model {
  constructor({ view } = {}) {
    this.view = view || new View()
    this.folder = 'templates'
    this.pages = {
      home: 'home.html',
      aboutme: 'aboutme.html',
      projects: 'projects.html',
      contributions: 'contributions.html',
      cookies: 'cookies.html'
    }
    this.languages = {
      es_ES: 'es_ES',
      en_GB: 'en_GB',
      eu_ES: 'eu_ES'
    }
    this.loadingTimeoutMs = 5000
  }

  getPageURI(pageName) {
    let language = this.getUserLanguage()
    if (!language) {
      language = this.getUserDefaultLanguage()
      if (!language) {
        language = 'en_GB'
      }
    }
    return `/${this.folder}/${language}/${this.pages[pageName]}`
  }

  async setPage(page) {
    try {
      const response = await this.fetchWithTimeout(page, this.loadingTimeoutMs)
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`)
      }
      const html = await response.text()
      this.view.showContent(html, View.container)
    } catch (error) {
      console.error('Error loading page:', error)
      this.showErrorMessage(
        'Unable to load webpage section or section does not exist.'
      )
    }
  }

  async fetchWithTimeout(url, timeoutMs) {
    const controller = new AbortController()
    const timeoutId = setTimeout(() => controller.abort(), timeoutMs)

    try {
      const response = await fetch(url, { signal: controller.signal })
      clearTimeout(timeoutId)
      return response
    } catch (error) {
      clearTimeout(timeoutId)
      throw error
    }
  }

  showErrorMessage(message) {
    const container = document.querySelector(`#${View.container}`)
    if (container) {
      container.innerHTML = `<div class="alert alert-danger" role="alert"><strong>Error:</strong> ${message}</div>`
    }
  }

  setUserLanguage(language) {
    const date = new Date()
    date.setTime(date.getTime() + 365 * 24 * 60 * 60 * 1000)
    document.cookie = `lang=${language}; expires=${date.toUTCString()}; path=/; SameSite=Strict`
  }

  getUserLanguage() {
    const nameEQ = 'lang='
    const ca = document.cookie.split(';')
    for (let i = 0; i < ca.length; i++) {
      const c = ca[i].trim()
      if (c.indexOf(nameEQ) === 0) {
        return c.substring(nameEQ.length)
      }
    }
    return null
  }

  getUserDefaultLanguage() {
    return Object.values(this.languages).find((lang) => {
      return lang.includes(window.navigator.language.split('-')[0])
    })
  }
}
