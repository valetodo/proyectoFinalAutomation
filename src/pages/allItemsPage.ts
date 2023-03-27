import {BasePage} from "./base.page";
import { ElementActions } from "../core/element-actions";

class AllItemsPage extends BasePage {
    private searchResultLabel: string = ".page-title-wrapper";

    constructor() {
        super();
    }

    async getLabelSearch(): Promise<string> {
        return await ElementActions.getElementText(this.searchResultLabel);
    }

}

export const allItemsPage = new AllItemsPage();
