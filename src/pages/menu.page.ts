import { ElementActions } from "../core/element-actions";
import {MouseActions} from "../core/mouse-actions";
import { BasePage } from "./base.page";

class Menu extends BasePage {
    public locatorUno: string = '//ul[@id="ui-id-2"]//span[text()="Men"]';
    public locatorDos: string = '//ul[@id="ui-id-2"]//span[text()="Men"]/ancestor-or-self::a//following-sibling::ul//span[text()="Tops"]'
    public locatorTres: string = '//ul[@id="ui-id-2"]//span[text()="Men"]/ancestor-or-self::a//following-sibling::ul//span[text()="Tops"]/ancestor-or-self::a//following-sibling::ul//span[text()="Tees"]'
    
    constructor(){
        super();
    }

    async hoverButton(locator: string) {
        await MouseActions.hover(locator);
    }

}

export const menu = new Menu();