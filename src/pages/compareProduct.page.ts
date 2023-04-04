import {BasePage} from "./base.page";
import { ElementActions } from "../core/element-actions";
import {MouseActions} from "../core/mouse-actions"
import {expect} from "chai";

class CompareProduct extends BasePage {

    private _nameToCompare = (itemName: string): string => `//ol[@id='compare-items']//a[text()='${itemName}']`;
    private _compareButton: string = '//div[@class="actions-toolbar"]//span[text()="Compare"]'
    private _productLabel = (itemName: string): string => `//div[@id= "authenticationPopup"]//following-sibling::div//a[contains(text(), "${itemName}")]`

    private removeProduct: string = "//thead//following-sibling::td/a"
    private okDeleteButton: string = "//button[@class='action-primary action-accept']";
    private messageEmptyProduct: string = "//div[@class='message info empty']";

    constructor() {
        super();
    }

    get nameToCompare(): (itemName: string) => string {
        return this._nameToCompare;
    }

    get compareButton(): string {
        return this._compareButton;
    }

    get productLabel(): (itemName: string) => string {
        return this._productLabel;
    }

    async deleteProductCompare(): Promise<void> {
        try {
            while (! await ElementActions.getElementVisibleInPage(this.messageEmptyProduct)) {
                await ElementActions.click(this.removeProduct);
                await ElementActions.click(this.okDeleteButton)
            }
        } catch (e) {
            console.log("element not found" + e)
        }
    }

}

export const compareProduct: CompareProduct = new CompareProduct();