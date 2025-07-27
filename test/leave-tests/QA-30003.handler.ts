import { expect } from '../fixtures';
import { LeavePage } from '../pages/LeavePage';

export const approveOrRejectLeave = async (page) => {
  const leave = new LeavePage(page);
  await leave.leaveLink.click();
  await leave.leaveListLink.click();
  await leave.searchButton.click();
  await leave.checkbox.check();
  await leave.approveButton.click(); // or leave.rejectButton.click();
  await expect(leave.successText).toBeVisible();
};
