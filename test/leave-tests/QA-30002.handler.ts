import { expect } from '../fixtures';
import { LeavePage } from '../pages/LeavePage';

export const viewLeaveBalance = async (page) => {
  const leave = new LeavePage(page);
  await leave.leaveLink.click();
  await leave.myLeaveLink.click();
  await expect(leave.leaveBalanceText).toBeVisible();
};
