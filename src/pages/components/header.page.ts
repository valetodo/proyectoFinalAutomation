import {ElementActions} from "../../core/element-actions";
import {BasePage} from "../base.page";

class HeaderPage extends BasePage {
    // private homeIcon: string = 'button[data-gtm-id="burger-home-button"]';
    private signInNavButton: string = "//div[@class='panel header']//li[@class='authorization-link']/a";
    private nameLogin: string = '//div[@class="panel header"]//span[@class="logged-in"]';

    constructor() {
        super();
    }

    async clickOnNavLogin(): Promise<void> {
        await ElementActions.click(this.signInNavButton);
    }

    async isNameInNavHeader(): Promise<string> {
        return ElementActions.getElementText(this.nameLogin);
    }
}

export const headerPage = new HeaderPage();