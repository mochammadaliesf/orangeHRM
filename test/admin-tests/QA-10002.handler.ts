import { expect } from '../fixtures';
import { AdminPage } from '../pages/AdminPage';

// QA-10002: Admin - Read/Search User
export const searchUser = async (page) => {
  const admin = new AdminPage(page);
  await admin.adminLink.click();
  await admin.searchUsernameInput.fill('testuser123');
  await admin.searchButton.click();
  await expect(page.getByText('testuser123')).toBeVisible();
};
