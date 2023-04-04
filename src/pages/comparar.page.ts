// import { ElementActions } from "../core/element-actions";
// import {MouseActions} from "../core/mouse-actions";
// import { BasePage } from "./base.page";
//
// class Comparar extends BasePage {
//     public locator1: string = '//ul[@id="ui-id-2"]//span[text()="Women"]';
//     public locator2: string = '//ul[@id="ui-id-2"]//span[text()="Women"]/ancestor-or-self::a//following-sibling::ul//span[text()="Tops"]'
//     public locator3: string = '//ul[@id="ui-id-2"]//span[text()="Women"]/ancestor-or-self::a//following-sibling::ul//span[text()="Tops"]/ancestor-or-self::a//following-sibling::ul//span[text()="Jackets"]'
//     public locator4:string = '//div[@id= "authenticationPopup"]//following-sibling::div[2]/ol/li[1]//div[@class= "product-item-info"]/div//div[@class= "product-item-inner"]/div//div[@data-role= "add-to-links"]//span[contains(text(), "Add to Compare")]'
//
//     constructor(){
//         super();
//     }
//
//     async hoverButton(locator: string) {
//         await MouseActions.hover(locator);
//     }
//
// }
//
// export const comparar = new Comparar();