import {Given, Then, When} from "@cucumber/cucumber";
import { mainPage } from "../../src/pages/main.page";
import {CustomWorld} from "../../cucumber.config";
import {headerCardPage} from "../../src/pages/components/headerCard.page";

import {checkoutProduct} from "../../src/pages/checkoutProducts.page";

Given(/^go to product "([A-Za-z0-9]+)" in main page$/, async function (this: CustomWorld ,position: number) {
    this.position = position
    await mainPage.hoverAProduct(position)
});
Given(/^select the "([A-Za-z]+)" size product$/, async function (this: CustomWorld, size: string) {
    this.nameProduct = await mainPage.getNameElement(await mainPage.nameProductLocator(this.position))
    await mainPage.clickToSizeButton(this.position, size)
});
Given(/^select the "([A-Za-z]+)" color producto$/, async function (this: CustomWorld, color: string) {
    await mainPage.clickToColorButton(this.position, color)

});
Given(/^click add to card the product$/, async function (this: CustomWorld) {
    await mainPage.clickToCartProductButton(this.position)
});
Given(/^go to cart and view the product added$/, async function () {
    await headerCardPage.clickOnElement(headerCardPage.cardLocator)
});
When(/^Delete the product added$/, async function () {
    await checkoutProduct.clickToDeleteProductToCart(this.nameProduct)
});
When(/^click on button OK for delete$/, async function () {
    await checkoutProduct.clickOnElement(checkoutProduct.popPupOkDeleteProduct)
});
Then(/^the product should not be in card menu$/, async function () {
    await checkoutProduct.elementIsVisibleInPage(checkoutProduct.noItemsCard)
});