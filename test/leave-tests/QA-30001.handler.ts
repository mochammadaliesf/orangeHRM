import { expect } from '../fixtures';
import { LeavePage } from '../pages/LeavePage';

export const applyLeave = async (page) => {
  const leave = new LeavePage(page);
  await leave.leaveLink.click();
  await leave.applyButton.click();
  await leave.leaveTypeSelect.selectOption({ index: 1 });
  await leave.fromDateInput.fill('2025-08-01');
  await leave.toDateInput.fill('2025-08-01');
  await leave.applySubmitButton.click();
  await expect(leave.successText).toBeVisible();
};
