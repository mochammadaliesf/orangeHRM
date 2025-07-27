import { expect } from '../fixtures';
import { AdminPage } from '../pages/AdminPage';

// QA-10004: Admin - Delete User
export const deleteUser = async (page) => {
  const admin = new AdminPage(page);
  await admin.adminLink.click();
  await admin.searchUsernameInput.fill('testuser123');
  await admin.searchButton.click();
  await admin.userCheckbox.check();
  await admin.deleteButton.click();
  await admin.confirmDeleteButton.click();
  await expect(admin.successText).toBeVisible();
};
