import {BasePage} from "./base.page";
import { ElementActions } from "../core/element-actions";

class LoginPage extends BasePage {

    private signInButton: string = "//div[@class='panel header']//li[@class='authorization-link']/a";
    constructor() {
        super();
    }

    async clickOnLogin() {
        await ElementActions.click(this.signInButton)
    }
}

export const loginPage = new LoginPage();