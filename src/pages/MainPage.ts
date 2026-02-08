import {Page, Locator, expect} from '@playwright/test';
import { BasePage } from './BasePage';
import logger from "../utils/logger";

export class MainPage extends BasePage {
    readonly linkLogIn: Locator;
    readonly buttonPersonalTools: Locator;
    readonly linkPreferences: Locator;
    readonly linkPreferencesUk: Locator;
    readonly linkLogOut: Locator;
    readonly linkWikipediaLogo: Locator;
    readonly mainMenu: Locator;

    constructor(page: Page) {
        super(page);
        this.linkLogIn = page.locator('#pt-login-2');
        this.buttonPersonalTools = page.locator('#vector-user-links-dropdown-checkbox');
        this.linkPreferences = page.locator('#pt-preferences');
        this.linkPreferencesUk = page.getByRole('link', { name: 'Налаштування', exact: true });
        this.linkLogOut = page.getByRole('link', { name: 'Log out' });
        this.linkWikipediaLogo = page.getByRole('link', { name: 'Wikipedia The Free' });
        this.mainMenu = page.locator('.vector-pinnable-header-label');
    }

    async openLogin(): Promise<void> {
        await this.linkLogIn.click();
        logger.info(`Click btn Log In`);
    }

    async openPersonalToolsMenu(): Promise<void> {
        await this.buttonPersonalTools.click();
        logger.info(`Click btn Personal Tools Menu`);
    }

    async openPreferences(): Promise<void> {
        await this.openPersonalToolsMenu();
        await this.linkPreferences.waitFor({ state: 'visible' });
        logger.info(`Wait link preference to be visible`);
        await expect(this.linkPreferences).toBeEnabled();
        logger.info(`Wait link preference to be enable`);
        await this.linkPreferences.click({ force: true });
        logger.info(`Click preference point`);
    }

    async openLogOut(): Promise<void> {
        await this.openPersonalToolsMenu();
        logger.info(`Click personal tool menu`);
        await this.linkLogOut.click();
        logger.info(`Click log out`);
    }

    getMainMenuLocator() {
        return this.mainMenu.first();
    }
}
