import { test, expect } from '@playwright/test';

test.describe('Portfolio E2E Tests', () => {
  test('should load homepage', async ({ page }) => {
    await page.goto('/');
    await expect(page).toHaveTitle(/Portfolio|Arthur/);
    await expect(page.locator('main')).toContainText('développeur junior');
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
    await expect(page.locator('h2')).toContainText('contacter');
  });

  test('should display projects', async ({ page }) => {
    await page.goto('/repos/all');
    await expect(page.locator('h2')).toContainText('Projets');
    await page.click('button:has-text("Dépôts GitHub")');
  });

  test('should validate contact form', async ({ page }) => {
    await page.goto('/contact');
    await page.click('button[type="submit"]');
    await expect(page.locator('.error').first()).toBeVisible();

    await page.fill('#name', 'Test User');
    await page.fill('#email', 'test@example.com');
    await page.fill('#subject', 'Test Subject');
    await page.fill('#message', 'Message de test avec assez de caractères.');
    await page.click('button[type="submit"]');
    await expect(page.locator('.message-ok')).toBeVisible();
  });
});
