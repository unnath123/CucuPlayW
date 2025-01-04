import { expect } from "@playwright/test";
import { createBdd } from "playwright-bdd";
import { test } from "../fixtures/fixtures";

const { Given, When, Then } = createBdd(test);

  When('I click on the my profile icon', async ({updateAccountInfo}) => {
    // Step: When I click on the my profile icon
    // From: tests\features\changeAccountInfo.feature:13:5
    // await page.locator("//button[normalize-space()='Unnath P']").click();
    await updateAccountInfo.clickonProfileIcon()
  });
  
  When('I click on the element in dropdown {string}', async ({page}, arg: string) => {
    // Step: And I click on the element in dropdown "My Account"
    // From: tests\features\changeAccountInfo.feature:14:5
    await page.locator("//a[@href='/account']").click()

  });
  Then('I verify that the Account update page URL contains {string}', async ({page}, arg: string) => {
    // Step: Then I verify that the Account update page URL contains "/account"
    // From: tests\features\changeAccountInfo.feature:14:5
    await expect(page).toHaveURL(new RegExp(arg))
    
  });
  
  Then('I enter the Company details as {string}', async ({page}, company: string) => {
    // Step: And I enter the Company details as "Accenture"
    // From: tests\features\changeAccountInfo.feature:15:5
    await page.locator("//input[@id='user[profile_attributes][company]']").fill(company)

  });
  
  Then('I enter the Professional details as {string}', async ({page}, profession: string) => {
    // Step: And I enter the Professional details as "Software Engineer"
    // From: tests\features\changeAccountInfo.feature:16:5   
    await page.locator("//input[@id='user[profile_attributes][headline]']").fill(profession)                
  });
  When('I click on the save button {string}', async ({page}, arg: string) => {
    // Step: When I click on the save button "Save Changes"
    // From: tests\features\changeAccountInfo.feature:18:5
    await page.locator("//input[@value='Save Changes']").click()
  });