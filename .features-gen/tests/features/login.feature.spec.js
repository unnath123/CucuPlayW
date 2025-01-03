// Generated from: tests\features\login.feature
import { test } from "../../../tests/fixtures/fixtures.ts";

test.describe('ecom website login', () => {

  test('Verify user is able to login with valid credentials', { tag: ['@login'] }, async ({ Given, ecomloginpage, And, When, Then }) => { 
    await Given('I navigate to "https://ultimateqa.com/automation"', null, { ecomloginpage }); 
    await And('I click on "Login automation"', null, { ecomloginpage }); 
    await And('I enter E-Mail Address "unni123@gmail.com"', null, { ecomloginpage }); 
    await And('I enter password "test12345678"', null, { ecomloginpage }); 
    await When('I click on the "Sign in"', null, { ecomloginpage }); 
    await Then('I should verify url contains "/collections"', null, { ecomloginpage }); 
  });

  test.describe('Verify user is able to login with following valid credentials', () => {

    test('Example #1', { tag: ['@login'] }, async ({ Given, ecomloginpage, And, When, Then, page }) => { 
      await Given('I navigate to "https://ultimateqa.com/automation"', null, { ecomloginpage }); 
      await And('I click on "Login automation"', null, { ecomloginpage }); 
      await And('I enter E-Mail Address "sandeep@gmail.com"', null, { ecomloginpage }); 
      await And('I enter password "sandeep1234567"', null, { ecomloginpage }); 
      await When('I click on the "Sign in"', null, { ecomloginpage }); 
      await Then('If user not able to login verify url contains "users/sign_in"', null, { page }); 
    });

    test('Example #2', { tag: ['@login'] }, async ({ Given, ecomloginpage, And, When, Then, page }) => { 
      await Given('I navigate to "https://ultimateqa.com/automation"', null, { ecomloginpage }); 
      await And('I click on "Login automation"', null, { ecomloginpage }); 
      await And('I enter E-Mail Address "darshan@gmail.com"', null, { ecomloginpage }); 
      await And('I enter password "darshan12345"', null, { ecomloginpage }); 
      await When('I click on the "Sign in"', null, { ecomloginpage }); 
      await Then('If user not able to login verify url contains "users/sign_in"', null, { page }); 
    });

    test('Example #3', { tag: ['@login'] }, async ({ Given, ecomloginpage, And, When, Then, page }) => { 
      await Given('I navigate to "https://ultimateqa.com/automation"', null, { ecomloginpage }); 
      await And('I click on "Login automation"', null, { ecomloginpage }); 
      await And('I enter E-Mail Address "lacchi@gmail.com"', null, { ecomloginpage }); 
      await And('I enter password "lacchi12345"', null, { ecomloginpage }); 
      await When('I click on the "Sign in"', null, { ecomloginpage }); 
      await Then('If user not able to login verify url contains "users/sign_in"', null, { page }); 
    });

  });

});

// == technical section ==

test.use({
  $test: ({}, use) => use(test),
  $uri: ({}, use) => use('tests\\features\\login.feature'),
  $bddFileData: ({}, use) => use(bddFileData),
});

