import { expect, test } from '../fixtures';
import { PIMPage } from '../pages/PIMPage';
import { NavigationUrls } from '../pages/navigation';

function generateUniqueLastName() {
  return 'QA-20003-Test-' + Math.random().toString(36).substring(2, 10);
}

export const updateEmployee = async (page) => {
  const pim = new PIMPage(page);
  let employeeFirstName, employeeLastName, updatedLastName;

  await test.step('Step 1: Create an employee', async () => {
    await pim.pimLink.click();
    employeeFirstName = 'John';
    employeeLastName = generateUniqueLastName();
    await pim.addButton.click();
    await pim.firstNameInput.fill(employeeFirstName);
    await pim.lastNameInput.fill(employeeLastName);
    await pim.saveButton.click();
  });

  await test.step('Step 2: Assert an employee has been created', async () => {
    await expect(pim.personalDetailsText).toBeVisible({ timeout: 10000 });
  });

  await test.step('Step 3: Find the created employee', async () => {
    await page.goto(NavigationUrls.PIMDashboard);
    await expect(pim.pimheading).toBeVisible();
    await pim.pimLink.click();
    await pim.employeeNameInput.fill(`${employeeLastName}`);
    await pim.searchButton.click();
  });

  await test.step('Step 4: Assert the employee appears in the search results', async () => {
    await expect(page.getByText(employeeFirstName)).toBeVisible({ timeout: 5000 });
    await expect(page.getByText(employeeLastName)).toBeVisible({ timeout: 5000 });
  });

  await test.step('Step 5: Click on the last name cell to go to the employee details', async () => {
    await page.getByRole('cell', { name: employeeLastName }).click();
  });

  await test.step('Step 6: Update the last name', async () => {
    updatedLastName = 'updated';

    await expect(page.getByRole('heading', { name: 'Personal Details' })).toBeVisible({ timeout: 5000 });
    await expect(pim.lastNameInput).toBeVisible({ timeout: 5000 });
    await pim.lastNameInput.fill(updatedLastName);
    await pim.saveButton.click();
  });

  await test.step('Step 7: Assert the update was successful', async () => {
    await expect(page.getByText('Successfully Updated')).toBeVisible({ timeout: 5000 });
    // Wait for the input to be updated after save
    await page.reload();
    await expect(page.getByRole('textbox', { name: 'Last Name' })).toHaveValue(updatedLastName, { timeout: 5000 });
    await expect(page.getByText(updatedLastName)).toBeVisible({ timeout: 5000 });
  });
};
