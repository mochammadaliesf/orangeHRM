import { test, expect } from '../fixtures';
import { applyLeave } from './QA-30001.handler';
import { viewLeaveBalance } from './QA-30002.handler';
import { approveOrRejectLeave } from './QA-30003.handler';
import { cancelLeave } from './QA-30004.handler';
import { loginAsAdmin } from '../fixtures';

test.beforeEach(async ({ page }) => {
  await loginAsAdmin(page);
});

test('QA-30001: Leave - Apply for Leave', async ({ page }) => {
  await applyLeave(page);
});

test('QA-30002: Leave - View Leave Balance', async ({ page }) => {
  await viewLeaveBalance(page);
});

test('QA-30003: Leave - Approve/Reject Leave', async ({ page }) => {
  await approveOrRejectLeave(page);
});

test('QA-30004: Leave - Cancel Leave', async ({ page }) => {
  await cancelLeave(page);
});
