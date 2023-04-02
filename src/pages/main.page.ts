import {BasePage} from "./base.page";
import { ElementActions } from "../core/element-actions";
import {MouseActions} from "../core/mouse-actions"

class MainPage extends BasePage {

    constructor() {
        super();
    }

    async hoverAProduct(position: number): Promise<void> {
        await MouseActions.hover(await this.getProductLocator(position))
    }

    public async clickToCartProductButton(position: number): Promise<void> {
        await ElementActions.click(`//li[@class='product-item'][${position}]//button[contains(@title, 'Add to Cart')]`)
    }
    //li[@class='product-item'][1]//strong//a
    public async clickToSizeButton(position: number, size: string): Promise<void> {
        await ElementActions.click(`//li[@class='product-item'][${position}]//div[text()='${size}']`)
    }


    public async clickToColorButton(position: number, color: string): Promise<void> {
        await ElementActions.click(`//li[@class='product-item'][${position}]//div[contains(@aria-label, '${color}')]`)
    }

    private async getProductLocator(position: number) : Promise<string> {
        return `//li[@class='product-item'][${position}]`;
    }

    public async nameProductLocator(position: number): Promise<string>{
        return `//li[@class='product-item'][${position}]//strong//a`
    }
}

export const mainPage = new MainPage();