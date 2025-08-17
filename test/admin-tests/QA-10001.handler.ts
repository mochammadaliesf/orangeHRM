import { expect } from '../fixtures';
import { AdminPage } from '../pages/AdminPage';

// QA-10001: Admin - Create User
export const createUser = async (page) => {
  const admin = new AdminPage(page);
  await admin.adminLink.click();
  await admin.addButton.click();

  // Assert that the Add User form is visible
  await expect(admin.addUserHeader).toBeVisible();
  await expect(admin.userRoleSelect).toBeVisible();

  await admin.userRoleSelect.selectOption('ESS');
  await admin.employeeNameInput.fill('Linda Anderson');
  await admin.usernameInput.fill('testuser123');
  await admin.statusSelect.selectOption('Enabled');
  await admin.passwordInput.fill('Password123!');
  await admin.confirmPasswordInput.fill('Password123!');
  await admin.saveButton.click();
  await expect(admin.successText).toBeVisible();
};
