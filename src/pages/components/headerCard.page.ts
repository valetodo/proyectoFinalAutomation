import {BasePage} from "../base.page";
import { ElementActions } from "../../core/element-actions";

class HeaderCardPage extends BasePage {
    private searchTextbox: string = "#search";
    private searchButton: string = "//form[@id='search_mini_form']//button";
    private _card: string = ".minicart-wrapper";

    constructor() {
        super();
    }

    async addTextToSearch(textToSearch: string): Promise<void> {
        await ElementActions.setText(this.searchTextbox, textToSearch)
    }

    async clickOnSearchButton(): Promise<void> {
        await ElementActions.click(this.searchButton)
    }

    get cardLocator(): string {
        return this._card;
    }

}

export const headerCardPage = new HeaderCardPage();
