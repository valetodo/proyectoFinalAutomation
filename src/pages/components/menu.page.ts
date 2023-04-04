import { ElementActions } from "../../core/element-actions";
import {MouseActions} from "../../core/mouse-actions";
import { BasePage } from "../base.page";

class Menu extends BasePage {
    private _locatorUno = (nameCategory: string): string => `//ul[@id="ui-id-2"]//span[text()="${nameCategory}"]`;
    private _locatorDos = (nameCategory: string, subCategory: string): string => `//ul[@id="ui-id-2"]//span[text()="${nameCategory}"]/ancestor-or-self::a//following-sibling::ul//span[text()="${subCategory}"]`;
    private _locatorTres = (nameCategory: string, subCategory: string, category: string): string => `//ul[@id="ui-id-2"]//span[text()="${nameCategory}"]/ancestor-or-self::a//following-sibling::ul//span[text()="${subCategory}"]/ancestor-or-self::a//following-sibling::ul//span[text()="${category}"]`;
    
    constructor(){
        super();
    }

    async hoverButton(locator: string): Promise<void>  {
        await MouseActions.hover(locator);
    }

    async setLocatorUno(nameCategory: string): Promise<string> {
        return this._locatorUno(nameCategory);
    }

    async setlocatorDos(nameCategory: string, subCategory: string): Promise<string>  {
        return this._locatorDos(nameCategory, subCategory);
    }

    async setLocatorTres(nameCategory: string, subCategory: string, category: string): Promise<string> {
        return this._locatorTres(nameCategory, subCategory, category);
    }

}

export const menu = new Menu();