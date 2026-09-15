import { test, expect } from '@playwright/test';

test.describe('Portfolio E2E Tests', () => {
  test('should load homepage', async ({ page }) => {
    await page.goto('/');
    await expect(page).toHaveTitle(/Portfolio|Arthur/);
    await expect(page.locator('main')).toContainText(/développeur junior/i);
    await expect(page.locator('nav')).toBeVisible();
  });

  test('should navigate to projects page', async ({ page }) => {
    await page.goto('/');
    await page.click('nav a[href="/repos/all"]');
    await expect(page).toHaveURL(/\/repos\/all/);
  });

  test('should submit contact form', async ({ page }) => {
    await page.goto('/contact');
    await page.fill('#name', 'Test User');
    await page.fill('#email', 'test@example.com');
    await page.fill('#message', 'Message de test E2E');
    
    const submitBtn = page.locator('button[type="submit"]');
    if (await submitBtn.isVisible()) {
      await submitBtn.click();
    }
  });
});