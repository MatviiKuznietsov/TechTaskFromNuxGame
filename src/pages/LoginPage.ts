import type { Page, Locator } from '@playwright/test';
import type { User } from '../entitys/User';
import { BasePage } from './BasePage';
import logger from '../utils/logger';

export class LoginPage extends BasePage {
    readonly inputUsername: Locator;
    readonly inputPassword: Locator;
    readonly buttonLogIn: Locator;

    constructor(page: Page) {
        super(page);
        this.inputUsername = page.locator('#wpName1');
        this.inputPassword = page.locator('#wpPassword1');
        this.buttonLogIn = page.locator('#wpLoginAttempt');
    }

    async login(user: User): Promise<void> {
        logger.info(`Login user: ${user}`);
        await this.inputUsername.fill(user.userName);
        logger.info(`Filled user name`);
        await this.inputPassword.fill(user.password);
        logger.info(`Filled user password`);
        await this.buttonLogIn.click();
        logger.info(`Click btn Log In`);
        await this.page.waitForLoadState('load');
        logger.info(`Waiting loading page`);
    }
}
