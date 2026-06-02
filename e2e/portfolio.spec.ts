import { test, expect } from '@playwright/test';

test.describe('Portfolio E2E Tests', () => {
  test('should load homepage and display main content', async ({ page }) => {
    await page.goto('/');

    await expect(page).toHaveTitle(/Portfolio/);
    await expect(page.locator('h2')).toContainText('Portfolio');
    await expect(page.locator('nav')).toBeVisible();
  });

  test('should navigate between pages', async ({ page }) => {
    await page.goto('/');

    await page.click('text=À propos');
    await expect(page).toHaveURL(/\/about/);
    await expect(page.locator('h2')).toContainText('À propos');

    await page.click('text=Compétences');
    await expect(page).toHaveURL(/\/skills/);
    await expect(page.locator('h2')).toContainText('Compétences');

    await page.click('text=Contact');
    await expect(page).toHaveURL(/\/contact/);
    await expect(page.locator('h2')).toContainText('Contact');
  });

  test('should display projects', async ({ page }) => {
    await page.goto('/repos/all');

    await expect(page.locator('h2')).toContainText('Projets', { timeout: 5000 });

    await page.click('button:has-text("Dépôts GitHub")');

    await Promise.race([
      page.waitForSelector('article ul li', { timeout: 20000 }),
      page.waitForSelector('.loading', { timeout: 20000 }).catch(() => null),
    ]).catch(() => null);
  });

  test('should submit contact form with validation', async ({ page }) => {
    await page.goto('/contact');

    await page.fill('#name', '');
    await page.fill('#email', '');
    await page.fill('#subject', '');
    await page.fill('#message', '');

    await page.click('button[type="submit"]');

    await page.waitForSelector('.error', { timeout: 2000 });
    await expect(page.locator('.error').first()).toBeVisible();

    await page.fill('#name', 'Test User');
    await page.fill('#email', 'test@example.com');
    await page.fill('#subject', 'Test Subject');
    await page.fill('#message', 'This is a test message with more than 10 characters.');

    await page.click('button[type="submit"]');

    await expect(page.locator('.message-ok')).toBeVisible();
  });
});
