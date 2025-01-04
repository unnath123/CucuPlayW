// Generated from: tests\features\changeAccountInfo.feature
import { test } from "../../../tests/fixtures/fixtures.ts";

test.describe('Change account info', () => {

  test('Login to a account and update some information and save changes', { tag: ['@changeAccountInfo'] }, async ({ Given, ecomloginpage, And, When, Then, updateAccountInfo, page }) => { 
    await Given('I navigate to "https://ultimateqa.com/automation"', null, { ecomloginpage }); 
    await And('I click on "Login automation"', null, { ecomloginpage }); 
    await And('I enter E-Mail Address "unni123@gmail.com"', null, { ecomloginpage }); 
    await And('I enter password "test12345678"', null, { ecomloginpage }); 
    await When('I click on the "Sign in"', null, { ecomloginpage }); 
    await Then('I should verify url contains "/collections"', null, { ecomloginpage }); 
    await When('I click on the my profile icon', null, { updateAccountInfo }); 
    await And('I click on the element in dropdown "My Account"', null, { page }); 
    await Then('I verify that the Account update page URL contains "/account"', null, { page }); 
    await And('I enter the Company details as "Google"', null, { page }); 
    await And('I enter the Professional details as "Software Engineer II"', null, { page }); 
    await When('I click on the save button "Save Changes"', null, { page }); 
  });

});

// == technical section ==

test.use({
  $test: ({}, use) => use(test),
  $uri: ({}, use) => use('tests\\features\\changeAccountInfo.feature'),
  $bddFileData: ({}, use) => use(bddFileData),
});

const bddFileData = [ // bdd-data-start
  {"pwTestLine":6,"pickleLine":6,"tags":["@changeAccountInfo"],"steps":[{"pwStepLine":7,"gherkinStepLine":7,"keywordOrig":"Given ","keywordType":"Context","stepMatchArguments":[{"group":{"start":14,"value":"\"https://ultimateqa.com/automation\"","children":[{"start":15,"value":"https://ultimateqa.com/automation","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]},{"pwStepLine":8,"gherkinStepLine":8,"keywordOrig":"And ","keywordType":"Context","stepMatchArguments":[{"group":{"start":11,"value":"\"Login automation\"","children":[{"start":12,"value":"Login automation","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]},{"pwStepLine":9,"gherkinStepLine":9,"keywordOrig":"And ","keywordType":"Context","stepMatchArguments":[{"group":{"start":23,"value":"\"unni123@gmail.com\"","children":[{"start":24,"value":"unni123@gmail.com","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]},{"pwStepLine":10,"gherkinStepLine":10,"keywordOrig":"And ","keywordType":"Context","stepMatchArguments":[{"group":{"start":17,"value":"\"test12345678\"","children":[{"start":18,"value":"test12345678","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]},{"pwStepLine":11,"gherkinStepLine":11,"keywordOrig":"When ","keywordType":"Action","stepMatchArguments":[{"group":{"start":15,"value":"\"Sign in\"","children":[{"start":16,"value":"Sign in","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]},{"pwStepLine":12,"gherkinStepLine":12,"keywordOrig":"Then ","keywordType":"Outcome","stepMatchArguments":[{"group":{"start":29,"value":"\"/collections\"","children":[{"start":30,"value":"/collections","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]},{"pwStepLine":13,"gherkinStepLine":13,"keywordOrig":"When ","keywordType":"Action","stepMatchArguments":[]},{"pwStepLine":14,"gherkinStepLine":14,"keywordOrig":"And ","keywordType":"Action","stepMatchArguments":[{"group":{"start":35,"value":"\"My Account\"","children":[{"start":36,"value":"My Account","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]},{"pwStepLine":15,"gherkinStepLine":15,"keywordOrig":"Then ","keywordType":"Outcome","stepMatchArguments":[{"group":{"start":51,"value":"\"/account\"","children":[{"start":52,"value":"/account","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]},{"pwStepLine":16,"gherkinStepLine":16,"keywordOrig":"And ","keywordType":"Outcome","stepMatchArguments":[{"group":{"start":31,"value":"\"Google\"","children":[{"start":32,"value":"Google","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]},{"pwStepLine":17,"gherkinStepLine":17,"keywordOrig":"And ","keywordType":"Outcome","stepMatchArguments":[{"group":{"start":36,"value":"\"Software Engineer II\"","children":[{"start":37,"value":"Software Engineer II","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]},{"pwStepLine":18,"gherkinStepLine":18,"keywordOrig":"When ","keywordType":"Action","stepMatchArguments":[{"group":{"start":27,"value":"\"Save Changes\"","children":[{"start":28,"value":"Save Changes","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]}]},
]; // bdd-data-end