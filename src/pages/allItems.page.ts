import {BasePage} from "./base.page";
import { ElementActions } from "../core/element-actions";
import {MouseActions} from "../core/mouse-actions"

class AllItemsPage extends BasePage {
    private searchResultLabel: string = "//div[@class='page-title-wrapper']//span";
    private _product: string = "//li[@class='product-item'][1]"
    private toCompare = (itemName: string): string => `//a[contains(text(), "${itemName}")]/ancestor-or-self::div[@class='product-item-info']//a[@class='action tocompare']`
    private itemName = (itemName: string): string => `//div[@class='product-item-info']//a[contains(text(), "${itemName}")]`;

    constructor() {
        super();
    }

    async getLabelSearch(): Promise<string> {
        return await ElementActions.getElementText(this.searchResultLabel);
    }

    async clickToCompareProduct (itemName: string): Promise<void> {
        await MouseActions.hover(this.itemName(itemName))
        await ElementActions.click(this.toCompare(itemName))
    }
}

export const allItemsPage = new AllItemsPage();
