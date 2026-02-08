import type {Page, Locator} from '@playwright/test';
import {BasePage} from './BasePage';
import logger from "../utils/logger";

export class SettingsPage extends BasePage {
    readonly dropdownSelectLanguage: Locator;
    readonly ukPoint: Locator;
    readonly enPoint: Locator;
    readonly btnSave: Locator;

    constructor(page: Page) {
        super(page);
        this.dropdownSelectLanguage = page.locator('//*[@*=\'combobox\']/child::span[@id=\'ooui-2\']');
        this.ukPoint = page.locator('//span[contains(text(),\'uk - українська\')]');
        this.enPoint = page.locator('//span[contains(text(),\'en - English\')]');
        this.btnSave = page.locator('#prefcontrol');
    }

    async changeLanguageUk(): Promise<void> {
        await this.dropdownSelectLanguage.click();
        logger.info(`Opened dropdown menu select language`);
        await this.page.keyboard.press('u');
        logger.info(`Tap keyboard "u"`);
        await this.page.keyboard.press('k');
        logger.info(`Tap keyboard "k"`);
        await this.ukPoint.click();
        logger.info(`Clicked Ukrainian language`);
        await this.btnSave.click();
        logger.info(`Click btn Save`);
        await this.page.waitForLoadState('load');
        logger.info(`Waiting load page`);
    }

    async changeLanguageEn(): Promise<void> {
        await this.dropdownSelectLanguage.click();
        logger.info(`Opened dropdown menu select language`);
        await this.page.keyboard.press('e');
        logger.info(`Tap keyboard "e"`);
        await this.page.keyboard.press('n');
        logger.info(`Tap keyboard "n"`);
        await this.enPoint.click();
        logger.info(`Clicked English language`);
        await this.btnSave.click();
        logger.info(`Click btn Save`);
        await this.page.waitForLoadState('load');
        logger.info(`Waiting load page`);
    }

}
