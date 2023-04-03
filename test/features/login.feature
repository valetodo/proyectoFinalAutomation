@login @ui-tests
Feature: Login into Luma Web Paga

Scenario: Luma Login
    Given the user go to login button
    And the user sets the email
    And the user sets the password
    When the user clicks the Login button
    Then the user should see "Welcome" text on the header nav
