import { expect } from '../fixtures';
import { PIMPage } from '../pages/PIMPage';

export const createEmployee = async (page) => {
  // Navigate to PIM page and create a new employee

  const employeeFirstName = "John";
  const employeeLastName = `Doe-${Date.now()}`;

  const pim = new PIMPage(page);
  await pim.pimLink.click();
  await pim.addButton.click();
  await pim.firstNameInput.fill(employeeFirstName);
  await pim.lastNameInput.fill(employeeLastName);
  await pim.saveButton.click();

  // Search for the newly created employee
  await expect(pim.personalDetailsText).toBeVisible({ timeout: 10000 });
  await expect(page.getByText(`${employeeFirstName} ${employeeLastName}`)).toBeVisible();
};
