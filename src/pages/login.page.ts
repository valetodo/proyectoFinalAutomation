import {BasePage} from "./base.page";
import { ElementActions } from "../core/element-actions";
import {driverInstance} from "../core/driver";

class LoginPage extends BasePage {

    private signInNavButton: string = "//div[@class='panel header']//li[@class='authorization-link']/a";
    private emailTextbox: string = "#email";
    private passwordTextbox: string = "#pass";
    private signIntoPageButton: string = "#send2";
    constructor() {
        super();
    }

    async loginPage() {
        await ElementActions.click(this.signInNavButton);
        await ElementActions.setText(this.emailTextbox, "correo@gmail.com");

        await ElementActions.setText(this.passwordTextbox, "Prueba123");

        await ElementActions.click(this.signIntoPageButton);
    }
}

export const loginPage = new LoginPage();