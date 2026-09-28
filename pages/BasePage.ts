import { Page } from "@playwright/test";
import { Logger } from "../utils/logger";

export class BasePage{
    constructor(protected page: Page){}

    async open(url: string){
        Logger.info(`Navigating to ${url}`);
        await this.page.goto(url);
    }
}