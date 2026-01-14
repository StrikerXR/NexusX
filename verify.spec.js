const { test, expect } = require('@playwright/test');

test('verify frontend changes', async ({ page }) => {
  // beta.html
  await page.goto('file:///app/beta.html');
  await page.screenshot({ path: '/home/jules/verification/beta.png' });

  // index.html
  await page.goto('file:///app/index.html');

  // Handle OOBE
  await page.click('text=Continue');
  await page.click('text=Continue');
  await page.click('text=Get Started');

  // Wait for changelog modal and take screenshot
  await page.waitForSelector('.changelog-modal', { state: 'visible' });
  await page.screenshot({ path: '/home/jules/verification/index_changelog.png' });
  await page.click('text=Continue');

  // Wait for the main UI to be visible
  await page.waitForSelector('body', { state: 'visible' });
  await page.screenshot({ path: '/home/jules/verification/index.png' });


  // snow.html
  await page.goto('file:///app/snow.html');
  await page.screenshot({ path: '/home/jules/verification/snow.png' });
});
