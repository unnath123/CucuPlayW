// Generated from: login.feature
import { test } from "playwright-bdd";

test.describe('ecom website login', () => {

  test('Verify user is able to login with valid credentials', { tag: ['@login'] }, async ({ Given, page, And, When }) => { 
    await Given('I navigate to "https://demo.nopcommerce.com/login?returnUrl=%2F"', null, { page }); 
    await And('I click on "Log in"', null, { page }); 
    await And('I enter E-Mail Address "unni@gmail.com"', null, { page }); 
    await And('I enter password "test123"', null, { page }); 
    await When('I click on the "Log in"', null, { page }); 
  });

});

// == technical section ==

test.use({
  $test: ({}, use) => use(test),
  $uri: ({}, use) => use('login.feature'),
  $bddFileData: ({}, use) => use(bddFileData),
});

const bddFileData = [ // bdd-data-start
  {"pwTestLine":6,"pickleLine":6,"tags":["@login"],"steps":[{"pwStepLine":7,"gherkinStepLine":7,"keywordOrig":"Given ","keywordType":"Context","stepMatchArguments":[{"group":{"start":14,"value":"\"https://demo.nopcommerce.com/login?returnUrl=%2F\"","children":[{"start":15,"value":"https://demo.nopcommerce.com/login?returnUrl=%2F","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]},{"pwStepLine":8,"gherkinStepLine":8,"keywordOrig":"And ","keywordType":"Context","stepMatchArguments":[{"group":{"start":11,"value":"\"Log in\"","children":[{"start":12,"value":"Log in","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]},{"pwStepLine":9,"gherkinStepLine":9,"keywordOrig":"And ","keywordType":"Context","stepMatchArguments":[{"group":{"start":23,"value":"\"unni@gmail.com\"","children":[{"start":24,"value":"unni@gmail.com","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]},{"pwStepLine":10,"gherkinStepLine":10,"keywordOrig":"And ","keywordType":"Context","stepMatchArguments":[{"group":{"start":17,"value":"\"test123\"","children":[{"start":18,"value":"test123","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]},{"pwStepLine":11,"gherkinStepLine":11,"keywordOrig":"When ","keywordType":"Action","stepMatchArguments":[{"group":{"start":15,"value":"\"Log in\"","children":[{"start":16,"value":"Log in","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]}]},
]; // bdd-data-end