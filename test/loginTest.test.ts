import {driverInstance} from "../src/core/driver";
import {loginPage} from "../src/pages/login.page";

describe('Feature Login', () => {

    beforeAll(async () => {
        await driverInstance.start();
    }, 100000);

    afterAll(async () => {
        await driverInstance.closeDriver();
    });

    it('Go To Page', async () => {
        await loginPage.loginPage()
    }, 70000);

});