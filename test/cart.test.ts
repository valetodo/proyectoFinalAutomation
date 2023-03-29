import {driverInstance} from "../src/core/driver";
import {loginPage} from "../src/pages/login.page";
import {mainPage} from "../src/pages/main.page";

describe('Search a product', () => {

    beforeAll(async () => {
        await driverInstance.start();
        await loginPage.loginPage();
    }, 100000);

    afterAll(async () => {
        await driverInstance.closeDriver();
    });

    it('delete product card', async () => {
        await mainPage.goToProduct();
        await driverInstance.waitTime(5000);
    }, 70000)
});