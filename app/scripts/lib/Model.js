/**
 * Created by Haritz Medina on 09/28/2014. Last update 12/30/2025.
 */

'use strict'

const View = require('./View')

class Model {
  constructor ({ view }) {
    this.view = view || new View()
    this.folder = 'templates'
    this.pages = {
      home: 'home.html',
      aboutme: 'aboutme.html',
      projects: 'projects.html',
      research: 'research.html',
      contributions: 'contributions.html',
      cookies: 'cookies.html'
    }
    this.languages = {
      es_ES: 'es_ES',
      en_GB: 'en_GB'
    }
    this.cookies = new Cookies()
    this.loadingTimeoutMs = 5000 // 5 second timeout for page loads
  }

  getPageURI (pageName) {
    // Check language cookie
    let language = this.getUserLanguage()
    if (!language) {
      language = this.getUserDefaultLanguage()
      if (!language) {
        language = 'en_GB' // Default language English
      }
    }
    return `${this.folder}/${language}/${this.pages[pageName]}`
  }

  async setPage (page) {
    try {
      const response = await this.fetchWithTimeout(page, this.loadingTimeoutMs)
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`)
      }
      const html = await response.text()
      this.view.showContent(html, View.container)
    } catch (error) {
      console.error('Error loading page:', error)
      this.showErrorMessage('Unable to load webpage section or section does not exist.')
    }
  }

  async fetchWithTimeout (url, timeoutMs) {
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

  showErrorMessage (message) {
    // Create a more user-friendly error message instead of alert
    const container = document.querySelector(`#${View.container}`)
    if (container) {
      container.innerHTML = `<div class="alert alert-danger" role="alert"><strong>Error:</strong> ${message}</div>`
    }
  }

  setUserLanguage (language) {
    this.cookies.createCookie('lang', language)
  }

  getUserLanguage () {
    return this.cookies.readCookie('lang')
  }

  getUserDefaultLanguage () {
    return Object.values(this.languages).find((lang) => {
      return lang.includes(window.navigator.language.split('-')[0])
    })
  }
}

class Cookies {
  createCookie (name, value, days) {
    let expires = ''
    if (days) {
      const date = new Date()
      date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000))
      expires = `; expires=${date.toUTCString()}`
    }

    document.cookie = `${name}=${value}${expires}; path=/; SameSite=Strict`
  }

  readCookie (name) {
    const nameEQ = `${name}=`
    const ca = document.cookie.split(';')
    for (let i = 0; i < ca.length; i++) {
      const c = ca[i].trim()
      if (c.indexOf(nameEQ) === 0) {
        return c.substring(nameEQ.length)
      }
    }
    return null
  }

  eraseCookie (name) {
    this.createCookie(name, '', -1)
  }
}

module.exports = Model
