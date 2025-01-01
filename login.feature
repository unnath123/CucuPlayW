@login
Feature: ecom website login

    Feature Description

    Scenario: Verify user is able to login with valid credentials
      Given I navigate to "https://demo.nopcommerce.com/login?returnUrl=%2F"
      And I click on "Log in"
      And I enter E-Mail Address "unni@gmail.com"
      And I enter password "test123"
      When I click on the "Log in"
    #   Then I should verify url contains "route=account/account"
