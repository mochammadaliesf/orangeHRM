import { expect } from '../fixtures';
import { PIMPage } from '../pages/PIMPage';

export const deleteEmployee = async (page) => {
  const pim = new PIMPage(page);
  await pim.pimLink.click();
  await pim.employeeNameInput.fill('John Doe');
  await pim.searchButton.click();
  await pim.checkbox.check();
  await pim.deleteButton.click();
  await pim.confirmDeleteButton.click();
  await expect(pim.successText).toBeVisible();
};
