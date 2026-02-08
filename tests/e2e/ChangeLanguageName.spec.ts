import {expect, test} from '@playwright/test';
import {MainPage} from "../../src/pages/MainPage";
import {SettingsPage} from "../../src/pages/SettingsPage";
import {LoginPage} from "../../src/pages/LoginPage";
import {Users} from "../../src/data/Users";
import {CommonUiData} from "../../src/data/CommonUiData";


test.describe('Change language name on wikipedia', () => {
    test('For register user', async ({page}) => {
        const mainPage = new MainPage(page);
        const loginPage = new LoginPage(page);
        const settingsPage = new SettingsPage(page);
        await test.step('login', async () => {
            await mainPage.navigate();
            await mainPage.openLogin();
            await loginPage.login(Users.defaultUser);
        })
        await test.step('navigate to preference', async () => {
            await mainPage.openPreferences();
        })
        await test.step('change languages', async () => {
            await mainPage.openPreferences();
            await settingsPage.changeLanguageUk();
            await expect(mainPage.getMainMenuLocator()).toContainText(CommonUiData.UKRAINIAN_LNG_TITLE);
            await expect(page.locator('//html')).toHaveAttribute('lang', 'uk');
            await settingsPage.changeLanguageEn();
            await expect(mainPage.getMainMenuLocator()).toContainText(CommonUiData.ENGLISH_LNG_TITLE);
            await expect(page.locator('//html')).toHaveAttribute('lang', 'en');
        })
        await test.step('logout ', async () => {
            await mainPage.openLogOut();
        })

    });
});
