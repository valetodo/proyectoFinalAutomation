import {BasePage} from "./base.page";
import { ElementActions } from "../core/element-actions";

class MainPage extends BasePage {
    private product: string = "//li[@class='product-item'][1]"
    constructor() {
        super();
    }

    async goToProduct(): Promise<void> {
        await ElementActions.moveToElement(this.product)
    }
}

export const mainPage = new MainPage();