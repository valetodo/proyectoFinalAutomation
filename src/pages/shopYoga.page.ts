import {BasePage} from "./base.page";
import { ElementActions } from "../core/element-actions";

class YogaPage extends BasePage {
    private shopYogaButton: string = ".action.more.button";
    private pricebutton: string = "#narrow-by-list > div:nth-child(6) > div.filter-options-title";
    /*private listpricerangebutton: string = "https://magento.softwaretestingboard.com/collections/yoga-new.html?price=10-20";*/
    private pricerangebutton: string = "#narrow-by-list > div.filter-options-item.allow.active > div.filter-options-content > ol > li:nth-child(1) > a";
    private productpricerange: string = "//span[@class='price']";

    constructor() {
        super();
    }

    async clickOnShopYoga() {
        await ElementActions.click(this.shopYogaButton)
    }
    async gettexproductpricerange() {
        return await ElementActions.getElementText(this.productpricerange)
    }
    async clickonpricebutton() {
        await ElementActions.click(this.pricebutton)
    } 

    async clickonpricerangebutton() {
        await ElementActions.click(this.pricerangebutton)  
    }
    /*async clickonpricerangebutton() {
    await ElementActions.click(this.pricerangebutton)
    }*/

}

    
/*class pricebutton extends BasePage {
        private pricebutton: string = "#narrow-by-list > div:nth-child(6) > div.filter-options-title";
        constructor() {
            super(); 
        }}*/
/*class listpricerangebutton extends BasePage {
         private listpricerangebutton: string = "https://magento.softwaretestingboard.com/collections/yoga-new.html?price=10-20";
        constructor() {
            super();
        }*/
/*class pricerangebutton extends BasePage {
            private pricerangebutton: string = "https://magento.softwaretestingboard.com/collections/yoga-new.html?price=10-20";
           constructor() {
               super();
           }*/
/*class productsbettenwrange extends BasePage {
            private pricerangebutton: string = "//span[@class='price']";
           constructor() {
               super();
           }   */
           

export const yogaPage = new YogaPage();