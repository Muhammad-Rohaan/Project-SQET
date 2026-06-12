import { test, expect } from '@playwright/test';
import LoginPage from '../Pages/LoginPage';
import LoginData from '../testdata/LoginData.json';


test('TC#1 - Login for Admin portal | Positive', async ({ page }) => {
    const loginData = LoginData.validUsers[0];
    const loginPage = new LoginPage(page);

    await loginPage.gotoUrl();
    await loginPage.login(loginData.email, loginData.password, loginData.expectedMsg);

    await page.waitForTimeout(5000);

});