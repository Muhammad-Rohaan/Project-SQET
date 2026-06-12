import { test, expect } from '@playwright/test';
import LoginPage from '../Pages/LoginPage';
import LoginData from '../testdata/LoginData.json';


LoginData.validUsers.forEach((data) => {
    
    test(`login for all valid roles ${data.email}`, async ({ page }) => {
        // const loginData = LoginData.validUsers[2];
        const loginPage = new LoginPage(page);
        
        await loginPage.gotoUrl();
        await loginPage.login(data.email, data.password, data.expectedMsg);
        
        await page.waitForTimeout(5000);
        
    });
    
});

LoginData.invalidUsers.forEach((data) => {
    
    test(`login for invalid roles ${data.email}`, async ({ page }) => {
        // const loginData = LoginData.validUsers[2];
        const loginPage = new LoginPage(page);
        await loginPage.gotoUrl();
        await loginPage.login(data.email, data.password, data.expectedMsg);
        
        await page.waitForTimeout(5000);
        
    });
    
});

