import {BasePage} from "./base.page";
import {ElementActions} from "../core/element-actions";

class CheckoutProductsPage extends BasePage {
    private _popPupOkDeleteProduct: string = '.action-primary.action-accept'
    private _noItemsCard: string = '//strong[text()="You have no items in your shopping cart."]'
    constructor() {
        super();
    }

    get popPupOkDeleteProduct(): string {
        return this._popPupOkDeleteProduct;
    }

    public async clickToDeleteProductToCart(nameProduct: string): Promise<void> {
        await ElementActions.click(`//a[text()='${nameProduct}']/ancestor-or-self::div[@class='product-item-details']//div[@class='product actions']//div[@class='secondary']`)
    }

    get noItemsCard(): string {
        return this._noItemsCard;
    }
}

export const checkoutProduct: CheckoutProductsPage = new CheckoutProductsPage()