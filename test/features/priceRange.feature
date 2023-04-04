Feature: look of price range

  @starLogin @ui-tests @price
  Scenario: look for a price range
    Given the user go to shop yoga button
    And the user press on "price" in shopping Options
    And the user click on "$10.00 - $19.99" range
    Then the user can see the products with select range "price=10-20"
