import { expect } from "@playwright/test";
import { createBdd } from "playwright-bdd";

const { Given, When, Then } = createBdd();

Given('I navigate to {string}', async ({ page }, url: string) => {
  // Navigate to the provided URL
  await page.goto(url);
});

Given('I click on {string}', async ({ page }, loginText: string) => {
  //click on login automation link
  await page.locator(`//a[text()='${loginText}']`).click();

});
  
Given('I enter E-Mail Address {string}', async ({ page }, email: string) => {
  // Enter email into the email input field
  const emailLocator = page.getByPlaceholder("Email") ;
  await emailLocator.waitFor({ state: 'visible' });
  await emailLocator.fill(email);
});

Given('I enter password {string}', async ({ page }, password: string) => {
  // Enter password into the password input field
  const passwordLocator = page.getByPlaceholder("Password");
  await passwordLocator.waitFor({ state: 'visible' });
  await passwordLocator.fill(password);
});

When('I click on the {string}', async ({ page }, buttonText: string) => {
  // Click on a button by its text
  const buttonLocator = page.locator("//button[normalize-space()='Sign in']");
 // await buttonLocator.waitFor({ state: 'visible' });
  await buttonLocator.click();
  // Wait for 2 seconds
await page.waitForTimeout(3000);

});

Then('I should verify url contains {string}', async ({ page }, partialUrl: string) => {
  const url = await page.url();
  console.log(url)
  await expect(page).toHaveURL(new RegExp(partialUrl));
});

Then('If user not able to login verify url contains {string}', async ({page}, partialUrl: string) => {
  // Step: Then If user not able to login verify url contains "/collections"
  // From: tests\login.feature:21:6
  const url = await page.url();
  console.log(url)
  await expect(page).toHaveURL(new RegExp(partialUrl));
});


//npx bddgen; npx playwright test --headed