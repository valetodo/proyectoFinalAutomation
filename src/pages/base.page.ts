import { ElementActions } from "../core/element-actions";

export class BasePage {
    constructor(){}

    async isElementDisplayed(locator: string): Promise<boolean> {        
        return ElementActions.isElementVisible(locator);
    }

    async clickOnElement(locator: string): Promise<void> {
        await ElementActions.click(locator);
    }

    async getNameElement(locator: string): Promise<string> {
        return await ElementActions.getElementText(locator);
    }

    async elementIsVisibleInPage(locator: string): Promise<boolean> {
        return ElementActions.getElementVisibleInPage(locator);
    }
}
