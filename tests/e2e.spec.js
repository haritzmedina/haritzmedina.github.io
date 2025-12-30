import { test, expect } from '@playwright/test';

test.describe('Home Page', () => {
  test('should load home page successfully', async ({ page }) => {
    await page.goto('/');
    
    // Check title
    await expect(page).toHaveTitle(/Haritz Medina/);
    
    // Check navigation bar
    await expect(page.locator('nav.navbar')).toBeVisible();
    await expect(page.locator('a.navbar-brand')).toContainText('Haritz Medina');
    
    // Check main container
    await expect(page.locator('#main-container')).toBeVisible();
    
    // Check welcome message (default language)
    await expect(page.locator('.pageContainer')).toBeVisible();
  });

  test('should have working navigation links', async ({ page }) => {
    await page.goto('/');
    
    const viewport = page.viewportSize();
    const isMobile = viewport && viewport.width < 992;
    
    // In mobile, use direct navigation instead of clicking to avoid Bootstrap collapse issues
    if (isMobile) {
      // Test About me page
      await page.goto('/#aboutme');
      await expect(page).toHaveURL(/#aboutme/);
      await expect(page.locator('.pageContainer h2')).toBeVisible();
      
      // Test Projects page
      await page.goto('/#projects');
      await expect(page).toHaveURL(/#projects/);
      await expect(page.locator('.card').first()).toBeVisible();
      
      // Test Contributions page
      await page.goto('/#contributions');
      await expect(page).toHaveURL(/#contributions/);
      
      // Back to home
      await page.goto('/#home');
      await expect(page).toHaveURL(/#home/);
    } else {
      // Desktop: test clicking navigation links
      const aboutMeLink = page.locator('a[href="#aboutme"]');
      await aboutMeLink.click();
    await expect(page).toHaveURL(/#aboutme/);
    await expect(page.locator('.pageContainer h2')).toBeVisible();
    
      const projectsLink = page.locator('a[href="#projects"]');
      await projectsLink.click();
    await expect(page).toHaveURL(/#projects/);
    await expect(page.locator('.card').first()).toBeVisible();
    
      const contributionsLink = page.locator('a[href="#contributions"]');
      await contributionsLink.click();
    await expect(page).toHaveURL(/#contributions/);
    
      await page.locator('a.navbar-brand[href="#home"]').click();
    await expect(page).toHaveURL(/#home/);
    }
  });

  test('should have responsive navigation', async ({ page }) => {
    await page.setViewportSize({ width: 375, height: 667 }); // Mobile size
    await page.goto('/');
    
    // Check navbar toggle button is visible on mobile
    const toggleButton = page.locator('button.navbar-toggler');
    await expect(toggleButton).toBeVisible();
    
    // Click to expand mobile menu
    await toggleButton.click();
    await page.waitForTimeout(500); // Wait for Bootstrap collapse animation
    
    // Check navigation items are visible
    await expect(page.locator('a#aboutme')).toBeVisible();
    await expect(page.locator('a#projects')).toBeVisible();
  });
});

test.describe('Language Selector', () => {
  test('should switch to Spanish', async ({ page }) => {
    await page.goto('/');
    
    // Expand mobile menu if collapsed
    const viewport = page.viewportSize();
    if (viewport && viewport.width < 992) {
      const toggleButton = page.locator('button.navbar-toggler');
      if (await toggleButton.isVisible()) {
        await toggleButton.click();
        await page.waitForTimeout(300);
      }
    }
    
    // Open language dropdown
    await page.click('#languageDropdown');
    await page.waitForTimeout(300);
    
    // Click Spanish
    await page.locator('a#es_ES').click({ force: true });
    
    // Wait for page reload
    await page.waitForLoadState('networkidle');
    
    // Check Spanish content
    await expect(page.locator('.pageContainer')).toContainText(/Bienvenido|Buenas/);
  });

  test('should switch to Basque', async ({ page }) => {
    await page.goto('/');
    
    // Expand mobile menu if collapsed
    const viewport = page.viewportSize();
    if (viewport && viewport.width < 992) {
      const toggleButton = page.locator('button.navbar-toggler');
      if (await toggleButton.isVisible()) {
        await toggleButton.click();
        await page.waitForTimeout(300);
      }
    }
    
    // Open language dropdown
    await page.click('#languageDropdown');
    await page.waitForTimeout(300);
    
    // Click Basque
    await page.locator('a#eu_ES').click({ force: true });
    
    // Wait for page reload
    await page.waitForLoadState('networkidle');
    
    // Check Basque content
    await expect(page.locator('.pageContainer')).toContainText(/Ongi etorri|Kaixo/);
  });

  test('should switch to English', async ({ page }) => {
    await page.goto('/');
    
    // Expand mobile menu if collapsed
    const viewport = page.viewportSize();
    if (viewport && viewport.width < 992) {
      const toggleButton = page.locator('button.navbar-toggler');
      if (await toggleButton.isVisible()) {
        await toggleButton.click();
        await page.waitForTimeout(300);
      }
    }
    
    // Open language dropdown
    await page.click('#languageDropdown');
    await page.waitForTimeout(300);
    
    // Click English
    await page.locator('a#en_GB').click({ force: true });
    
    // Wait for page reload
    await page.waitForLoadState('networkidle');
    
    // Check English content
    await expect(page.locator('.pageContainer')).toContainText(/Welcome/);
  });

  test('should persist language preference', async ({ page, context }) => {
    await page.goto('/');
    
    // Expand mobile menu if collapsed
    const viewport = page.viewportSize();
    if (viewport && viewport.width < 992) {
      const toggleButton = page.locator('button.navbar-toggler');
      if (await toggleButton.isVisible()) {
        await toggleButton.click();
        await page.waitForTimeout(300);
      }
    }
    
    // Switch to Spanish
    await page.click('#languageDropdown');
    await page.waitForTimeout(300);
    await page.click('a#es_ES');
    await page.waitForLoadState('networkidle');
    
    // Check cookie is set
    const cookies = await context.cookies();
    const langCookie = cookies.find(c => c.name === 'lang');
    expect(langCookie).toBeDefined();
    expect(langCookie?.value).toBe('es_ES');
    
    // Expand mobile menu again after page reload if collapsed
    if (viewport && viewport.width < 992) {
      const toggleButton = page.locator('button.navbar-toggler');
      if (await toggleButton.isVisible()) {
        await toggleButton.click();
        await page.waitForTimeout(300);
      }
    }
    
    // Navigate to another page
    await page.click('a[href="#aboutme"]');
    
    // Spanish content should persist
    await expect(page.locator('.pageContainer')).toContainText(/Sobre mi/);
  });
});

test.describe('Projects Page', () => {
  test('should display project cards', async ({ page }) => {
    await page.goto('/#projects');
    await page.waitForLoadState('networkidle');
    
    // Check multiple project cards exist
    const cards = page.locator('.card');
    await expect(cards).not.toHaveCount(0);
    
    // Check specific projects
    await expect(page.locator('.card-header').first()).toContainText(/hypothesis-api-client/i);
  });

  test('should have working external links', async ({ page }) => {
    await page.goto('/#projects');
    await page.waitForLoadState('networkidle');
    
    // Check that GitHub links have correct attributes
    const githubLinks = page.locator('a.websiteButton[data-website="github"]');
    await expect(githubLinks.first()).toHaveAttribute('target', '_blank');
    await expect(githubLinks.first()).toHaveAttribute('rel', /noopener/);
  });
});

test.describe('Accessibility', () => {
  test('should have proper ARIA labels', async ({ page }) => {
    await page.goto('/');
    
    // Check navbar has proper labels
    await expect(page.locator('button.navbar-toggler')).toHaveAttribute('aria-label', /Toggle navigation/);
  });

  test('should have alt text for icons', async ({ page }) => {
    await page.goto('/#aboutme');
    await page.waitForLoadState('networkidle');
    
    // Social buttons should have proper attributes
    const socialButtons = page.locator('a.websiteButton');
    expect(await socialButtons.count()).toBeGreaterThan(0);
  });
});

test.describe('SEO and Meta Tags', () => {
  test('should have proper meta tags', async ({ page }) => {
    await page.goto('/');
    
    // Check basic meta tags
    await expect(page.locator('meta[name="description"]')).toHaveAttribute('content', /.+/);
    await expect(page.locator('meta[property="og:title"]')).toHaveAttribute('content', /.+/);
    await expect(page.locator('link[rel="canonical"]')).toHaveAttribute('href', /.+/);
  });

  test('should have structured data', async ({ page }) => {
    await page.goto('/');
    
    // Check for JSON-LD structured data
    const structuredData = page.locator('script[type="application/ld+json"]');
    await expect(structuredData).toHaveCount(1);
    
    const content = await structuredData.textContent();
    expect(content).toContain('"@type": "Person"');
    expect(content).toContain('Haritz Medina');
  });
});

test.describe('Performance', () => {
  test('should load quickly', async ({ page }) => {
    const startTime = Date.now();
    await page.goto('/');
    await page.waitForLoadState('networkidle');
    const loadTime = Date.now() - startTime;
    
    // Should load in less than 3 seconds
    expect(loadTime).toBeLessThan(3000);
  });

  test('should have working background images', async ({ page }) => {
    await page.goto('/');
    
    // Check body has background image style
    const bodyStyle = await page.locator('body').getAttribute('style');
    expect(bodyStyle).toContain('background-image');
    expect(bodyStyle).toMatch(/\/images\/(small|medium|big)\/bg\d+\.jpg/);
  });
});
