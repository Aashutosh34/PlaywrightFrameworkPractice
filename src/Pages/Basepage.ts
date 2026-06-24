import { Page } from "@playwright/test";

export class Basepage {
    protected readonly page: Page;
    constructor(page: Page) {
        this.page = page;
    }
}