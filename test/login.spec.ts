import { test, expect } from './fixtures';
import { LoginPage } from './pages/LoginPage';

test.describe('Login Scenario', () => {
  test('Positive: Login to OrangeHRM and verify dashboard', async ({ loggedInPage }) => {
    const loginPage = new LoginPage(loggedInPage);
    await loginPage.expectDashboardVisible();
  });

  test('Negative: Login fails with invalid credentials', async ({ page }) => {
    const loginPage = new LoginPage(page);
    await loginPage.goto();
    await loginPage.login('invalidUser', 'invalidPass');
    await expect(page.getByText('Invalid credentials')).toBeVisible();
  });
}); 