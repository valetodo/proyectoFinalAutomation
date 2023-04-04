@starLogin @ui-tests @test3
Feature: Test items jackets

  @delete-compare
  Scenario: navigate button
    Given The user navigates "Women" -> "Tops" -> "Jackets"
    And The user select to compare "Olivia 1/4 Zip Light Jacket"
    And The user select to compare "Nadia Elements Shell"
    When The user can see the "Olivia 1/4 Zip Light Jacket" product in compare section
    When The user can see the "Nadia Elements Shell" product in compare section
    When The user click on compare button
    Then The user can see the product "Olivia 1/4 Zip Light Jacket" in compare page
    Then The user can see the product "Nadia Elements Shell" in compare page

  Scenario: navigate to page Tees
    Given The user navigates "Men" -> "Tops" -> "Tees"
    Then in the page must show a label with name "Tees"
