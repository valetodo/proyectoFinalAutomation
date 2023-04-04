Feature: shop yoga button
@starLogin @ui-tests @shopYoga
    Scenario: verify if de user is in shop yoga page
    Given the user go to shop yoga button
    Then in the page must show a label with name "New Luma Yoga Collection"
