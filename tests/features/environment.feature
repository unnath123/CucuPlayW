
@only
Feature: Verify login with different enviroment

    Feature Description

	Verify user is able to login with dev, qa, and prod

    @only
	Scenario: Verify user is able to login with dev, qa, and prod
	 Given I navigate to home page
	 And I enter E-Mail Address and Password
     When I click on the "Sign in"
	 Then I should verify url contains "/collections"
