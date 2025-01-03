import { expect } from "@playwright/test";
import { createBdd } from "playwright-bdd";
import { test } from "../fixtures/fixtures";

const { Given, When, Then } = createBdd(test);

Given('I navigate to {string}', async ({ ecomloginpage }, url: string) => {
  // Navigate to the provided URL
  await ecomloginpage.navigateToUrl(url);
});

Given('I click on {string}', async ({ ecomloginpage }, loginText: string) => {
  //click on login automation link
  //await page.locator(`//a[text()='${loginText}']`).click();
  await ecomloginpage.clickonAutomationLink()

});
  
Given('I enter E-Mail Address {string}', async ({ ecomloginpage }, email: string) => {
  // Enter email into the email input field
  // const emailLocator = page.getByPlaceholder("Email") ;
  // await emailLocator.waitFor({ state: 'visible' });
  // await emailLocator.fill(email);
  await ecomloginpage.EnterEmail(email);
});

Given('I enter password {string}', async ({ ecomloginpage }, password: string) => {
  // Enter password into the password input field
  // const passwordLocator = page.getByPlaceholder("Password");
  // await passwordLocator.waitFor({ state: 'visible' });
  // await passwordLocator.fill(password);
  await ecomloginpage.EnterPassword(password);
});

When('I click on the {string}', async ({ ecomloginpage }, buttonText: string) => {
  // Click on a button by its text
//   const buttonLocator = page.locator("//button[normalize-space()='Sign in']");
//  // await buttonLocator.waitFor({ state: 'visible' });
//   await buttonLocator.click();
  await ecomloginpage.clickSignIn()

  // Wait for 2 seconds
  // await ecomloginpage.waitForTimeout(3000);

});

Then('I should verify url contains {string}', async ({ ecomloginpage }, partialUrl: string) => {
  // const url = await page.url();
  // console.log(url)
  // await expect(page).toHaveURL(new RegExp(partialUrl));
  await ecomloginpage.verifyurl(partialUrl);
});

Then('If user not able to login verify url contains {string}', async ({page}, partialUrl: string) => {
  // Step: Then If user not able to login verify url contains "/collections"
  // From: tests\login.feature:21:6
  const url = await page.url();
  console.log(url)
  await expect(page).toHaveURL(new RegExp(partialUrl));
});


//npx bddgen; npx playwright test --headed