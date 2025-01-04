import { createBdd } from "playwright-bdd";
import { test } from "../fixtures/fixtures";

const { Given, When, Then } = createBdd(test);

  Given('I navigate to home page', async ({ecomloginpage}) => {
    // Step: Given I navigate to home page
    // From: tests\features\environment.feature:11:3
    console.log(process.env.URL);
    await ecomloginpage.navigateToUrl(process.env.URL)
  });
  
  Given('I enter E-Mail Address and Password', async ({ecomloginpage}) => {
    // Step: And I enter E-Mail Address and Password
    // From: tests\features\environment.feature:12:3
    await ecomloginpage.EnterEmail(process.env.EMAIL);
    await ecomloginpage.EnterPassword(process.env.PASSWORD)
  });
  