import {Given, Then, When} from "@cucumber/cucumber";
import {yogaPage} from "../../src/pages/shopYoga.page";
import {expect} from "chai";
import {driverInstance} from "../../src/core/driver";

Given('the user look for a price range', function () {

    console.log("1");
});

When('the user go to  button and click', async function () {
    await yogaPage.clickOnShopYoga()
});

When(' the user press on "price" in shopping Options and click', async function () {
    await yogaPage.clickonpricebutton()
});

When('the user click on {string} range', async function (range) {
    await yogaPage.clickonpricerangebutton()
});

;

Then('the user can see the products with select range {string}', async function (name) {
    // const actualName = await yogaPage.gettexproductpricerange();
    // console.log(actualName)
    // expect(actualName).includes('19');
    // const actualName = await headerPage.isNameInNavHeader();
    // expect(isVisible).true;
    await driverInstance.waitNetwork();
    const pageUrl = await driverInstance.getPageUrl();
    expect(pageUrl).includes(name);
});


Given('the user press on {string} in shopping Options', async function (name) {
    await yogaPage.clickonpricebutton()
});
