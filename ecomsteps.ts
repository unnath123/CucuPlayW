import { expect } from "@playwright/test";
import { createBdd } from "playwright-bdd";

const { Given, When, Then } = createBdd();

Given('I navigate to {string}', async ({ page }, url: string) => {
  // Navigate to the provided URL
  await page.goto(url);
});

Given('I click on {string}', async ({ page }, linkText: string) => {
    // console.log(`Attempting to click on link with text: ${linkText}`);
    const linkLocator = page.locator(`//a[normalize-space()='${linkText}']`);
    await linkLocator.click();
  });
  
Given('I enter E-Mail Address {string}', async ({ page }, email: string) => {
  // Enter email into the email input field
  const emailLocator = page.locator("//input[@id='Email']");
  await emailLocator.waitFor({ state: 'visible' });
  await emailLocator.fill(email);
});

Given('I enter password {string}', async ({ page }, password: string) => {
  // Enter password into the password input field
  const passwordLocator = page.locator("//input[@id='Password']");
  await passwordLocator.waitFor({ state: 'visible' });
  await passwordLocator.fill(password);
});

When('I click on the {string}', async ({ page }, buttonText: string) => {
  // Click on a button by its text
  const buttonLocator = page.locator(`//button[contains(text(), '${buttonText}')]`);
  await buttonLocator.waitFor({ state: 'visible' });
  await buttonLocator.click();
  // Wait for 2 seconds
await page.waitForTimeout(3000);

});

// Uncomment if URL verification is needed
// Then('I should verify url contains {string}', async ({ page }, partialUrl: string) => {
//   await expect(page).toHaveURL(new RegExp(partialUrl));
// });
