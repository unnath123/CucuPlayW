@changeAccountInfo

Feature: Change account info

    Feature Description
Scenario: Login to a account and update some information and save changes
   Given I navigate to "https://ultimateqa.com/automation"
	And I click on "Login automation"
	And I enter E-Mail Address "unni123@gmail.com"
	And I enter password "test12345678"
    When I click on the "Sign in"
	Then I should verify url contains "/collections"
    When I click on the my profile icon
    And I click on the element in dropdown "My Account"
    Then I verify that the Account update page URL contains "/account"
    And I enter the Company details as "Google"
    And I enter the Professional details as "Software Engineer II"
    When I click on the save button "Save Changes"
    # Then I verify that the changes are saved successfully
