import { test, expect } from '@playwright/test';
import { fa, faker } from '@faker-js/faker';


test('NewLedge Campaign Creation', async ({ page }) => {
  const clientName = faker.person.firstName()

  await page.goto('https://client-event-management.auth.eu-west-1.amazoncognito.com/login?response_type=token&client_id=5896ns2p4pi7h451nctpai57k2&redirect_uri=https://registration.new-ledge.com/');
  await page.getByRole('button', { name: 'Newledge' }).click();
  await page.getByRole('textbox', { name: 'Email or phone' }).pressSequentially('qa-user@new-ledge.com');
  await page.getByRole('button', { name: 'Next' }).click();
  await page.getByRole('textbox', { name: 'Enter your password' }).pressSequentially('1!:8o2x4XZTn');
  await page.getByRole('button', { name: 'Next' }).click();
  await expect(page.locator('header img')).toBeVisible();
  await page.getByRole('button', { name: 'Add Campaign' }).click();
  await expect(page.getByText('Campaign PreferencesClient')).toBeVisible();
  await page.getByRole('textbox', { name: 'Client Name' }).fill(clientName);
  await page.getByRole('textbox', { name: 'Campaign Description' }).fill(faker.lorem.sentence());
  await page.getByRole('textbox', { name: 'Admin Email Address' }).click();
  await page.getByRole('textbox', { name: 'Admin Email Address' }).fill(faker.internet.email());
  await page.getByRole('button', { name: 'Add Campaign' }).click();
  await expect(page.getByRole('article')).toBeVisible();
  await expect(page.getByText('EditAdd')).toBeVisible();
  await page.locator('header div').nth(4).click();
  await expect(page.getByText(clientName)).toBeVisible();
});