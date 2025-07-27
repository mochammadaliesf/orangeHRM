import { Page, Locator } from '@playwright/test';

export class PIMPage {
  readonly page: Page;
  readonly pimLink: Locator;
  readonly addButton: Locator;
  readonly firstNameInput: Locator;
  readonly lastNameInput: Locator;
  readonly saveButton: Locator;
  readonly pimheading: Locator;
  readonly employeeNameInput: Locator;
  readonly searchButton: Locator;
  readonly employeeLink: (name: string) => Locator;
  readonly otherIdInput: Locator;
  readonly checkbox: Locator;
  readonly deleteButton: Locator;
  readonly confirmDeleteButton: Locator;
  readonly successText: Locator;
  readonly personalDetailsText: Locator;

  constructor(page: Page) {
    this.page = page;
    this.pimLink = page.getByRole('link', { name: 'PIM' });
    this.addButton = page.getByRole('button', { name: 'Add' });

    this.firstNameInput = page.getByRole('textbox', { name: 'First Name' });
    this.lastNameInput = page.getByRole('textbox', { name: 'Last Name' });
    this.saveButton = page.getByRole('button', { name: 'Save' });
    
    this.pimheading = page.getByRole('heading', { name: 'Employee Information' })
    this.employeeNameInput = page.getByRole('textbox', { name: 'Type for hints...' }).first();
    this.searchButton = page.getByRole('button', { name: 'Search' });

    this.employeeLink = (name: string) => page.getByRole('link', { name });
    this.otherIdInput = page.getByRole('textbox', { name: 'Other Id' });
    this.checkbox = page.getByRole('checkbox').first();
    this.deleteButton = page.getByRole('button', { name: 'Delete' });
    this.confirmDeleteButton = page.getByRole('button', { name: /Yes, Delete/i });
    this.successText = page.getByRole('status', { name: /Success/i });
    this.personalDetailsText = page.getByRole('heading', { name: 'Personal Details' });
  }
}
