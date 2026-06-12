import { expect } from "@playwright/test";

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


    async gotoUrl() {
        await this.page.goto('http://localhost:5173/');
        await this.gotoLogin.click();
    }

    async login(email, password, expectedMsg) {
        await this.email.fill(email);
        await this.password.fill(password);
        await this.submitBtn.click();
        if (expectedMsg) {
            await expect(this.expectedMsg).toHaveText(expectedMsg);
        }
    }





}
export default LoginPage;