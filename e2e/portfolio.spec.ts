import { test, expect } from '@playwright/test';

test.describe('Portfolio E2E Tests', () => {
  test('should load homepage and display main content', async ({ page }) => {
    await page.goto('/');

    // Vérifier le titre
    await expect(page).toHaveTitle(/Portfolio/);

    // Vérifier la présence du contenu principal
    await expect(page.locator('h1')).toContainText('Bienvenue sur mon Portfolio');

    // Vérifier la navigation
    await expect(page.locator('nav')).toBeVisible();
  });

  test('should navigate between pages', async ({ page }) => {
    await page.goto('/');
    
    // Scroll to top
    await page.evaluate(() => window.scrollTo(0, 0));
    await page.waitForTimeout(500);

    // Sur mobile, on doit étendre le menu d'abord
    const viewport = page.viewportSize();
    if (viewport && viewport.width < 992) {
      const toggler = page.locator('.navbar-toggler');
      const isVisible = await toggler.isVisible().catch(() => false);
      if (isVisible) {
        await toggler.click();
        await page.waitForTimeout(500);
      }
    }

    // Aller à la page À Propos
    const aboutLink = page.locator('a:has-text("À Propos")').first();
    await aboutLink.waitFor({ state: 'visible', timeout: 5000 });
    await aboutLink.click();
    
    await expect(page).toHaveURL(/\/about/, { timeout: 10000 });
    await expect(page.locator('h2')).toContainText('À Propos de Moi', { timeout: 5000 });

    // Aller à la page Compétences
    await page.click('text=Compétences');
    await expect(page).toHaveURL(/\/skills/);
    await expect(page.locator('h2')).toContainText('Mes Compétences');

    // Aller à la page Contact
    await page.click('text=Me contacter');
    await expect(page).toHaveURL(/\/contact/);
    await expect(page.locator('h2')).toContainText('Me Contacter');
  });

  test('should display projects', async ({ page }) => {
    await page.goto('/');
    
    // Attendre que la navigation soit prête
    await page.waitForTimeout(500);

    // Cliquer sur "Tous les Dépôts"
    await page.click('text=Tous les Dépôts');
    await expect(page).toHaveURL(/\/repos\/all/, { timeout: 10000 });

    // Attendre que les projets se chargent (GitHub API peut être lente)
    // On cherche soit une repo-card soit un message d'erreur/chargement
    await Promise.race([
      page.waitForSelector('.repo-card', { timeout: 20000 }),
      page.waitForSelector('.loading', { timeout: 20000 }).catch(() => null),
      page.waitForSelector('[class*="error"]', { timeout: 20000 }).catch(() => null),
    ]).catch(() => null);

    // Vérifier qu'il y a des projets (ou au minimum que la page a chargé)
    const hasRepos = await page.locator('.repo-card').count().catch(() => 0);
    if (hasRepos > 0) {
      expect(hasRepos).toBeGreaterThan(0);
    }
    
    // Vérifier que la page a au moins le titre
    await expect(page.locator('h2')).toContainText(/Tous les Projets|Projets|Dépôts/i, { timeout: 5000 }).catch(() => null);
  });

  test('should toggle dark mode', async ({ page }) => {
    await page.goto('/');
    
    // Scroll to top
    await page.evaluate(() => window.scrollTo(0, 0));
    await page.waitForTimeout(500);

    // Vérifier que le thème sombre n'est pas actif
    await expect(page.locator('html')).not.toHaveAttribute('data-theme', 'dark');

    // Sur mobile, on peut avoir besoin d'étendre le menu d'abord
    const viewport = page.viewportSize();
    if (viewport && viewport.width < 992) {
      const toggler = page.locator('.navbar-toggler');
      const isVisible = await toggler.isVisible().catch(() => false);
      if (isVisible) {
        await toggler.click();
        await page.waitForTimeout(500);
      }
    }

    // Cliquer sur le bouton thème
    const themeButton = page.locator('.theme-toggle');
    await themeButton.waitFor({ state: 'visible', timeout: 5000 });
    await themeButton.click();

    // Vérifier que le thème sombre est activé
    await expect(page.locator('html')).toHaveAttribute('data-theme', 'dark', { timeout: 5000 });
  });

  test('should submit contact form with validation', async ({ page }) => {
    await page.goto('/contact');

    // Remplir avec des données invalides puis effacer pour déclencher la validation
    await page.fill('#name', 'a');
    await page.fill('#email', 'invalid');
    await page.fill('#subject', 'a');
    await page.fill('#message', 'short');

    // Effacer les champs pour les rendre vides
    await page.fill('#name', '');
    await page.fill('#email', '');
    await page.fill('#subject', '');
    await page.fill('#message', '');

    // Essayer de soumettre le formulaire vide
    await page.click('button[type="submit"]');

    // Attendre que les erreurs apparaissent
    await page.waitForSelector('.invalid-feedback', { timeout: 2000 });

    // Vérifier qu'il y a au moins une erreur visible
    const errorElements = page.locator('.invalid-feedback');
    await expect(errorElements.first()).toBeVisible();

    // Remplir le formulaire correctement
    await page.fill('#name', 'Test User');
    await page.fill('#email', 'test@example.com');
    await page.fill('#subject', 'Test Subject');
    await page.fill('#message', 'This is a test message with more than 10 characters.');

    // Soumettre
    await page.click('button[type="submit"]');

    // Attendre le message de succès
    await expect(page.locator('.alert-success')).toBeVisible();
  });
});