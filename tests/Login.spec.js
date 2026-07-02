import { test, expect } from '@playwright/test';
import LoginPage from '../Pages/LoginPage';
import LoginData from '../testdata/LoginData.json';

test.describe('Login', () => {

    LoginData.validUsers.forEach((data) => {

        test(` TC01 - login for all valid roles ${data.email}`, async ({ page }) => {
            // const loginData = LoginData.validUsers[2];
            const loginPage = new LoginPage(page);

            await loginPage.gotoUrl();
            await loginPage.login(data.email, data.password, data.expectedMsg);

            await page.waitForTimeout(5000);
            await loginPage.attachScreenshot('Welcome Message Should be displayed');
        });

    });

    LoginData.invalidUsers.forEach((data) => {

        test(` TC02 - login for invalid roles ${data.email}`, async ({ page }) => {
            // const loginData = LoginData.validUsers[2];
            const loginPage = new LoginPage(page);
            await loginPage.gotoUrl();
            await loginPage.login(data.email, data.password, data.expectedMsg);

            await page.waitForTimeout(5000);

        });

    });

    test('TC03 - Verify password field masking for security', async ({ page }) => {
        const loginPage = new LoginPage(page);
        await loginPage.gotoUrl();
        // Verify the input is of type 'password' to ensure character masking
        const passwordInput = page.locator('input[type="password"]');
        await expect(passwordInput).toBeVisible();
    });

    test('TC04 - Login attempt with empty fields | Negative', async ({ page }) => {
        const loginPage = new LoginPage(page);
        await loginPage.gotoUrl();
        // Passing empty strings to verify validation or lack of redirection
        await loginPage.login("", "", "");
        await expect(page).toHaveURL(/.*login/i);
    });

    test('TC05 - Verify Login Page load and visibility', async ({ page }) => {
        const loginPage = new LoginPage(page);
        await loginPage.gotoUrl();
        await expect(page).toHaveURL(/.*login/i);
    });

    test('TC06: Verify email input field exists', async ({ page }) => {
        const loginPage = new LoginPage(page);
        await loginPage.gotoUrl();
        await expect(loginPage.email).toBeVisible();
    });

    test('TC07: Verify password input field exists', async ({ page }) => {
        const loginPage = new LoginPage(page);
        await loginPage.gotoUrl();
        await expect(loginPage.password).toBeVisible();
    });

    test('TC08: Verify submit button exists', async ({ page }) => {
        const loginPage = new LoginPage(page);
        await loginPage.gotoUrl();
        await expect(loginPage.submitBtn).toBeVisible();
    });



});