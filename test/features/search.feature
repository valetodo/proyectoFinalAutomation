
Feature: test search text

  @starLogin @ui-tests @prueba
  Scenario: verify it is possible search a product with search textbox
    Given fill the search texbox with "t-shirt"
    When go to search button and click
    Then in the page must show a label with name "t-shirt"