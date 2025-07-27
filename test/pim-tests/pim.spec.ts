import { test, expect } from '../fixtures';
import { createEmployee } from './QA-20001.handler';
import { searchEmployee } from './QA-20002.handler';
import { updateEmployee } from './QA-20003.handler';
import { deleteEmployee } from './QA-20004.handler';
import { loginAsAdmin } from '../fixtures';

test.beforeEach(async ({ page }) => {
  await loginAsAdmin(page);
});

test('QA-20001: PIM - Create Employee', async ({ page }) => {
  await createEmployee(page);
});

test('QA-20002: PIM - Read/Search Employee', async ({ page }) => {
  await searchEmployee(page);
});

test('QA-20003: PIM - Update Employee', async ({ page }) => {
  await updateEmployee(page);
});

test('QA-20004: PIM - Delete Employee', async ({ page }) => {
  await deleteEmployee(page);
});
