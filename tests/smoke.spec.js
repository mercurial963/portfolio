const { test, expect } = require('@playwright/test');

test('portfolio home page loads correctly', async ({ page }) => {
  // Navigate to the site
  await page.goto('/');

  // Verify the page loads and has a title
  const title = await page.title();
  console.log(`Page title: "${title}"`);
  expect(title).toBeTruthy();
});

test('navigation links on main page work correctly', async ({ page }) => {
  await page.goto('/');

  // Find all navigation links
  const navLinks = await page.$$('nav a, header a');
  console.log(`Found ${navLinks.length} navigation links`);

  // Check each navigation link to section anchors
  for (const link of navLinks) {
    const href = await link.getAttribute('href');

    // Only test internal anchor links (e.g. #about)
    if (href && href.startsWith('#')) {
      // Click the link
      await link.click();

      // Verify URL now contains the hash
      expect(page.url()).toContain(href);
    }
  }
});

// Test navigation from main page to resume page
test('navigation from main page to resume page works', async ({ page }) => {
  // Start on the main page
  await page.goto('/');

  // Find the resume link on the main page
  const resumeLink = await page.$('a[href*="/resume"], a[href*="resume.html"]');

  if (resumeLink) {
    console.log('Found resume link on main page');

    // Click the resume link
    await resumeLink.click();

    // Wait for navigation to complete
    await page.waitForLoadState('domcontentloaded');

    // Verify we navigated to the resume page
    expect(page.url()).toContain('resume');
    console.log(`Navigated to: ${page.url()}`);
  } else {
    console.log('Resume link not found on main page');
    test.skip();
  }
});

// Social media links test
test('social media links have correct attributes', async ({ page }) => {
  await page.goto('/');

  // Find GitHub and LinkedIn links
  const socialLinks = await page.$$('a[href*="github.com"], a[href*="linkedin.com"]');
  console.log(`Found ${socialLinks.length} social media links`);

  // Verify each social link has correct attributes
  for (const link of socialLinks) {
    const href = await link.getAttribute('href');
    console.log(`Social link: ${href}`);

    // Verify it opens in a new tab
    const target = await link.getAttribute('target');
    expect(target).toBe('_blank');

    // Verify it has security attributes
    const rel = await link.getAttribute('rel');
    expect(rel).toContain('noopener');
  }
});

// Performance test
test('pages load quickly', async ({ page }) => {
  // Test main portfolio page load time
  const startTimePortfolio = Date.now();
  await page.goto('/');
  const loadTimePortfolio = Date.now() - startTimePortfolio;
  console.log(`Portfolio page load time: ${loadTimePortfolio}ms`);
  expect(loadTimePortfolio).toBeLessThan(2000);

  // Test resume page load time
  const startTimeResume = Date.now();
  await page.goto('/resume');
  const loadTimeResume = Date.now() - startTimeResume;
  console.log(`Resume page load time: ${loadTimeResume}ms`);
  expect(loadTimeResume).toBeLessThan(2000);
});
