import { test, expect } from "@playwright/test";

class LoginPage {

    constructor(page) {
        this.page = page;
        this.gotoLogin = page.getByRole('link', { name: 'Launch Portal' });
        this.email = page.getByLabel('Email or ID');
        this.password = page.getByLabel('Password');
        this.submitBtn = page.locator('#submitBtn');
        this.expectedMsg = page.getByRole('heading', {
            level: 2
        });
    }

    // this.username = page.locator('#username') id


    async gotoUrl() {
        await this.page.goto('http://localhost:5173/');
        await this.gotoLogin.click();
        await this.attachScreenshot('Login page opened');
    }

    async login(email, password, expectedMsg) {
        await this.email.fill(email);
        await this.attachScreenshot('02 - After entering Email/ ID');
        await this.password.fill(password);
        await this.attachScreenshot('03 - After entering password');
        await this.submitBtn.click();
        await this.attachScreenshot('04 - After clicking Login');
        if (expectedMsg) {
            await expect(this.expectedMsg).toHaveText(expectedMsg);
        }
    }

    async attachScreenshot(name) {
        await test.info().attach(name, {
            body: await this.page.screenshot(),
            contentType: 'image/png',
        });
    }





}
export default LoginPage;