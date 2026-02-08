import type { Page } from '@playwright/test';
import { Urls } from '../data/Urls';
import logger from "../utils/logger";

export abstract class BasePage {
    constructor(protected readonly page: Page) {}
 
    async navigate(): Promise<void> {
        await this.page.goto(Urls.wikipediaMain);
        logger.info(`Nabigate ${Urls.wikipediaMain}`);
    }
}
