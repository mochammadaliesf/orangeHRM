import { expect } from '../fixtures';
import { AdminPage } from '../pages/AdminPage';

// QA-10003: Admin - Update User
export const updateUser = async (page) => {
  const admin = new AdminPage(page);
  await admin.adminLink.click();
  await admin.searchUsernameInput.fill('testuser123');
  await admin.searchButton.click();
  await admin.editButton.first().click();
  await admin.statusSelect.selectOption('Disabled');
  await admin.saveButton.click();
  await expect(admin.successText).toBeVisible();
};
