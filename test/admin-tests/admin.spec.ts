import { test, expect } from '../fixtures';
import { createUser } from './QA-10001.handler';
import { searchUser } from './QA-10002.handler';
import { updateUser } from './QA-10003.handler';
import { deleteUser } from './QA-10004.handler';
import { loginAsAdmin } from '../fixtures';

test.beforeEach(async ({ page }) => {
  await loginAsAdmin(page);
});

test('QA-10001: Admin - Create User', async ({ page }) => {
  await createUser(page);
});

test('QA-10002: Admin - Read/Search User', async ({ page }) => {
  await searchUser(page);
});

test('QA-10003: Admin - Update User', async ({ page }) => {
  await updateUser(page);
});

test('QA-10004: Admin - Delete User', async ({ page }) => {
  await deleteUser(page);
});
