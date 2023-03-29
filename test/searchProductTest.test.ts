import {driverInstance} from "../src/core/driver";
import {loginPage} from "../src/pages/login.page";
import {navigatePage} from "../src/pages/navigation.page";
import {allItemsPage} from "../src/pages/allItems.page";

describe('Search a product', () => {

    beforeAll(async () => {
        await driverInstance.start();
        await loginPage.loginPage();
    }, 100000);

    afterAll(async () => {
        await driverInstance.closeDriver();
    });

    it('search a product', async () => {
        await driverInstance.waitTime(1500);
        const searchText : string = "t-shirt";
        await navigatePage.addTextToSearch(searchText)
        await navigatePage.clickOnSearchButton()
        let searchTextInPage: string = await allItemsPage.getLabelSearch()
        expect(searchTextInPage.includes(searchText)).toBeTruthy();
    }, 70000);

});