// Generated from: tests\features\environment.feature
import { test } from "../../../tests/fixtures/fixtures.ts";

test.describe.only('Verify login with different enviroment', () => {

  test.only('Verify user is able to login with dev, qa, and prod', { tag: ['@only'] }, async ({ Given, ecomloginpage, And, When, Then }) => { 
    await Given('I navigate to home page', null, { ecomloginpage }); 
    await And('I enter E-Mail Address and Password', null, { ecomloginpage }); 
    await When('I click on the "Sign in"', null, { ecomloginpage }); 
    await Then('I should verify url contains "/collections"', null, { ecomloginpage }); 
  });

});

// == technical section ==

test.use({
  $test: ({}, use) => use(test),
  $uri: ({}, use) => use('tests\\features\\environment.feature'),
  $bddFileData: ({}, use) => use(bddFileData),
});

const bddFileData = [ // bdd-data-start
  {"pwTestLine":6,"pickleLine":10,"tags":["@only"],"steps":[{"pwStepLine":7,"gherkinStepLine":11,"keywordOrig":"Given ","keywordType":"Context","stepMatchArguments":[]},{"pwStepLine":8,"gherkinStepLine":12,"keywordOrig":"And ","keywordType":"Context","stepMatchArguments":[]},{"pwStepLine":9,"gherkinStepLine":13,"keywordOrig":"When ","keywordType":"Action","stepMatchArguments":[{"group":{"start":15,"value":"\"Sign in\"","children":[{"start":16,"value":"Sign in","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]},{"pwStepLine":10,"gherkinStepLine":14,"keywordOrig":"Then ","keywordType":"Outcome","stepMatchArguments":[{"group":{"start":29,"value":"\"/collections\"","children":[{"start":30,"value":"/collections","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]}]},
]; // bdd-data-end