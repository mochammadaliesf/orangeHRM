import { test as base, expect, Page } from '@playwright/test';
import { LoginPage } from './pages/LoginPage';

// Extend base test with a login fixture
const test = base.extend<{ loggedInPage: Page }>({
  loggedInPage: async ({ page }, use) => {
    const loginPage = new LoginPage(page);
    await loginPage.goto();
    await loginPage.login('Admin', 'admin123');
    await use(page);
  },
});

export { test, expect }; 