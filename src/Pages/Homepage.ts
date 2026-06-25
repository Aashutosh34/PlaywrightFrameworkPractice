

import { Locator, Page } from "@playwright/test";
import { Basepage } from "./Basepage";

export class Homepage extends Basepage {

    //private Locators: 
    private readonly logoutLink: Locator;
    private readonly headers: Locator;
    private readonly search: Locator;
    private readonly searchIcon: Locator;

    private readonly logo: Locator;


    //const... of the class: init the locators
    constructor(page: Page) {
        super(page);
        this.logoutLink = page.getByRole('link', { name: 'Logout' });
        this.headers = page.getByRole('heading', { level: 2 });
        this.search = page.getByRole('textbox', { name: 'Search' });
        this.searchIcon = page.locator('div#search button');
        this.logo = page.locator('.x1lliihq.x2lah0s.x1k90msu.x2h7rmj.x1qfuztq.x1fey0fg.xy7');
    };

    //public page actions(methods)/behaviour
    async getHomePageTitle(): Promise<string> {
        return await this.page.title();
    }

    async isLogoutLinkExist(): Promise<boolean> {
        return await this.logoutLink.isVisible();
    }

    async getHomePageHeaders(): Promise<string[]> {
        return await this.headers.allInnerTexts();
    }

    async doSearch(searchkey: string): Promise<void> {
        console.log(`search key: ${searchkey}`);
        await this.search.fill(searchkey);
        await this.searchIcon.click();
    }

}