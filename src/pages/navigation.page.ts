import {BasePage} from "./base.page";
import { ElementActions } from "../core/element-actions";

class NavigationPage extends BasePage {
    private searchTextbox: string = "#search";
    private searchButton: string = "//form[@id='search_mini_form']//button";

    constructor() {
        super();
    }

    async addTextToSearch(textToSearch: string): Promise<void> {
        await ElementActions.setText(this.searchTextbox, textToSearch)
    }

    async clickOnSearchButton(): Promise<void> {
        await ElementActions.click(this.searchButton)
    }

}

export const navigatePage = new NavigationPage();
