import {Given, Then, When} from "@cucumber/cucumber";
import {menu} from "../../src/pages/components/menu.page"
import {allItemsPage} from "../../src/pages/allItems.page"
import {compareProduct} from "../../src/pages/compareProduct.page"
import {expect} from "chai";

Given("The user navigates {string} -> {string} -> {string}", async function (nameCategory, subCategory, category) {
    await menu.hoverButton(await menu.setLocatorUno(nameCategory))
    await menu.hoverButton(await menu.setlocatorDos(nameCategory, subCategory))
    await menu.clickOnElement(await menu.setLocatorTres(nameCategory, subCategory, category))
});
When("The user can see the {string} product in compare section", async function (item: string) {
    const isDisplayed: boolean = await compareProduct.isElementDisplayed(compareProduct.nameToCompare(item))
    expect(isDisplayed).to.be.true;
});
Then("The user click on compare button", async function (): Promise<void> {
    await compareProduct.clickOnElement(compareProduct.compareButton)
});
Then("The user can see the product {string} in compare page", async function (itemName: string) {
    const isVisible: boolean = await compareProduct.isElementDisplayed(compareProduct.productLabel(itemName))
    expect(isVisible).to.be.true;
});
Given("The user select to compare {string}",async function (itemName: string) {
    await allItemsPage.clickToCompareProduct(itemName);
});