import { After, Before, Status } from "@cucumber/cucumber";
import { TESTDATA } from "../../config.app";
import { CustomWorld } from "../../cucumber.config";
import { driverInstance } from "../../src/core/driver";
import {headerPage} from "../../src/pages/components/header.page"
import {loginPage} from "../../src/pages/login.page"
import {compareProduct} from "../../src/pages/compareProduct.page"

Before({name: 'Before UI Hook', tags: '@ui-tests'},async function(this: CustomWorld) {
    const browser: string = ("browser" in this.parameters) ? this.parameters.browser : "chrome"
    console.log()
    await driverInstance.start(TESTDATA.url, browser);
});

Before({name: 'Before login Hook', tags: '@starLogin'}, async function() {
    await headerPage.clickOnNavLogin();
    await loginPage.login(TESTDATA.email, TESTDATA.password);
});

After({name: 'After UI Hook', tags: '@ui-tests'},async function() {    
    await driverInstance.closeDriver();
});

After({name: 'delete compare product', tags: '@delete-compare'},async function() {
    await compareProduct.deleteProductCompare()
});

After({name: 'delete compare product', tags: '@delete-compare'},async function() {
    await compareProduct.deleteProductCompare()
});

After({name: 'Take Screenshot', tags: '@ui-tests'},async function(this: CustomWorld, scenario) {
    if(scenario.result?.status == Status.FAILED) {
        const image = await driverInstance.Page.screenshot();
        this.attach(image, 'image/png');
    }
});