const bddFileData = [ // bdd-data-start
  {"pwTestLine":6,"pickleLine":6,"tags":["@login"],"steps":[{"pwStepLine":7,"gherkinStepLine":7,"keywordOrig":"Given ","keywordType":"Context","stepMatchArguments":[{"group":{"start":14,"value":"\"https://ultimateqa.com/automation\"","children":[{"start":15,"value":"https://ultimateqa.com/automation","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]},{"pwStepLine":8,"gherkinStepLine":8,"keywordOrig":"And ","keywordType":"Context","stepMatchArguments":[{"group":{"start":11,"value":"\"Login automation\"","children":[{"start":12,"value":"Login automation","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]},{"pwStepLine":9,"gherkinStepLine":9,"keywordOrig":"And ","keywordType":"Context","stepMatchArguments":[{"group":{"start":23,"value":"\"unni123@gmail.com\"","children":[{"start":24,"value":"unni123@gmail.com","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]},{"pwStepLine":10,"gherkinStepLine":10,"keywordOrig":"And ","keywordType":"Context","stepMatchArguments":[{"group":{"start":17,"value":"\"test12345678\"","children":[{"start":18,"value":"test12345678","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]},{"pwStepLine":11,"gherkinStepLine":11,"keywordOrig":"When ","keywordType":"Action","stepMatchArguments":[{"group":{"start":15,"value":"\"Sign in\"","children":[{"start":16,"value":"Sign in","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]},{"pwStepLine":12,"gherkinStepLine":12,"keywordOrig":"Then ","keywordType":"Outcome","stepMatchArguments":[{"group":{"start":29,"value":"\"/collections\"","children":[{"start":30,"value":"/collections","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]}]},
  {"pwTestLine":17,"pickleLine":24,"tags":["@login"],"steps":[{"pwStepLine":18,"gherkinStepLine":16,"keywordOrig":"Given ","keywordType":"Context","stepMatchArguments":[{"group":{"start":14,"value":"\"https://ultimateqa.com/automation\"","children":[{"start":15,"value":"https://ultimateqa.com/automation","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]},{"pwStepLine":19,"gherkinStepLine":17,"keywordOrig":"And ","keywordType":"Context","stepMatchArguments":[{"group":{"start":11,"value":"\"Login automation\"","children":[{"start":12,"value":"Login automation","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]},{"pwStepLine":20,"gherkinStepLine":18,"keywordOrig":"And ","keywordType":"Context","stepMatchArguments":[{"group":{"start":23,"value":"\"sandeep@gmail.com\"","children":[{"start":24,"value":"sandeep@gmail.com","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]},{"pwStepLine":21,"gherkinStepLine":19,"keywordOrig":"And ","keywordType":"Context","stepMatchArguments":[{"group":{"start":17,"value":"\"sandeep1234567\"","children":[{"start":18,"value":"sandeep1234567","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]},{"pwStepLine":22,"gherkinStepLine":20,"keywordOrig":"When ","keywordType":"Action","stepMatchArguments":[{"group":{"start":15,"value":"\"Sign in\"","children":[{"start":16,"value":"Sign in","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]},{"pwStepLine":23,"gherkinStepLine":21,"keywordOrig":"Then ","keywordType":"Outcome","stepMatchArguments":[{"group":{"start":46,"value":"\"users/sign_in\"","children":[{"start":47,"value":"users/sign_in","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]}]},
  {"pwTestLine":26,"pickleLine":25,"tags":["@login"],"steps":[{"pwStepLine":27,"gherkinStepLine":16,"keywordOrig":"Given ","keywordType":"Context","stepMatchArguments":[{"group":{"start":14,"value":"\"https://ultimateqa.com/automation\"","children":[{"start":15,"value":"https://ultimateqa.com/automation","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]},{"pwStepLine":28,"gherkinStepLine":17,"keywordOrig":"And ","keywordType":"Context","stepMatchArguments":[{"group":{"start":11,"value":"\"Login automation\"","children":[{"start":12,"value":"Login automation","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]},{"pwStepLine":29,"gherkinStepLine":18,"keywordOrig":"And ","keywordType":"Context","stepMatchArguments":[{"group":{"start":23,"value":"\"darshan@gmail.com\"","children":[{"start":24,"value":"darshan@gmail.com","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]},{"pwStepLine":30,"gherkinStepLine":19,"keywordOrig":"And ","keywordType":"Context","stepMatchArguments":[{"group":{"start":17,"value":"\"darshan12345\"","children":[{"start":18,"value":"darshan12345","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]},{"pwStepLine":31,"gherkinStepLine":20,"keywordOrig":"When ","keywordType":"Action","stepMatchArguments":[{"group":{"start":15,"value":"\"Sign in\"","children":[{"start":16,"value":"Sign in","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]},{"pwStepLine":32,"gherkinStepLine":21,"keywordOrig":"Then ","keywordType":"Outcome","stepMatchArguments":[{"group":{"start":46,"value":"\"users/sign_in\"","children":[{"start":47,"value":"users/sign_in","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]}]},
  {"pwTestLine":35,"pickleLine":26,"tags":["@login"],"steps":[{"pwStepLine":36,"gherkinStepLine":16,"keywordOrig":"Given ","keywordType":"Context","stepMatchArguments":[{"group":{"start":14,"value":"\"https://ultimateqa.com/automation\"","children":[{"start":15,"value":"https://ultimateqa.com/automation","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]},{"pwStepLine":37,"gherkinStepLine":17,"keywordOrig":"And ","keywordType":"Context","stepMatchArguments":[{"group":{"start":11,"value":"\"Login automation\"","children":[{"start":12,"value":"Login automation","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]},{"pwStepLine":38,"gherkinStepLine":18,"keywordOrig":"And ","keywordType":"Context","stepMatchArguments":[{"group":{"start":23,"value":"\"lacchi@gmail.com\"","children":[{"start":24,"value":"lacchi@gmail.com","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]},{"pwStepLine":39,"gherkinStepLine":19,"keywordOrig":"And ","keywordType":"Context","stepMatchArguments":[{"group":{"start":17,"value":"\"lacchi12345\"","children":[{"start":18,"value":"lacchi12345","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]},{"pwStepLine":40,"gherkinStepLine":20,"keywordOrig":"When ","keywordType":"Action","stepMatchArguments":[{"group":{"start":15,"value":"\"Sign in\"","children":[{"start":16,"value":"Sign in","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]},{"pwStepLine":41,"gherkinStepLine":21,"keywordOrig":"Then ","keywordType":"Outcome","stepMatchArguments":[{"group":{"start":46,"value":"\"users/sign_in\"","children":[{"start":47,"value":"users/sign_in","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]}]},
]; // bdd-data-end