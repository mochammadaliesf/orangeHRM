import { Page, Locator } from '@playwright/test';

export class AdminPage {
  readonly page: Page;
  readonly adminLink: Locator;
  readonly addButton: Locator;
  readonly userRoleSelect: Locator;
  readonly employeeNameInput: Locator;
  readonly usernameInput: Locator;
  readonly statusSelect: Locator;
  readonly passwordInput: Locator;
  readonly confirmPasswordInput: Locator;
  readonly saveButton: Locator;
  readonly searchButton: Locator;
  readonly searchUsernameInput: Locator;
  readonly editButton: Locator;
  readonly deleteButton: Locator;
  readonly confirmDeleteButton: Locator;
  readonly userCheckbox: Locator;
  readonly successText: Locator;

  constructor(page: Page) {
    this.page = page;
    this.adminLink = page.getByRole('link', { name: 'Admin' });
    this.addButton = page.getByRole('button', { name: 'Add' });
    this.userRoleSelect = page.getByLabel('User Role');
    this.employeeNameInput = page.getByLabel('Employee Name');
    this.usernameInput = page.getByLabel('Username');
    this.statusSelect = page.getByLabel('Status');
    this.passwordInput = page.getByLabel('Password');
    this.confirmPasswordInput = page.getByLabel('Confirm Password');
    this.saveButton = page.getByRole('button', { name: 'Save' });
    this.searchButton = page.getByRole('button', { name: 'Search' });
    this.searchUsernameInput = page.getByLabel('Username');
    this.editButton = page.getByRole('button', { name: 'Edit' });
    this.deleteButton = page.getByRole('button', { name: 'Delete' });
    this.confirmDeleteButton = page.getByRole('button', { name: /Yes, Delete/i });
    this.userCheckbox = page.getByRole('checkbox').first();
    this.successText = page.getByRole('status', { name: /Success/i });
  }
}
