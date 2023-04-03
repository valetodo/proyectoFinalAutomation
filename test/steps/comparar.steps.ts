import {Given, Then, When} from "@cucumber/cucumber";
import {comparar} from "../../src/pages/comparar.page"

Given("I go to page items", async function () {
    await comparar.hoverButton(comparar.locator1)
});
When("this an action", async function () {
    await comparar.hoverButton(comparar.locator2)
});
Then("this is expected result", async function () {
    await comparar.hoverButton(comparar.locator3)
});
Then("this is expected result", async function () {
    await comparar.clickOnElement(comparar.locator4)
});