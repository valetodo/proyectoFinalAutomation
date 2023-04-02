import {Given, Then, When} from "@cucumber/cucumber";
import {headerCardPage} from "../../src/pages/components/headerCard.page";
import {allItemsPage} from "../../src/pages/allItems.page";
import {expect} from "chai";


Given('fill the search texbox with {string}', async function (itemName: string) {
    await headerCardPage.addTextToSearch(itemName)
});


When('go to search button and click', async function () {
    await headerCardPage.clickOnSearchButton();
});


Then('in the page must show a label with name {string}', async function (itemName: string) {
    let searchTextInPage: string = await allItemsPage.getLabelSearch()
    expect(searchTextInPage.includes(itemName)).to.be.true;
});
