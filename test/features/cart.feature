Feature: test product
  Everybody wants to know when it's Friday

  @starLogin @ui-tests @cart
  Scenario: Verify delete a product to cart
    Given go to product "1" in main page
    And select the "S" size product
    And select the "Orange" color producto
    And click add to card the product
    And go to cart and view the product added
    When Delete the product added
    When click on button OK for delete
    Then the product should not be in card menu