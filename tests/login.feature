@login
Feature: ecom website login

    Feature Description

    Scenario: Verify user is able to login with valid credentials
	    Given I navigate to "https://ultimateqa.com/automation"
		And I click on "Login automation"
	    And I enter E-Mail Address "unni123@gmail.com"
	    And I enter password "test12345678"
        When I click on the "Sign in"
	    Then I should verify url contains "/collections"


	  Scenario: Verify user is able to login with following valid credentials
	    Given I navigate to "https://ultimateqa.com/automation"
		And I click on "Login automation"
	    And I enter E-Mail Address "<EmailAddress>"
	    And I enter password "<Password>"
        When I click on the "Sign in"
	    Then If user not able to login verify url contains "users/sign_in"
		Examples:
			| EmailAddress | Password | 
			| sandeep@gmail.com  | sandeep12345678  | 	
			| darshan@gmail.com  | darshan1234  | 	
			| lacchi@gmail.com   | lacchi1234  | 		


