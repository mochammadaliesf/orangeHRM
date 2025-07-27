import { expect } from '../fixtures';
import { LeavePage } from '../pages/LeavePage';

export const cancelLeave = async (page) => {
  const leave = new LeavePage(page);
  await leave.leaveLink.click();
  await leave.myLeaveLink.click();
  await leave.checkbox.check();
  await leave.cancelButton.click(); // or leave.deleteButton.click();
  await expect(leave.cancelledText).toBeVisible();
};
