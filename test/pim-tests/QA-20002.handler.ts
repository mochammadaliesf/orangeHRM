import { expect } from '../fixtures';
import { PIMPage } from '../pages/PIMPage';
import { NavigationUrls } from '../pages/navigation';

export const searchEmployee = async (page) => {
  const pim = new PIMPage(page);
  await pim.pimLink.click();

  // Create a unique employee
  const employeeFirstName = 'John';
  const employeeLastName = `QA-20002-${Date.now()}`;
  await pim.addButton.click();
  await pim.firstNameInput.fill(employeeFirstName);
  await pim.lastNameInput.fill(employeeLastName);
  await pim.saveButton.click();
  await expect(pim.personalDetailsText).toBeVisible({ timeout: 10000 });

  // Now search for the created employee
  await page.goto(NavigationUrls.PIMDashboard);
  await expect(pim.pimheading).toBeVisible();
  await pim.pimLink.click();
  await pim.employeeNameInput.fill(`${employeeLastName}`);
  await pim.searchButton.click();
  // Assertion: use getByText for first and last name
  // await expect(page.getByText(employeeFirstName)).toBeVisible({ timeout: 5000 });
  await expect(page.getByText(employeeLastName)).toBeVisible({ timeout: 5000 });
};
