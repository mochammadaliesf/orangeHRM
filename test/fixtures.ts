import { test as base, expect, Page } from '@playwright/test';
import { LoginPage } from './pages/LoginPage';

export const loginAsAdmin = async (page: Page) => {
  const loginPage = new LoginPage(page);
  await loginPage.goto();
  await loginPage.login('Admin', 'admin123');
};

export { base as test, expect };