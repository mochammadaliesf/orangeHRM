import { Page, Locator } from '@playwright/test';

export class LeavePage {
  readonly page: Page;
  readonly leaveLink: Locator;
  readonly applyButton: Locator;
  readonly leaveTypeSelect: Locator;
  readonly fromDateInput: Locator;
  readonly toDateInput: Locator;
  readonly applySubmitButton: Locator;
  readonly myLeaveLink: Locator;
  readonly leaveBalanceText: Locator;
  readonly leaveListLink: Locator;
  readonly searchButton: Locator;
  readonly checkbox: Locator;
  readonly approveButton: Locator;
  readonly rejectButton: Locator;
  readonly cancelButton: Locator;
  readonly deleteButton: Locator;
  readonly confirmDeleteButton: Locator;
  readonly successText: Locator;
  readonly approvedText: Locator;
  readonly rejectedText: Locator;
  readonly cancelledText: Locator;

  constructor(page: Page) {
    this.page = page;
    // Use semantic selectors only
    this.leaveLink = page.getByRole('link', { name: 'Leave' });
    this.applyButton = page.getByRole('button', { name: 'Apply' });
    this.leaveTypeSelect = page.getByRole('combobox', { name: 'Leave Type' });
    this.fromDateInput = page.getByRole('textbox', { name: 'From Date' });
    this.toDateInput = page.getByRole('textbox', { name: 'To Date' });
    this.applySubmitButton = page.getByRole('button', { name: 'Apply' });
    this.myLeaveLink = page.getByRole('link', { name: 'My Leave' });
    this.leaveBalanceText = page.getByRole('heading', { name: /Leave Balance/i });
    this.leaveListLink = page.getByRole('link', { name: 'Leave List' });
    this.searchButton = page.getByRole('button', { name: 'Search' });
    this.checkbox = page.getByRole('checkbox').first();
    this.approveButton = page.getByRole('button', { name: 'Approve' });
    this.rejectButton = page.getByRole('button', { name: 'Reject' });
    this.cancelButton = page.getByRole('button', { name: 'Cancel' });
    this.deleteButton = page.getByRole('button', { name: 'Delete' });
    this.confirmDeleteButton = page.getByRole('button', { name: /Yes, Delete/i });
    this.successText = page.getByRole('status', { name: /Success/i });
    this.approvedText = page.getByText('Approved');
    this.rejectedText = page.getByText('Rejected');
    this.cancelledText = page.getByText('Cancelled');
  }
}
