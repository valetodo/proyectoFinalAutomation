import {driverInstance} from "../src/core/driver";
import {loginPage} from "../src/pages/login.page";

describe('Feature Login', () => {

    beforeAll(async () => {
        //loginPage = new LoginPage();
        await driverInstance.start();
    });

    afterAll(async () => {
        await driverInstance.closeDriver();
    });

    it('Go To Page', async () => {
        await loginPage.clickOnLogin()
        await driverInstance.waitTime(3500);
    });

});