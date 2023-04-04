import {Given, Then, When} from "@cucumber/cucumber";
import {yogaPage} from "../../src/pages/shopYoga.page";
import {allItemsPage} from "../../src/pages/allItems.page";
import {expect} from "chai";

Given('the user go to shop yoga button', async function () {
    await yogaPage.clickOnShopYoga()
});
// Then('in the page must show a label with name {string}', async function (itemName: string) {
//     let searchTextInPage: string = await allItemsPage.getLabelSearch()
//
//     expect(searchTextInPage.includes(itemName)).to.be.true;
// });