import { test as base } from '@playwright/test';
import LoginPage from '../Pages/LoginPage.js';

export const test = base.extend({
    loginAsAdmin: async ({ page }, use) => {
        const loginPage = new LoginPage(page);
        await loginPage.gotoUrl();
        await loginPage.login('abbas@google.com', 'admin', 'Welcome, Abbas!');
        await use(page);
    },

    loginAsReceptionist: async ({ page }, use) => {
        const loginPage = new LoginPage(page);
        await loginPage.gotoUrl();
        await loginPage.login('recp@gmail.com', 'r123', 'Welcome, recp!');
        await use(page);
    },

    loginAsTeacher: async ({ page }, use) => {
        const loginPage = new LoginPage(page);
        await loginPage.gotoUrl();
        await loginPage.login('rohaanali82005@gmail.com', 'r123', 'Welcome, Muhammad Rohan Ali!');
        await use(page);
    },

    loginAsStudent: async ({ page }, use) => {
        const loginPage = new LoginPage(page);
        await loginPage.gotoUrl();
        await loginPage.login('bscs2380246@szabist.pk', 'a123', 'Welcome, Abuzar!');
        await use(page);
    }
});

export { expect } from '@playwright/test';
